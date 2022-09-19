<script>
	import { rarity } from '$lib/data/rarity';
	import Item from './Item.svelte';

	export let playerInventory = {};
	export let displayInventory = false;
	let sortedInventory = [];

	$: if (playerInventory) {
		rarity.forEach((el) => {
			if (playerInventory[el]) {
				sortedInventory[el] = playerInventory[el];
			}
		});
	}
</script>

<div
	class="flex w-full h-screen fixed bg-dark-taupe z-10 inventory 
			{displayInventory ? 'displayInventory' : 'hideInventory'}"
>
	<div class="mt-auto w-full h-[90%] overflow-auto">
		{#each Object.entries(sortedInventory) as [name, amount]}
			<Item {name} {amount} />
		{/each}
	</div>
</div>

<style>
	.inventory {
		transition: all 1s ease;
	}

	.hideInventory {
		transform: translateY(-100%);
	}

	.displayInventory {
		transform: translateY(0%);
	}
</style>
