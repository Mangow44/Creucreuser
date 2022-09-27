<script>
	import { worlds } from '$lib/data/worlds';
	import { getPlayerToolPower } from '$lib/helpers/getPlayerToolPower';
	import SliderDown from '$lib/helpers/SliderDown.svelte';
	import World from './World.svelte';

	export let playerTools = {};
	export let world = 0;

	let displayMap = false;
	let playerWorlds = [];

	$: if (playerTools) {
		playerWorlds = [];
		let playerPower = getPlayerToolPower(playerTools);
		worlds.forEach((world) => {
			if (playerPower >= world.powerRequired) playerWorlds = [...playerWorlds, world];
		});
	}
</script>

<div
	draggable="false"
	class="absolute right-3 top-5 w-[3rem] h-[3rem]"
	style="z-index:11;"
	on:click={() => {
		displayMap = !displayMap;
	}}
>
	{#if !displayMap}
		<img draggable="false" src="/logo/inventory.png" alt="inventory logo" />
	{:else}
		<img draggable="false" src="/logo/inventory_cross.png" alt="inventory logo" />
	{/if}
</div>

<SliderDown display={displayMap} zIndex={10} color={'bg-creme'}>
	{#each playerWorlds as worldInfo, i}
		<World bind:displayMap bind:world {worldInfo} {i} />
	{/each}
</SliderDown>
