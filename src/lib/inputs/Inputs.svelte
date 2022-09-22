<script>
	import { onMount } from 'svelte';

	export let playerCurrentTool = {};
	export let playerTools = {};

	onMount(() => {
		window.addEventListener('keypress', (e) => {
			switch (e.key) {
				case '&':
					playerCurrentTool = playerTools[0];
					break;
				case 'é':
					playerCurrentTool = playerTools[1];
					break;
				case '"':
					playerCurrentTool = playerTools[2];
					break;
			}
		});
	});
</script>
