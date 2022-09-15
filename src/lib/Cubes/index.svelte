<script>
	export let cubes = [];
	export let player = {};

	let htmlCube;

	function getCube(array) {
		let index = 0;
		let rand = Math.floor(Math.random() * 100);

		if (rand <= 50) index = 0;
		if (rand > 50 && rand <= 80) index = 1;
		if (rand > 80 && rand <= 95) index = 2;
		if (rand > 95 && rand <= 100) index = 3;

		return array[index];
	}

	// todo 0 = world + trier par métier
	let cube = getCube(cubes[0]);
	$: cubeHealth = cube.health;

	function breakCube() {
		if (cube.tool == player.currentTool) {
			cubeHealth--;
			breakingAnimation();
			if (cubeHealth != 0) return;
			player.coins += cube.reward;
			cube = getCube(cubes[0]);
		}
	}

	function breakingAnimation() {
		htmlCube.classList.add('bouncing');
		setTimeout(() => {
			htmlCube.classList.remove('bouncing');
		}, 100);
	}
</script>

<div class="mt-auto mx-auto w-[12rem] h-[14rem]">
	<img
		bind:this={htmlCube}
		src="/cubes/{cube.name}{cubeHealth}.png"
		alt={cube.name}
		class="object-cover w-full h-[12em] shadow-2xl"
		on:click={() => {
			breakCube();
		}}
	/>
	<p
		class="w-full h-[2rem] 
			overflow-hidden text-center text-ellipsis whitespace-nowrap"
	>
		{cube.name}
	</p>
</div>
