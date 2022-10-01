<script>
	export let selected = 'left';
	export let right = '';
	export let left = '';
</script>

<button
	class="flex fixed justify-center items-center right-3 top-5"
	style="z-index: 13;"
	on:click={() => {
		if (selected == 'left') {
			selected = 'right';
		} else {
			selected = 'left';
		}
	}}
>
	{#if selected == 'left'}
		<p class="text-xs font-bold">{right.toLocaleUpperCase()}</p>
	{/if}
	<img
		class="h-[3rem] transition-all {selected == 'right' ? 'rotate-0' : 'rotate-180'}"
		src="/logo/arrow.png"
		alt="arrow"
	/>
	{#if selected == 'right'}
		<p class="text-xs font-bold">{left.toLocaleUpperCase()}</p>
	{/if}
</button>
