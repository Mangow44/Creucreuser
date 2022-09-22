<script>
	export let playerTools = [];
	export let playerCurrentTool = {};
</script>

<div class="flex mt-auto w-full h-[6rem] box-content">
	{#each playerTools as tool}
		<div
			class="flex justify-center items-center m-auto 
				w-[5rem] h-[5rem]  
				rounded-full shadow-xl 
				{playerCurrentTool == tool ? 'bg-green-300' : 'bg-taupe'}"
			on:click={() => {
				playerCurrentTool = tool;
			}}
		>
			<img
				src="/tools/{tool.toolName}.png"
				alt={tool.toolName}
				class="object-cover w-full h-full"
			/>
		</div>
	{/each}
</div>
