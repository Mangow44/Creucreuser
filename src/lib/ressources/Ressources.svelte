<script>
	import Cube from '$lib/ressources/Cube.svelte';

	export let ressources = [];
	export let player = {};

	// todo 0 = world
	let cube = generateCube(ressources[0]);
	let htmlCube = {};
	$: cubeHealth = cube.health;

	function generateCube(array) {
		let index = 0;
		let rand = Math.floor(Math.random() * 250);

		if (rand <= 120) index = 0;
		if (rand > 120 && rand <= 215) index = 1;
		if (rand > 215 && rand <= 245) index = 2;
		if (rand > 245 && rand <= 249) index = 3;

		return array[index];
	}

	function breakCube() {
		if (!player.currentTool) return;
		if (
			cube.toolFamily == player.currentTool.toolFamily &&
			cube.toolLevel <= player.currentTool.toolLevel
		) {
			cubeHealth = cubeHealth - player.currentTool.toolDamage;
			breakingAnimation();
			if (cubeHealth > 0) return;
			addToInventory(cube.name);
			cube = generateCube(ressources[0]);
		}
	}

	function breakingAnimation() {
		htmlCube.classList.add('bouncing');
		setTimeout(() => {
			htmlCube.classList.remove('bouncing');
		}, 100);
	}

	function addToInventory(ressource) {
		if (!player.inventory.ressources[ressource]) {
			player.inventory.ressources[ressource] = 1;
		} else {
			player.inventory.ressources[ressource]++;
		}
	}
</script>

<div class="mt-auto mx-auto w-[12rem] h-[16rem]">
	<Cube
		bind:cube
		bind:cubeHealth
		bind:htmlCube
		breakCube={() => {
			breakCube();
		}}
	/>
</div>
