<script>
	import { rarity } from '$lib/data/rarity';
	import { ressources } from '$lib/data/ressources';
	import { getPlayerToolPower } from '$lib/helpers/getPlayerToolPower';
	import MenuComponent from '$lib/helpers/MenuComponent.svelte';
	import Retour from '$lib/helpers/Retour.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import Coins from '$lib/coins/Coins.svelte';
	import Item from './Item.svelte';

	export let playerInventory = {};
	export let playerCoins = 0;
	export let displayMenu = false;

	let availableRessources = [];
	let sortedRessources = [];
	let displayShop = false;

	$: if (!displayMenu) displayShop = false;

	$: if (playerInventory) {
		availableRessources = [];
		let playerToolPower = getPlayerToolPower(playerInventory.tools);
		ressources.forEach((group) => {
			group.forEach((ressource) => {
				if (playerToolPower >= ressource.toolLevel) {
					let exists = availableRessources.find((ress) => {
						if (ress.name == ressource.name) return ress;
					});
					if (!exists) availableRessources = [...availableRessources, ressource];
				}
			});
		});

		sortShop();
	}

	const sortShop = () => {
		sortedRessources = [];
		rarity.forEach((el) => {
			let item = availableRessources.find((ress) => {
				if (ress.name == el) return ress;
			});
			if (item)
				sortedRessources = [
					...sortedRessources,
					availableRessources[availableRessources.indexOf(item)]
				];
		});
	};
</script>

<MenuComponent
	onClick={() => {
		displayShop = !displayShop;
	}}
	text={'Magasin'}
/>

<SliderDown display={displayShop} color={'bg-blanc'}>
	<Retour bind:display={displayShop} />

	<Coins bind:playerCoins color={'bg-taupe'} />
	{#each sortedRessources as ressource}
		<Item bind:playerInventory bind:displayShop {ressource} />
	{/each}
</SliderDown>
