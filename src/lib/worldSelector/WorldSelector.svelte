<script>
	import { worlds } from '$lib/data/worlds';
	import { getPlayerToolPower } from '$lib/helpers/getPlayerToolPower';

	export let world = 0;
	export let playerTools = {};
	let playerWorlds = [];

	$: if (playerTools) {
		playerWorlds = [];
		let playerPower = getPlayerToolPower(playerTools);
		worlds.forEach((world) => {
			if (playerPower >= world.powerRequired) playerWorlds = [...playerWorlds, world];
		});
	}
</script>

<div class="flex justify-between items-center w-full h-[3rem] px-2 mt-[6rem] bg-taupe shadow-xl">
	<button
		class={world == 0 ? 'opacity-0' : 'opacity-100'}
		on:click={() => {
			if (world != 0) world--;
		}}
	>
		<img class="w-auto h-[2.5rem]" src="/logo/arrow.png" alt="left arrow" />
	</button>

	<h2 class="font-bold">{world} - {playerWorlds[world].name.toUpperCase()}</h2>

	<button
		class={world == playerWorlds.length - 1 ? 'opacity-0' : 'opacity-100'}
		on:click={() => {
			if (world != playerWorlds.length - 1) world++;
		}}
	>
		<img
			class="w-auto h-[2.5rem]"
			style="transform: rotate(180deg);"
			src="/logo/arrow.png"
			alt="right arrow"
		/>
	</button>
</div>
