<script>
	import { onMount } from 'svelte';
	import { template } from '$lib/data/player';
	import { cubes } from '$lib/data/cubes';
	import ToolsBar from '$lib/ToolsBar/index.svelte';
	import Coins from '$lib/Coins/index.svelte';
	import Cubes from '$lib/Cubes/index.svelte';

	$: player = template;

	onMount(() => {
		window.addEventListener('keypress', (e) => {
			switch (e.key) {
				case '&':
					player.currentTool = player.tools[0];
					break;
				case 'é':
					player.currentTool = player.tools[1];
					break;
				case '"':
					player.currentTool = player.tools[2];
					break;
				case "'":
					player.currentTool = player.tools[3];
					break;
			}
		});
	});
</script>

<div class="relative main flex flex-col w-full min-h-screen bg-blanc">
	<Coins coins={player.coins} />
	<Cubes bind:player {cubes} />
	<ToolsBar bind:player />
</div>
