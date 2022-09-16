<script>
	import { onMount } from 'svelte';

	export let player = {};

	onMount(() => {
		window.addEventListener('keypress', (e) => {
			switch (e.key) {
				case '&':
					player.currentTool = player.tools[0];
					break;
				case 'é':
					player.currentTool = player.tools[1];
					break;
				case '"':
					player.currentTool = player.tools[2];
					break;
				case "'":
					player.currentTool = player.tools[3];
					break;
			}
		});
	});
</script>
