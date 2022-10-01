<script>
	export let amount = 0;
	export let name = '';
	export let i = 1;
</script>

<div
	class="flex relative w-full h-[7rem] object-cover shrink-0 fade-in
		{i == 0 ? 'mt-[6rem]' : 'mt-1'}"
>
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
			font-bold text-xs overflow-auto"
	>
		{amount}
	</p>
</div>
