<script>
	export let onClick = () => {};
	export let height = 3;
	export let width = 3;

	let displayMenu = false;
</script>

<div
	class="absolute top-5 left-3 cursor-pointer h-[3rem] w-auto"
	style="z-index:21;"
	on:click={() => {
		onClick();
		displayMenu = !displayMenu;
	}}
>
	{#if !displayMenu}
		<img src="/logo/book.png" alt="book logo" class="h-full w-auto" />
	{:else}
		<img src="/logo/book_cross.png" alt="book logo" class="h-full w-auto" />
	{/if}
</div>
