<script>
	export let player;
	export let mission = {};
	export let i = 0;

	$: ratio = (player.inventory.ressources[mission.required] / mission.amount) * 100;
	$: if (ratio > 100) ratio = 100;
</script>

<div
	class="flex w-[90%] h-[6rem] mx-auto my-2 p-[0.5rem]
			{i == 0 ? 'mt-[5rem]' : 'mt-[1rem]'}
			{ratio >= 100 ? 'bg-green-400' : 'bg-taupe'}"
>
	<div class="flex flex-col w-auto h-full m-auto">
		<img
			src="/ressources/{mission.required}.png"
			alt={mission.required}
			class="w-auto h-[3rem] object-cover"
		/>
		<p class="flex justify-center items-center w-auto h-[2rem] font-bold text-xs">
			{mission.required.toUpperCase()}
		</p>
	</div>

	<div
		class="relative flex justify-center items-center  
			w-[50%] h-[2rem] m-auto border-2 border-dark overflow-hidden bg-blanc"
	>
		<p class="absolute mx-auto z-50 font-bold text-xs">
			{player.inventory.ressources[mission.required]} / {mission.amount}
		</p>
		<div
			class="absolute w-full h-full  bg-green-300 translate-ratio"
			style="--ratio:calc({ratio}% - 100%);"
		/>
	</div>

	<div class="m-auto">
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
