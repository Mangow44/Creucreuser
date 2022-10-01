<script>
	import { missions } from '$lib/data/missions';
	import { tools } from '$lib/data/tools';
	import { auth, db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';
	import MenuComponent from '$lib/menu/MenuComponent.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Mission from './Mission.svelte';
	import Retour from '$lib/helpers/Retour.svelte';

	export let playerInventory = {};
	export let displayMenu = false;

	let displayMissions = false;
	let playerMissions = [];

	$: if (!displayMenu) displayMissions = false;

	$: if (displayMissions == true) getPlayerMissions();

	function getPlayerMissions() {
		playerMissions = [];
		playerInventory.tools.forEach((tool) => {
			if (!missions[tool.toolLevel - 1]) return;
			let mission = missions[tool.toolLevel - 1].find((mission) => {
				if (mission.toolFamily == tool.toolFamily) return mission;
			});
			playerMissions.push(mission);
		});
	}

	const validateMission = (mission) => {
		let playerMissionTool = playerInventory.tools.find((tool) => {
			if (tool.toolFamily == mission.toolFamily) return tool;
		});
		let rewardTool = tools[mission.toolLevel - 1].find((tool) => {
			if (tool.toolFamily == mission.toolFamily) return tool;
		});

		playerInventory.tools[playerInventory.tools.indexOf(playerMissionTool)] = rewardTool;
		playerInventory.ressources[mission.required] -= mission.amount;

		updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			ressources: Object.assign({}, playerInventory.ressources),
			tools: playerInventory.tools
		}).then(() => {
			getPlayerMissions();
		});
	};
</script>

<MenuComponent
	onClick={() => {
		displayMissions = !displayMissions;
	}}
	text={'Missions'}
	i={0}
/>

<SliderDown display={displayMissions} color={'bg-blanc'} zIndex={40}>
	<Retour bind:display={displayMissions} />

	{#each playerMissions as mission, i (mission)}
		<Mission
			bind:playerInventory
			onClick={() => {
				validateMission(mission);
			}}
			{mission}
			{i}
		/>
	{/each}
</SliderDown>
