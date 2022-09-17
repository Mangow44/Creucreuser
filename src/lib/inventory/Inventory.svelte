<script>
	import Item from './Item.svelte';

	export let playerInventory = {};
	export let displayInventory = false;
</script>

<div
	class="flex w-full h-screen fixed bg-dark-taupe z-10 inventory 
			{displayInventory ? 'displayInventory' : 'hideInventory'}"
>
	<div class="mt-auto w-full h-[90%] overflow-auto">
		{#each Object.entries(playerInventory) as [name, amount]}
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
