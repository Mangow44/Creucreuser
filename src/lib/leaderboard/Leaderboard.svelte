<script>
	import { db } from '$lib/firebase/config';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import MenuComponent from '$lib/helpers/MenuComponent.svelte';
	import Retour from '$lib/helpers/Retour.svelte';
	import SliderDown from '$lib/helpers/SliderDown.svelte';

	export let displayMenu = false;
	let displayLeaderboard = false;
	$: data = [];

	$: if (!displayMenu) displayLeaderboard = false;
	$: if (data) {
		data.sort((a, b) => {
			return b.score - a.score;
		});
	}

	getDocs(collection(db, 'inventory')).then((snap) => {
		snap.forEach((document) => {
			getDoc(doc(db, 'player', document.id)).then((player) => {
				let score = 0;
				document.data().tools.forEach((tool) => {
					score += tool.toolLevel;
				});
				data = [...data, { score: score / 3, name: player.data().name }];
			});
		});
	});
</script>

<MenuComponent
	onClick={() => {
		displayLeaderboard = !displayLeaderboard;
	}}
	text={'Leaderboard'}
/>

<SliderDown display={displayLeaderboard} color={'bg-blanc'}>
	<Retour bind:display={displayLeaderboard} />

	{#each data as player, i}
		<div class="flex items-center w-full h-8 bg-taupe {i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}">
			<p class="font-bold mx-2">{i + 1}</p>
			<p>{player.name}</p>
			<p class="ml-auto mr-2">score : {player.score}</p>
		</div>
	{/each}
</SliderDown>
