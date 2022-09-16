<script>
	import { template } from '$lib/data/player';
	import { ressources } from '$lib/data/ressources';
	import ToolsBar from '$lib/ToolsBar/index.svelte';
	import Coins from '$lib/Coins/index.svelte';
	import Ressources from '$lib/Ressources/index.svelte';
	import Inputs from '$lib/Inputs/index.svelte';

	$: player = template;
</script>

<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
	<Coins coins={player.coins} />
	<Ressources bind:player {ressources} />
	<ToolsBar bind:player />
	<Inputs bind:player />
</div>
