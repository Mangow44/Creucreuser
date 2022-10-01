<script>
	import { ressources } from '$lib/data/ressources';

	export let displayMap = false;
	export let worldInfo = {};
	export let world = 0;
	export let i = 1;
</script>

<div
	class="flex flex-col w-full h-[12rem] shrink-0 p-1 fade-in 
		{world == i ? 'bg-green-300' : 'bg-blanc '}
		{i == 0 ? 'mt-[6rem]' : 'mt-2'}"
	on:click={() => {
		world = i;
		displayMap = false;
	}}
>
	<img
		class="w-[5rem] h-auto mx-auto object-cover"
		src="/worlds/{worldInfo.name}.png"
		alt={worldInfo.name}
	/>
	<p class="mx-auto font-bold">{worldInfo.name.toUpperCase()}</p>

	<div class="flex overflow-auto m-auto">
		{#each ressources[i] as ressource}
			<div class="flex flex-col w-[5rem] h-auto">
				<img
					class="w-[3rem] h-auto mx-auto"
					src="/ressources/{ressource.name}.png"
					alt={ressource.name}
				/>
				<p class="mx-auto text-xs font-bold">{ressource.name.toUpperCase()}</p>
			</div>
		{/each}
	</div>
</div>
