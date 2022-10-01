<script>
	export let display = false;
	export let color = 'bg-taupe';
	export let zIndex = 10;
</script>

<div
	class="slider-down fixed flex flex-col w-full h-screen 
		overflow-y-auto overflow-x-hidden 
		{color} 
		{display ? 'display' : 'hide'}"
	style="z-index:{zIndex};"
>
	<slot />
</div>

<style>
	.slider-down {
		transition: all 1s ease;
	}

	.hide {
		transform: translateY(-100%);
	}

	.display {
		transform: translateY(0%);
	}
</style>
