<script>
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Burger from './Burger.svelte';
	import Missions from '../missions/Missions.svelte';
	import Leaderboard from '$lib/leaderboard/Leaderboard.svelte';
	import Shop from '$lib/shop/Shop.svelte';
	import Pets from '$lib/pets/Pets.svelte';

	export let playerInventory = {};
	export let playerCoins = 0;

	let displayMenu = false;
</script>

<Burger
	onClick={() => {
		displayMenu = !displayMenu;
	}}
/>

<SliderDown display={displayMenu} color={'bg-book'} zIndex={20}>
	<Missions bind:playerInventory {displayMenu} />
	<Shop bind:playerInventory bind:playerCoins {displayMenu} />
	<Pets bind:playerInventory {displayMenu} />
	<Leaderboard {displayMenu} />
</SliderDown>
