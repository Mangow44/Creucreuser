<script>
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase/config';
	import { doc, setDoc } from 'firebase/firestore';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

	let email;
	let password;
	let passwordVerification;
	let errorMessage = '';
	const errors = {
		'auth/admin-restricted-operation': 'Veuilez remplir tous les champs',
		'auth/weak-password': 'Le mot de passe doit faire 6 caractères au minimum.',
		'auth/email-already-in-use': 'Adresse email déjà enregistrée.',
		'auth/invalid-email': 'Adresse email invalide.',
		'password-verification': 'Les mots de passe ne correspondent pas.'
	};
	const auth = getAuth();

	function inscription() {
		if (password != passwordVerification) {
			errorMessage = errors['password-verification'];
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setDoc(doc(db, 'inventory', userCredential.user.uid), {
					inventory: {}
				}).then(() => {
					goto('/');
				});
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
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl">
		<input
			placeholder="Vérification du mot de passe"
			type="password"
			name="userPasswordVerification"
			id="passwordVerification"
			bind:value={passwordVerification}
			class="w-full h-12 border-2 border-dark pl-1"
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
			inscription();
		}}
	>
		S'inscrire
	</button>

	<button
		class="underline mt-3"
		on:click={() => {
			goto('/connexion');
		}}>Connexion</button
	>
</div>
