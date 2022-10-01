<script>
	import { pets } from '$lib/data/pets';
	import { auth, db } from '$lib/firebase/config';
	import MenuComponent from '$lib/menu/MenuComponent.svelte';
	import Retour from '$lib/helpers/Retour.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import { doc, updateDoc } from 'firebase/firestore';
	import Pet from './Pet.svelte';

	export let playerInventory = {};
	export let displayMenu = false;

	let playerPets = [];
	let displayPets = false;

	$: if (!displayMenu) displayPets = false;

	$: if (displayPets == true) getPlayerPets();

	function getPlayerPets() {
		playerPets = pets;
		playerInventory.pets.forEach((pet) => {
			let findPet = playerPets.find((pet_) => {
				return pet.name == pet_.name;
			});
			if (findPet) playerPets.splice(playerPets.indexOf(findPet), 1);
		});
	}

	function addPetToPlayerInventory(pet) {
		playerInventory.pets = [...playerInventory.pets, pet];

		updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			pets: playerInventory.pets
		}).then(() => {
			getPlayerPets();
		});
	}
</script>

<MenuComponent
	onClick={() => {
		displayPets = !displayPets;
	}}
	text={'Familiers'}
/>

<SliderDown display={displayPets} color={'bg-blanc'}>
	<Retour bind:display={displayPets} />

	{#each playerPets as pet, i}
		<Pet
			bind:displayPets
			bind:playerInventory
			{pet}
			onClick={() => addPetToPlayerInventory(pet)}
			{i}
		/>
	{/each}
</SliderDown>
