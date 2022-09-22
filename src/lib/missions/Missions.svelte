<script>
	import { missions } from '$lib/data/missions';
	import { tools } from '$lib/data/tools';
	import { auth, db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';
	import MenuComponent from '$lib/helpers/MC.svelte';
	import SliderDown from '$lib/helpers/SLD.svelte';
	import Mission from './Mission.svelte';
	import Retour from '$lib/helpers/Retour.svelte';

	export let player = {};
	export let displayMenu = false;

	let displayMissions = false;
	let playerMissions = [];

	$: if (!displayMenu) displayMissions = false;

	const getPlayerMissions = () => {
		playerMissions = [];
		player.inventory.tools.forEach((tool) => {
			if (!missions[tool.toolLevel - 1]) return;
			let mission = missions[tool.toolLevel - 1].find((mission) => {
				if (mission.toolFamily == tool.toolFamily) return mission;
			});
			playerMissions.push(mission);
		});
	};

	const validateMission = (mission) => {
		if (player.inventory.ressources[mission.required] < mission.amount) return;

		let playerMissionTool = player.inventory.tools.find((tool) => {
			if (tool.toolFamily == mission.toolFamily) return tool;
		});
		let rewardTool = tools[mission.toolLevel - 1].find((tool) => {
			if (tool.toolFamily == mission.toolFamily) return tool;
		});

		player.inventory.tools[player.inventory.tools.indexOf(playerMissionTool)] = rewardTool;
		player.inventory.ressources[mission.required] -= mission.amount;

		updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			ressources: Object.assign({}, player.inventory.ressources),
			tools: player.inventory.tools
		}).then(() => {
			getPlayerMissions();
		});
	};

	getPlayerMissions();
</script>

<MenuComponent
	onClick={() => {
		displayMissions = !displayMissions;
	}}
	text={'Missions'}
	i={0}
/>

<SliderDown display={displayMissions} zIndex={'40'} color={'bg-blanc'}>
	<Retour bind:display={displayMissions} />

	{#each playerMissions as mission, i (mission)}
		<Mission
			bind:player
			onClick={() => {
				validateMission(mission);
			}}
			{mission}
			{i}
		/>
	{/each}
</SliderDown>
