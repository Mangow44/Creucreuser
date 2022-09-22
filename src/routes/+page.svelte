<script>
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/config';
	import { template } from '$lib/data/player/player';
	import { getInventory } from '$lib/data/player/getInventory';
	import InventoryButton from '$lib/inventory/InventoryButton.svelte';
	import ToolsBar from '$lib/toolsBar/ToolsBar.svelte';
	import Ressources from '$lib/ressources/Ressources.svelte';
	import Inputs from '$lib/inputs/Inputs.svelte';
	import Menu from '$lib/menu/Menu.svelte';

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
		<Menu bind:player />
		<InventoryButton bind:playerRessources={player.inventory.ressources} />
		<Ressources
			bind:playerRessources={player.inventory.ressources}
			bind:playerCurrentTool={player.currentTool}
		/>
		<ToolsBar
			bind:playerTools={player.inventory.tools}
			bind:playerCurrentTool={player.currentTool}
		/>
		<Inputs bind:playerTools={player.inventory.tools} bind:playerCurrentTool={player.currentTool} />
	{/if}
</div>
