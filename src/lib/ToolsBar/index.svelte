<script>
	export let player = {};
</script>

<div class="flex mt-auto w-full h-[6rem] box-content">
	{#each player.tools as tool}
		<div
			class="flex justify-center items-center m-auto 
				w-[5rem] h-[5rem]  
				rounded-full shadow-xl 
				{player.currentTool == tool ? 'bg-green-300' : 'bg-taupe'}"
			on:click={() => {
				player.currentTool = tool;
			}}
		>
			<img src="/tools/{tool}.png" alt={tool} class="object-cover w-full h-full" />
		</div>
	{/each}
</div>
