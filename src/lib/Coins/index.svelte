<script>
	export let coins = 0;

	$: fixedCoins = coins.toFixed(4);
</script>

<div class="absolute right-5 top-5">
	{fixedCoins}€
</div>
