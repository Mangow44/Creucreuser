<script>
	export let onClick = () => {};
	export let height = 3;
	export let width = 3;

	let animation = false;
</script>

<div
	id="burger"
	class="absolute top-5 left-3 cursor-pointer"
	style="height:{height}rem;width:{width}rem;z-index:30;"
	on:click={() => {
		onClick();
		animation = !animation;
	}}
>
	<span class="bar bar-1 {animation ? 'anim-bar-1' : ''}" />
	<span class="bar bar-2 {animation ? 'anim-bar-2' : ''}" />
</div>

<style>
	#burger .bar {
		display: block;
		height: 3px;
		width: 100%;
		transition: 0.5s ease;
		background-color: #261c10;
	}

	#burger .bar-1 {
		margin-top: 40%;
	}

	#burger .bar-2 {
		margin-top: 10%;
	}

	.anim-bar-1 {
		transform: translateY(3.9px) rotate(135deg);
	}

	.anim-bar-2 {
		transform: translateY(-3.9px) rotate(-135deg);
	}
</style>
