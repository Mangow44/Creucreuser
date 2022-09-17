<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getAuth } from 'firebase/auth';
	import { template } from '$lib/data/player';
	import { getInventory } from '$lib/data/inventory';
	import { ressources } from '$lib/data/ressources';
	import Coins from '$lib/Coins/index.svelte';
	import InventoryButton from '$lib/inventory/InventoryButton.svelte';
	import ToolsBar from '$lib/ToolsBar/index.svelte';
	import Ressources from '$lib/ressources/Ressources.svelte';
	import Inputs from '$lib/Inputs/index.svelte';

	$: player = template;
	let playerInventory;
	// session + refonte visuelle inscri conne + tri de l'inventaire par ordre alpha
	onMount(() => {
		if (!getAuth().currentUser) {
			goto('/connexion');
		} else {
			getInventory(getAuth().currentUser?.uid).then((inv) => {
				playerInventory = inv;
			});
		}
	});
</script>

{#await playerInventory then _}
	<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
		<Coins coins={player.coins} />
		<InventoryButton bind:playerInventory />
		<Ressources bind:player bind:playerInventory {ressources} />
		<ToolsBar bind:player />
		<Inputs bind:player />
	</div>
{/await}
