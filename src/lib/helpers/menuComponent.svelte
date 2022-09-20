<script>
	export let onClick = () => {};
	export let text = '';
	export let i = 1;
</script>

<div
	class="flex mx-auto  w-[90%] h-[4rem] 
				bg-dark-taupe border-2 border-dark rounded-lg
				{i == 0 ? 'mt-[5rem]' : 'mt-[1rem]'}"
	on:click={() => {
		onClick();
	}}
>
	<h2 class="m-auto font-bold text-blanc text-2xl">{text}</h2>
</div>
