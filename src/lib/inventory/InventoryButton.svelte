<script>
	import Inventory from './Inventory.svelte';
	import { auth } from '$lib/firebase/config';
	import { db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';

	export let playerPets = [];
	export let playerRessources = {};
	export let playerCoins = 0;

	let htmlInventoryButton = {};
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
	draggable="false"
	bind:this={htmlInventoryButton}
	class="absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem]"
	style="z-index:13;"
	on:click={() => {
		displayInventory = !displayInventory;
	}}
>
	{#if !displayInventory}
		<img draggable="false" src="/logo/inventory.png" alt="inventory logo" />
	{:else}
		<img draggable="false" src="/logo/inventory_cross.png" alt="inventory logo" />
	{/if}
</div>

<Inventory bind:playerPets bind:playerRessources bind:playerCoins bind:displayInventory />
