<script>
	import ProgressBar from '$lib/helpers/ProgressBar.svelte';

	export let playerInventory;
	export let onClick = () => {};
	export let mission = {};
	export let i = 1;

	$: ratio = (playerInventory.ressources[mission.required] / mission.amount) * 100;
	$: if (ratio > 100) ratio = 100;
</script>

<div
	class="flex w-full h-[6rem] mx-auto my-2 p-[0.5rem] fade-in
			{i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}
			{ratio >= 100 ? 'bg-green-400' : 'bg-taupe'}"
	on:click={() => {
		if (ratio >= 100) onClick();
	}}
>
	<div class="flex flex-col m-auto shrink-0 mx-5">
		<img
			src="/ressources/{mission.required}.png"
			alt={mission.required}
			class="w-auto h-[3rem] object-cover"
		/>
		<p class="flex justify-center items-center w-auto h-[2rem] font-bold text-xs">
			{mission.required.toUpperCase()}
		</p>
	</div>

	<ProgressBar
		bind:left={playerInventory.ressources[mission.required]}
		bind:right={mission.amount}
		bind:ratio
	/>

	<div class="m-auto shrink-0 px-2">
		<img
			src="/tools/{mission.reward}.png"
			alt={mission.reward}
			class="w-auto h-[4rem] object-cover"
		/>
	</div>
</div>

<style>
	.translate-ratio {
		transform: translateX(var(--ratio));
	}
</style>
