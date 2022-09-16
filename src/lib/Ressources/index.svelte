<script>
	import Cube from '$lib/Ressources/Cube/index.svelte';

	export let ressources = [];
	export let player = {};

	// todo 0 = world
	let cube = generateCube(ressources[0]);
	$: cubeHealth = cube.health;
	let htmlCube;

	function generateCube(array) {
		let index = 0;
		let rand = Math.floor(Math.random() * 250);

		if (rand <= 150) index = 0;
		if (rand > 150 && rand <= 245) index = 1;
		if (rand > 245 && rand <= 249) index = 2;

		return array[index];
	}

	function breakCube() {
		if (
			cube.toolFamily == player.currentTool.toolFamily &&
			cube.toolLevel <= player.currentTool.toolLevel
		) {
			cubeHealth = cubeHealth - player.currentTool.toolDamage;
			breakingAnimation();
			if (cubeHealth > 0) return;
			cube = generateCube(ressources[0]);
		}
	}

	function breakingAnimation() {
		htmlCube.classList.add('bouncing');
		setTimeout(() => {
			htmlCube.classList.remove('bouncing');
		}, 100);
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
