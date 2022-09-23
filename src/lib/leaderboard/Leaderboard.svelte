<script>
	import { db } from '$lib/firebase/config';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import MenuComponent from '$lib/helpers/MenuComponent.svelte';
	import Retour from '$lib/helpers/Retour.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import { getPlayerToolPower } from '$lib/helpers/getPlayerToolPower';

	export let displayMenu = false;
	let displayLeaderboard = false;
	let leaderboardData = [];

	$: if (!displayMenu) displayLeaderboard = false;

	$: if (leaderboardData) {
		leaderboardData.sort((a, b) => {
			return b.power - a.power;
		});
	}

	$: if (displayLeaderboard == true) updateLeaderboard();

	const updateLeaderboard = () => {
		leaderboardData = [];
		getDocs(collection(db, 'inventory')).then((snap) => {
			snap.forEach((document) => {
				getDoc(doc(db, 'player', document.id)).then((player) => {
					let power = getPlayerToolPower(document.data().tools);
					leaderboardData = [...leaderboardData, { power: power, name: player.data().name }];
				});
			});
		});
	};
</script>

<MenuComponent
	onClick={() => {
		displayLeaderboard = !displayLeaderboard;
	}}
	text={'Leaderboard'}
/>

<SliderDown display={displayLeaderboard} color={'bg-blanc'}>
	<Retour bind:display={displayLeaderboard} />

	{#each leaderboardData as player, i}
		<div class="flex items-center w-full h-8 fade-in bg-taupe {i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}">
			<p class="font-bold mx-2">{i + 1}</p>
			<p>{player.name}</p>
			<p class="ml-auto mr-2">Puissance équipement : {player.power}</p>
		</div>
	{/each}
</SliderDown>
