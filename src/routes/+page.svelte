<script>
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/config';
	import { template } from '$lib/data/player/player';
	import { getInventory } from '$lib/data/player/getInventory';
	import { ressources } from '$lib/data/ressources';
	import InventoryButton from '$lib/inventory/InventoryButton.svelte';
	import ToolsBar from '$lib/ToolsBar/index.svelte';
	import Ressources from '$lib/ressources/Ressources.svelte';
	import Inputs from '$lib/Inputs/index.svelte';

	$: player = template;

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/connexion');
				return;
			} else {
				getInventory(user.uid).then((inv) => {
					player.inventory = inv;
				});
			}
		});
	});
</script>

<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
	{#if player.inventory.ressources}
		<InventoryButton bind:playerRessources={player.inventory.ressources} />
		<Ressources bind:player {ressources} />
		<ToolsBar
			bind:playerTools={player.inventory.tools}
			bind:playerCurrentTool={player.currentTool}
		/>
		<Inputs bind:player />
	{/if}
</div>
