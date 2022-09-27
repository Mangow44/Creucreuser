<script>
	import { worlds } from '$lib/data/worlds';

	export let world = 0;
</script>

<p
	class="flex justify-center items-center 
		absolute bottom-[8rem] left-[calc(50%-45%)]
		w-[90%] h-[2rem] rounded-full shadow-xl bg-creme
		font-bold text-sm"
>
	{world} - {worlds[world].name.toUpperCase()}
</p>
