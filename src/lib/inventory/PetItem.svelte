<script>
	export let pet = {};
	export let i = 1;
</script>

<div
	class="flex relative w-full h-[7rem] object-cover shrink-0 fade-in
		{i == 0 ? 'mt-[6rem]' : 'mt-1'}"
>
	<div class="w-[6rem] h-auto">
		<img src="/pets/{pet.name}.png" alt={pet.name} class="w-[5rem] h-[5rem] mx-auto" />
		<p
			class="flex justify-center items-center w-[6rem] h-[2rem] mx-auto
				font-bold text-xs overflow-auto"
		>
			{pet.name.toUpperCase()}
		</p>
	</div>

	<p
		class="flex justify-center items-center mx-auto 
			w-[70%] h-[5rem] rounded-full bg-blanc
			font-bold text-xs overflow-auto"
	>
		{pet.description}
	</p>
</div>
