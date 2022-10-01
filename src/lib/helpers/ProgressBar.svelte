<script>
	export let left = 0;
	export let right = 0;
	export let ratio = 0;
	export let customStyle = false;
</script>

<div
	class="relative flex justify-center items-center w-full h-[2rem] m-auto 
		border-2 border-dark rounded-xl overflow-hidden bg-blanc"
>
	<p class="absolute mx-auto font-bold text-xs" style="z-index: 1;">
		{left || 0} / {right}
	</p>
	<div
		class="absolute w-full h-full translate-ratio
		{customStyle ? 'bg-violet-300' : 'bg-green-300'}"
		style="--ratio:calc({ratio || 0}% - 100%);"
	/>
</div>

<style>
	.translate-ratio {
		transition: all 0.2s ease;
		transform: translateX(var(--ratio));
	}
</style>
