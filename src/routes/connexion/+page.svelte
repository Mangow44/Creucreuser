<script>
	import { goto } from '$app/navigation';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

	let email;
	let password;
	let errorMessage = '';
	const errors = {
		'auth/missing-email': 'Veuillez remplir tous les champs.',
		'auth/invalid-email': 'Adresse email invalide.',
		'auth/wrong-password': 'Mot de passe invalide.',
		'auth/user-not-found': 'Email ou mot de passe invalide.'
	};
	const auth = getAuth();

	function connexion() {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				if (errors[error.code]) errorMessage = errors[error.code];
			});
	}
</script>

<div class="flex flex-col w-full h-screen bg-blanc">
	<div class="flex flex-col w-full h-32 mt-10">
		<img src="/tools/pioche_en_pierre.png" alt="logo" class="mx-auto w-auto h-24" />
		<h1 class="mx-auto font-bold text-xl">CREUCREUSER</h1>
	</div>

	<div class="w-[90%] mx-auto mt-16 shadow-xl">
		<input
			placeholder="Adresse email"
			type="email"
			name="userEmail"
			id="email"
			bind:value={email}
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl">
		<input
			placeholder="Mot de passe"
			type="password"
			name="userPassword"
			id="password"
			bind:value={password}
			class="w-full h-12 border-2 border-dark pl-1 "
		/>
	</div>

	<p class="w-full h-6 text-center text-red-500 font-bold mt-12  overflow-auto">
		{errorMessage}
	</p>

	<button
		class="mx-auto font-bold mt-10 w-[40%] h-12 
				bg-taupe rounded-lg shadow-lg
				border-2 border-dark-taupe"
		on:click={() => {
			connexion();
		}}
	>
		Se connecter
	</button>

	<button
		class="underline mt-3"
		on:click={() => {
			goto('/inscription');
		}}
	>
		Inscription
	</button>
</div>
