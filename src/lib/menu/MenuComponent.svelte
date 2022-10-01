<script>
	export let onClick = () => {};
	export let text = '';
	export let i = 1;
</script>

<div
	class="flex w-[90%] h-[4rem] mx-auto
		bg-blanc border-2 border-gold rounded-lg shadow-lg
		{i == 0 ? 'mt-[6rem]' : 'mt-[1rem]'}"
	on:click={() => {
		onClick();
	}}
>
	<h2 class="m-auto font-bold text-dark font-avocadoCake text-2xl">{text}</h2>
</div>
