<script>
	import { rarity } from '$lib/data/rarity';
	import SliderDown from '$lib/helpers/sliderDown.svelte';
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

<SliderDown display={displayInventory} color="bg-dark-taupe">
	<div class="mt-auto w-full h-[90%] overflow-auto">
		{#each Object.entries(sortedInventory) as [name, amount]}
			<Item {name} {amount} />
		{/each}
	</div>
</SliderDown>
