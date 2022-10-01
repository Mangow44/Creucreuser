<script>
	import ProgressBar from '$lib/helpers/ProgressBar.svelte';

	export let cube = {};
	export let cubeHealth = 0;
	export let htmlCube = {};
	export let breakCube = () => {};

	$: ratio = (cubeHealth / cube.health) * 100;
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
</div>

<p
	draggable="false"
	class="flex justify-center items-end w-full h-[3rem] 
		font-bold overflow-hidden text-center text-ellipsis whitespace-nowrap"
>
	{cube.name.toUpperCase()}
</p>
<ProgressBar customStyle={true} bind:left={cubeHealth} bind:right={cube.health} bind:ratio />
