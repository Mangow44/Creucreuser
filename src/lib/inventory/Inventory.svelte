<script>
	export let playerInventory = {};
	export let displayInventory = false;
</script>

<div
	class="flex w-full h-screen fixed bg-dark-taupe z-10 inventory {displayInventory
		? 'displayInventory'
		: 'hideInventory'}"
>
	<div class="flex flex-wrap mt-auto w-full h-[90%] gap-1">
		{#each Object.entries(playerInventory) as [ressource, amount]}
			<div class="relative m-auto w-[8rem] h-[11rem] object-cover">
				<img src="/ressources/{ressource}.png" alt={ressource} class="w-[8rem] h-[8rem]" />
				<p
					class="absolute flex justify-center items-center
						rounded-full bg-blanc w-[3rem] h-[3rem] font-bold
						right-[calc(50%-1.5rem)] bottom-[4rem] opacity-80
						overflow-auto"
				>
					{amount}
				</p>
				<p class="flex justify-center items-center w-[8rem] h-[3rem] font-bold overflow-auto">
					{ressource.toUpperCase()}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.inventory {
		transition: all 1s ease;
	}

	.hideInventory {
		transform: translateY(-100%);
	}

	.displayInventory {
		transform: translateY(0%);
	}
</style>
