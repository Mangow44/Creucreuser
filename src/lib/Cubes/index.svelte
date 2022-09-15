<script>
	export let cubes = [];
	export let player = {};

	let htmlCube;

	// todo 0 = world + trier par métier
	let cube = getCube(cubes[0]);
	$: cubeHealth = cube.health;

	function getCube(array) {
		let index = 0;
		let rand = Math.floor(Math.random() * 100);

		if (rand <= 50) index = 0;
		if (rand > 50 && rand <= 80) index = 1;
		if (rand > 80 && rand <= 95) index = 2;
		if (rand > 95 && rand <= 100) index = 3;

		return array[index];
	}

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

<div class="mt-auto mx-auto w-[12rem] h-[16rem]">
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
		class="flex justify-center items-center w-full h-[4rem] font-bold
			overflow-hidden text-center text-ellipsis whitespace-nowrap"
	>
		{cube.name.toUpperCase()}
	</p>
</div>
