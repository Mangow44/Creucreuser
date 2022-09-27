<script>
	export let playerCoins = 0;
	export let color = 'bg-blanc';
</script>

<div
	class="flex justify-center h-[3rem] w-[90%] mx-auto  
		rounded-full items-center mt-[5rem] my-[1rem] shrink-0 {color}"
>
	<p class="font-bold overflow-auto">{playerCoins.toFixed(2)}€</p>
</div>
