<script>
	import { template } from '$lib/data/player';
	import { inventory } from '$lib/data/inventory';
	import { ressources } from '$lib/data/ressources';
	import Coins from '$lib/Coins/index.svelte';
	import InventoryButton from '$lib/inventory/InventoryButton.svelte';
	import ToolsBar from '$lib/ToolsBar/index.svelte';
	import Ressources from '$lib/ressources/Ressources.svelte';
	import Inputs from '$lib/Inputs/index.svelte';

	$: player = template;
	let playerInventory = inventory;
</script>

<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
	<Coins coins={player.coins} />
	<InventoryButton bind:playerInventory />
	<Ressources bind:player bind:playerInventory {ressources} />
	<ToolsBar bind:player />
	<Inputs bind:player />
</div>
