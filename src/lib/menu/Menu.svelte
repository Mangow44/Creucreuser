<script>
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Burger from './Burger.svelte';
	import Missions from '../missions/Missions.svelte';
	import Leaderboard from '$lib/leaderboard/Leaderboard.svelte';

	export let player = {};
	let displayMenu = false;
</script>

<Burger
	onClick={() => {
		displayMenu = !displayMenu;
	}}
/>

<SliderDown display={displayMenu} color={'bg-book'} zIndex={'20'}>
	<Missions bind:player {displayMenu} />
	<Leaderboard {displayMenu} />
</SliderDown>
