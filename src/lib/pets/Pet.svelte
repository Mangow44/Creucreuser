<script>
	export let displayPets = false;
	export let playerInventory = {};
	export let pet = {};
	export let onClick = () => {};
	export let i = 1;

	let displayRessources = false;
	let canPurchase = true;

	$: if (!displayPets) displayRessources = false;

	$: if (playerInventory) {
		pet.ressources.forEach((ressource) => {
			ressource.ratio = (playerInventory.ressources[ressource.name] / ressource.amount) * 100;
			if (ressource.ratio >= 100) ressource.ratio = 100;
			if (ressource.ratio < 100) canPurchase = false;
		});
	}
</script>

<div
	class="flex flex-col w-full h-auto pt-[0.5rem] shrink-0 fade-in 
		{canPurchase ? 'bg-green-400' : 'bg-taupe'}
		{i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}"
	on:click|self={() => {
		if (canPurchase) onClick();
	}}
>
	<img class="w-[5rem] h-auto mx-auto object-cover" src="/pets/{pet.name}.png" alt={pet.name} />
	<p class="mx-auto text-sm font-bold">{pet.name.toUpperCase()}</p>
	<p
		class="min-h-[2.5rem] max-h-[10rem] w-auto  
			p-[0.5rem] my-[1rem] mx-auto	
			overflow-auto rounded-xl bg-blanc"
	>
		{pet.description}
	</p>

	<button
		class="h-[3rem] shrink-0"
		on:click={() => {
			displayRessources = !displayRessources;
		}}
	>
		<img
			class="w-auto h-[2rem] mx-auto transition-all 
				{displayRessources ? 'rotate-90' : '-rotate-90'}"
			src="/logo/arrow.png"
			alt="displayRequired"
		/>
	</button>

	<div
		class="overflow-hidden bg-dark-taupe  transition-all
			{displayRessources ? 'h-full p-[0.5rem]' : 'h-[0rem]'}"
	>
		{#each pet.ressources as ressource, i}
			<div class="flex shrink-0">
				<div
					class="flex flex-col shrink-0 
						{i == 0 ? '' : 'mt-[1rem]'} "
				>
					<img
						class="w-[4rem] h-auto object-cover"
						src="/ressources/{ressource.name}.png"
						alt={ressource.name}
					/>
					<p class="mx-auto text-xs font-bold">{ressource.name.toUpperCase()}</p>
				</div>

				<div
					class="relative flex justify-center items-center w-[75%] h-[2rem] m-auto 
						border-2 border-dark overflow-hidden bg-blanc"
				>
					<p class="absolute mx-auto z-50 font-bold text-xs">
						{playerInventory.ressources[ressource.name] || 0} / {ressource.amount}
					</p>
					<div
						class="absolute w-full h-full bg-green-300 translate-ratio"
						style="--ratio:calc({ressource.ratio || 0}% - 100%);"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.translate-ratio {
		transform: translateX(var(--ratio));
	}
</style>
