<script>
	import { rarity } from '$lib/data/rarity';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Item from './Item.svelte';

	export let playerRessources = {};
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

<SliderDown display={displayInventory} color={'bg-inventory'}>
	{#each Object.entries(sortedInventory) as [name, amount], i}
		<Item {name} {amount} {i} />
	{/each}
</SliderDown>
