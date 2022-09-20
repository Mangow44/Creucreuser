<script>
	import { onMount } from 'svelte';

	export let player = {};

	onMount(() => {
		window.addEventListener('keypress', (e) => {
			switch (e.key) {
				case '&':
					player.currentTool = player.inventory.tools[0];
					break;
				case 'é':
					player.currentTool = player.inventory.tools[1];
					break;
				case '"':
					player.currentTool = player.inventory.tools[2];
					break;
			}
		});
	});
</script>
