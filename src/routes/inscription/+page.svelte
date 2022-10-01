<script>
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase/config';
	import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	import { tools } from '$lib/data/tools';

	let email;
	let playerName;
	let password;
	let passwordVerification;
	let errorMessage = '';
	const errors = {
		'auth/admin-restricted-operation': 'Veuilez remplir tous les champs',
		'auth/weak-password': 'Le mot de passe doit faire 6 caractères au minimum.',
		'auth/email-already-in-use': 'Adresse email déjà enregistrée.',
		'auth/invalid-email': 'Adresse email invalide.',
		'password-verification': 'Les mots de passe ne correspondent pas.',
		'player-name': 'Le pseudonyme doit faire 5 caractères au minimum.',
		'player-name-exists': 'Le pseudonyme est déjà existant.'
	};
	const auth = getAuth();

	function inscription() {
		if (password != passwordVerification) {
			errorMessage = errors['password-verification'];
			return;
		}
		if (playerName.length < 4) {
			errorMessage = errors['player-name'];
			return;
		}

		getDocs(collection(db, 'player')).then((snap) => {
			let authorize = true;

			snap.forEach((document) => {
				if (document.data().name == playerName) {
					errorMessage = errors['player-name-exists'];
					authorize = false;
				}
			});

			if (!authorize) return;

			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					setDoc(doc(db, 'inventory', userCredential.user.uid), {
						ressources: {},
						pets: [],
						tools: tools[0],
						coins: 0
					}).then(() => {
						setDoc(doc(db, 'player', userCredential.user.uid), {
							name: playerName
						}).then(() => {
							goto('/');
						});
					});
				})
				.catch((error) => {
					if (errors[error.code]) errorMessage = errors[error.code];
				});
		});
	}
</script>

<div class="flex flex-col w-full h-screen bg-blanc">
	<div class="flex flex-col w-full h-32 mt-10 shrink-0">
		<img src="/tools/pioche_en_pierre.png" alt="logo" class="mx-auto w-auto h-24" />
		<h1 class="mx-auto font-bold text-xl">CREUCREUSER</h1>
	</div>

	<div class="w-[90%] mx-auto mt-16 shadow-xl shrink-0">
		<input
			placeholder="Adresse email"
			type="email"
			name="userEmail"
			id="email"
			bind:value={email}
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl shrink-0">
		<input
			placeholder="Pseudonyme"
			type="text"
			name="userName"
			id="name"
			bind:value={playerName}
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl shrink-0">
		<input
			placeholder="Mot de passe"
			type="password"
			name="userPassword"
			id="password"
			bind:value={password}
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl shrink-0">
		<input
			placeholder="Vérification du mot de passe"
			type="password"
			name="userPasswordVerification"
			id="passwordVerification"
			bind:value={passwordVerification}
			class="w-full h-12 border-2 border-dark pl-1"
		/>
	</div>

	<p class="w-full h-6 text-center text-red-500 font-bold mt-12 overflow-auto">
		{errorMessage}
	</p>

	<button
		class="mx-auto font-bold mt-10 w-[40%] h-12 
				bg-taupe rounded-lg shadow-lg shrink-0
				border-2 border-dark-taupe"
		on:click={() => {
			inscription();
		}}
	>
		S'inscrire
	</button>

	<button
		class="underline mt-3 shrink-0"
		on:click={() => {
			goto('/connexion');
		}}>Connexion</button
	>
</div>
