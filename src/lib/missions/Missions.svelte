<script>
	import { missions } from '$lib/data/missions';
	import MenuComponent from '$lib/helpers/menuComponent.svelte';
	import SliderDown from '$lib/helpers/sliderDown.svelte';
	import Mission from './Mission.svelte';

	export let player;
	export let displayMenu = false;
	let displayMissions = false;

	$: if (!displayMenu) displayMissions = false;
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

	{#each missions as mission, i}
		<Mission bind:player {mission} {i} />
	{/each}
</SliderDown>
