<script>
	import { auth, db } from '$lib/firebase/config';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import MenuComponent from '$lib/menu/MenuComponent.svelte';
	import Retour from '$lib/helpers/Retour.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';

	export let displayMenu = false;

	let displayLeaderboard = false;
	let leaderboardData = [];

	$: if (!displayMenu) displayLeaderboard = false;

	$: if (leaderboardData) {
		leaderboardData.sort((a, b) => {
			return b.coins - a.coins;
		});
	}

	$: if (displayLeaderboard == true) updateLeaderboard();

	function updateLeaderboard() {
		leaderboardData = [];
		getDocs(collection(db, 'inventory')).then((snap) => {
			snap.forEach((document) => {
				getDoc(doc(db, 'player', document.id)).then((player) => {
					leaderboardData = [
						...leaderboardData,
						{ coins: document.data().coins, name: player.data().name, id: document.id }
					];
				});
			});
		});
	}
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
		<div
			class="flex items-center w-full h-8 fade-in shrink-0
		 		{i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}
				{player.id == auth.currentUser.uid ? 'bg-green-300' : 'bg-taupe'}"
		>
			<p class="font-bold mx-2">{i + 1}</p>
			<p>{player.name}</p>
			<p class="ml-auto mr-2">{player.coins.toFixed(2)}€</p>
		</div>
	{/each}
</SliderDown>
