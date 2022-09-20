<script>
	import { missions } from '$lib/data/missions';
	import { auth, db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';
	import { tools } from '$lib/data/tools';
	import MenuComponent from '$lib/helpers/menuComponent.svelte';
	import SliderDown from '$lib/helpers/sliderDown.svelte';
	import Mission from './Mission.svelte';

	export let player;
	export let displayMenu = false;

	let displayMissions = false;
	let playerMissions = [];

	$: if (!displayMenu) displayMissions = false;

	const getPlayerMissions = () => {
		playerMissions = [];
		player.inventory.tools.forEach((tool) => {
			missions.forEach((mission) => {
				if (mission.toolFamily == tool.toolFamily && mission.toolLevel == tool.toolLevel + 1) {
					playerMissions.push(mission);
				}
			});
		});
	};

	const validateMission = (mission) => {
		if (player.inventory.ressources[mission.required] >= mission.amount) {
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
		}
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

<SliderDown display={displayMissions} zIndex={'40'} color={'bg-creme'}>
	<div
		class="fixed right-3 top-8 font-bold text-dark"
		on:click={() => {
			displayMissions = false;
		}}
	>
		RETOUR
	</div>

	{#each playerMissions as mission, i}
		<Mission
			bind:player
			{mission}
			{i}
			onClick={() => {
				validateMission(mission);
			}}
		/>
	{/each}
</SliderDown>
