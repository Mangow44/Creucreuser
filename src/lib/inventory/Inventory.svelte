<script>
	import { rarity } from '$lib/data/rarity';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Coins from '../coins/Coins.svelte';
	import Item from './Item.svelte';

	export let playerRessources = {};
	export let playerCoins = 0;
	export let displayInventory = false;
	let sortedInventory = [];

	$: if (playerRessources) {
		sortInventory();
	}

	const sortInventory = () => {
		sortedInventory = [];
		rarity.forEach((el) => {
			if (playerRessources[el]) {
				sortedInventory[el] = playerRessources[el];
			}
		});
	};
</script>

<SliderDown display={displayInventory} zIndex={12} color={'bg-inventory'}>
	<Coins bind:playerCoins />
	{#each Object.entries(sortedInventory) as [name, amount]}
		<Item {name} {amount} />
	{/each}
</SliderDown>
