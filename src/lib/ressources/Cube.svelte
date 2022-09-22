<script>
	export let cube = {};
	export let cubeHealth;
	export let htmlCube = {};
	export let breakCube = () => {};

	let breakingAnimation = 0;

	$: if (cubeHealth <= cube.health / 4) {
		breakingAnimation = 3;
	} else if (cubeHealth <= cube.health / 2.3) {
		breakingAnimation = 2;
	} else if (cubeHealth <= cube.health / 1.1) {
		breakingAnimation = 1;
	} else {
		breakingAnimation = 0;
	}
</script>

<div
	draggable="false"
	bind:this={htmlCube}
	class="relative w-full h-[12em] object-cover shadow-2xl"
	on:click={() => {
		breakCube();
	}}
>
	<img
		draggable="false"
		src="/ressources/{cube.name}.png"
		alt={cube.name}
		class="absolute w-full h-full"
	/>

	{#if breakingAnimation != 0}
		<img
			draggable="false"
			src="/ressources/break{breakingAnimation}.png"
			alt="breaking animation"
			class="absolute w-full h-full"
		/>
	{/if}
</div>

<p
	draggable="false"
	class="flex justify-center items-center w-full h-[4rem] font-bold
	overflow-hidden text-center text-ellipsis whitespace-nowrap"
>
	{cube.name.toUpperCase()}
</p>
