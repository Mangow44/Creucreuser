<script>
	import Inventory from './Inventory.svelte';
	import { auth } from '$lib/firebase/config';
	import { db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';

	export let playerRessources = {};
	let htmlInventoryButton;
	let displayInventory = false;

	$: if (playerRessources && htmlInventoryButton) {
		saveInventory();
	}

	async function saveInventory() {
		await updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			ressources: Object.assign({}, playerRessources)
		});
	}
</script>

<div
	bind:this={htmlInventoryButton}
	class="absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem]"
	style="z-index: 12;"
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

<Inventory bind:playerRessources bind:displayInventory />
