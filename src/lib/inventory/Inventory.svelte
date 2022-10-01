<script>
	import { rarity } from '$lib/data/rarity';
	import Slider2PartsHori from '$lib/helpers/Slider2PartsHori.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Coins from '../coins/Coins.svelte';
	import PetItem from './PetItem.svelte';
	import RessourceItem from './RessourceItem.svelte';

	export let playerPets = [];
	export let playerRessources = {};
	export let playerCoins = 0;
	export let displayInventory = false;

	let sortedInventory = [];
	let selected = 'right';

	$: if (playerRessources) {
		sortInventory();
	}

	function sortInventory() {
		sortedInventory = [];
		rarity.forEach((el) => {
			if (playerRessources[el]) {
				sortedInventory[el] = playerRessources[el];
			}
		});
	}
</script>

<SliderDown display={displayInventory} color={'bg-inventory'} zIndex={12}>
	<Slider2PartsHori bind:selected left={'Familiers'} right={'Ressources'} />
	<div
		class="flex w-auto h-screen transition-all 
			{selected == 'right' ? 'showRight' : 'showLeft'}"
	>
		<div class="w-full h-screen shrink-0">
			{#each playerPets as pet, i}
				<PetItem {pet} {i} />
			{/each}
		</div>

		<div class="w-full h-screen shrink-0">
			<Coins bind:playerCoins />
			{#each Object.entries(sortedInventory) as [name, amount]}
				<RessourceItem {name} {amount} />
			{/each}
		</div>
	</div>
</SliderDown>

<style>
	.showRight {
		transform: translateX(-100%);
	}

	.showLeft {
		transform: translateX(0%);
	}
</style>
