<script>
	export let amount = 0;
	export let name = '';
</script>

<div class="flex relative w-full h-[7rem] my-1 object-cover">
	<div>
		<img src="/ressources/{name}.png" alt={name} class="w-[4rem] h-[4rem] ml-2" />
		<p
			class="flex justify-center items-center w-[4rem] h-[2rem] ml-2
				font-bold text-xs overflow-auto"
		>
			{name.toUpperCase()}
		</p>
	</div>

	<p
		class="flex justify-center items-center mx-auto mt-5
			w-[70%] h-[2rem] rounded-full bg-blanc
			opacity-80 font-bold text-xs overflow-auto"
	>
		{amount}
	</p>
</div>
