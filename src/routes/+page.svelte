<script>
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/config';
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

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/connexion');
				return;
			} else {
				getInventory(user.uid).then((inv) => {
					playerInventory = inv;
				});
			}
		});
	});
</script>

{#await playerInventory then _}
	<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
		<InventoryButton bind:playerInventory />
		<Ressources bind:player bind:playerInventory {ressources} />
		<ToolsBar bind:player />
		<Inputs bind:player />
	</div>
{/await}
