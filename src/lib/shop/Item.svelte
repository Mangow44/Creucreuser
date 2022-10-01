<script>
	import { auth, db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';

	export let playerInventory = {};
	export let ressource = {};
	export let displayShop = false;

	//reset max quand le joueur gagne de l'argent && selecteur != none

	let selector = 'none';
	let quantity = 0;
	let max = 0;

	$: if (!displayShop) {
		selector = 'none';
		quantity = 0;
	}

	function sell(ressource) {
		if (quantity <= 0 || quantity > playerInventory.ressources[ressource.name]) return;

		playerInventory.ressources[ressource.name] -= quantity;
		playerInventory.coins += ressource.sell * quantity;

		updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			ressources: Object.assign({}, playerInventory.ressources),
			coins: playerInventory.coins
		});

		// reset
		quantity = 0;
		max = playerInventory.ressources[ressource.name] || 0;
	}

	function buy(ressource) {
		if (quantity <= 0 || playerInventory.coins < ressource.buy * quantity) return;

		if (!playerInventory.ressources[ressource.name]) {
			playerInventory.ressources[ressource.name] = quantity;
		} else {
			playerInventory.ressources[ressource.name] += quantity;
		}
		playerInventory.coins -= ressource.buy * quantity;

		updateDoc(doc(db, 'inventory', auth.currentUser.uid), {
			ressources: Object.assign({}, playerInventory.ressources),
			coins: playerInventory.coins
		});

		// reset
		quantity = 0;
		max = Math.floor(playerInventory.coins / ressource.buy);
	}
</script>

<div
	class="flex w-full h-auto my-2 p-[0.5rem] shrink-0 
		bg-creme fade-in overflow-hidden
		{selector != 'none' ? 'h-[10rem]' : 'h-[6.5rem]'}"
	style="transition: all 0.3s ease"
>
	<div class="flex flex-col w-[4rem] h-[6rem] mx-auto">
		<img
			class="w-full h-auto object-cover"
			src="/ressources/{ressource?.name}.png"
			alt={ressource.name}
		/>
		<p
			class="flex justify-center items-center 
				w-full h-full
				text-center font-bold text-xs"
		>
			{ressource.name.toUpperCase()}
		</p>
	</div>

	<div class="flex flex-col w-[70%] h-auto m-auto">
		<div
			class="flex w-full h-full 
				mx-auto mb-[0.5rem] 
				transition-all 
				{selector != 'none' ? 'h-[2rem]' : 'h-[5.5rem]'}"
		>
			<button
				class="w-[45%] h-[2rem] 
					m-auto 
					rounded-full 
					{selector == 'buy' ? 'bg-green-300' : 'bg-slate-300'}"
				on:click={() => {
					if (selector != 'buy') {
						selector = 'buy';
						max = Math.floor(playerInventory.coins / ressource.buy);
						quantity = 0;
					} else if (selector == 'buy') {
						buy(ressource);
					}
				}}
			>
				Acheter
			</button>
			<button
				class="w-[45%] h-[2rem] *
					m-auto 
					rounded-full 
					{selector == 'sell' ? 'bg-green-300' : 'bg-slate-300'}"
				on:click={() => {
					if (selector != 'sell') {
						selector = 'sell';
						max = playerInventory.ressources[ressource.name] || 0;
						quantity = 0;
					} else if (selector == 'sell') {
						sell(ressource);
					}
				}}
			>
				Vendre
			</button>
		</div>

		<input
			class="w-[50%] h-auto m-auto mt-[2rem] 
				bg-blanc text-center rounded-full outline-none transition-all 
				{selector != 'none' ? 'opacity-100' : 'opacity-0 hidden'}
				{(quantity <= 0 ||
				quantity > playerInventory.ressources[ressource.name] ||
				!playerInventory.ressources[ressource.name]) &&
			selector == 'sell'
				? 'text-red-500'
				: ''}
				{(quantity <= 0 || playerInventory.coins < ressource.buy * quantity) && selector == 'buy'
				? 'text-red-500'
				: ''}"
			type="number"
			name="amountNumber"
			id="amountNumber"
			bind:value={quantity}
		/>
		<input
			class="w-auto h-[1.5rem] 
				text-center rounded-full transition-all 
				{selector != 'none' ? 'opacity-100' : 'opacity-0 hidden'}"
			type="range"
			min="0"
			{max}
			step="1"
			name="amountRange"
			id="amountRange"
			bind:value={quantity}
		/>

		<div
			class="flex items-center w-auto h-[2rem] 
				font-bold text-sm transition-all 
				{selector != 'none' ? 'opacity-100' : 'opacity-0 hidden'}"
		>
			<p>{ressource[selector] || 0}€</p>
			<p class="ml-auto ">
				{(quantity * ressource[selector]).toFixed(2)}€
			</p>
		</div>
	</div>
</div>
