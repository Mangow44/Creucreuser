<script>
	import { ressources } from '$lib/data/ressources';
	import Cube from '$lib/ressources/Cube.svelte';

	export let playerRessources = {};
	export let playerCurrentTool = {};

	// todo 0 = world ex: player.position ?
	let cube = generateCube(ressources[0]);
	let htmlCube = {};

	$: cubeHealth = cube.health;

	function generateCube(ressources) {
		let cubeIndex = 0;
		let rand = Math.floor(Math.random() * 250);

		if (rand <= 120) cubeIndex = 0;
		if (rand > 120 && rand <= 215) cubeIndex = 1;
		if (rand > 215 && rand <= 245) cubeIndex = 2;
		if (rand > 245 && rand <= 249) cubeIndex = 3;

		return ressources[cubeIndex];
	}

	function breakCube() {
		if (!playerCurrentTool) return;
		if (
			cube.toolFamily != playerCurrentTool.toolFamily ||
			cube.toolLevel > playerCurrentTool.toolLevel
		)
			return;

		cubeHealth = cubeHealth - playerCurrentTool.toolDamage;
		breakingAnimation();

		if (cubeHealth > 0) return;

		addToInventory(cube.name);
		cube = generateCube(ressources[0]);
	}

	function breakingAnimation() {
		htmlCube.classList.add('bouncing');
		setTimeout(() => {
			htmlCube.classList.remove('bouncing');
		}, 100);
	}

	function addToInventory(ressource) {
		if (!playerRessources[ressource]) {
			playerRessources[ressource] = 1;
		} else {
			playerRessources[ressource]++;
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
