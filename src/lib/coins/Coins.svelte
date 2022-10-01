<script>
	export let playerCoins = 0;
	export let color = 'bg-blanc';
</script>

<div
	class="flex justify-center h-[3rem] w-[90%] mx-auto mt-[5rem] my-[1rem] 
		rounded-full items-center shrink-0 {color}"
>
	<p class="font-bold overflow-auto">{playerCoins.toFixed(2)}€</p>
</div>
