<script>
	import Inventory from './Inventory.svelte';

	export let playerInventory = {};
	let htmlInventoryButton;
	let displayInventory = false;
	let init = false;

	$: if (playerInventory && htmlInventoryButton) {
		if (!init) {
			init = true;
		} else {
			animateInventory();
		}
	}

	let animateInventory = () => {
		htmlInventoryButton.classList.add('bouncing');
		setTimeout(() => {
			htmlInventoryButton.classList.remove('bouncing');
		}, 100);
	};
</script>

<div
	bind:this={htmlInventoryButton}
	class="absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem z-20"
	on:click={() => {
		displayInventory = !displayInventory;
	}}
>
	{#if !displayInventory}
		<img src="/logo/inventory.png" alt="inventory logo" />
	{:else}
		<img src="/logo/inventory_cross.png" alt="inventory logo" />
	{/if}
</div>

<Inventory bind:playerInventory bind:displayInventory />
