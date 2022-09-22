<script>
	export let onClick = () => {};

	let displayMenu = false;
</script>

<div
	draggable="false"
	class="absolute top-5 left-3 h-[3rem] w-auto"
	style="z-index:21;"
	on:click={() => {
		onClick();
		displayMenu = !displayMenu;
	}}
>
	{#if !displayMenu}
		<img draggable="false" src="/logo/book.png" alt="book logo" class="h-full w-auto" />
	{:else}
		<img draggable="false" src="/logo/book_cross.png" alt="book logo" class="h-full w-auto" />
	{/if}
</div>
