<script>
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase/config';
	import { doc, setDoc } from 'firebase/firestore';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

	let email;
	let password;
	let passwordVerification;

	const auth = getAuth();

	function inscription() {
		if (password != passwordVerification) return;

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setDoc(doc(db, 'inventory', userCredential.user.uid), {
					inventory: {}
				}).then(() => {
					goto('/');
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				console.log(error);
			});
	}
</script>

<div class="flex flex-col w-full h-screen bg-white">
	<div class="w-[90%] mx-auto mt-20 shadow-xl rounded-lg">
		<label for="email" class="font-bold text-sm">EMAIL :</label>
		<input
			type="email"
			name="userEmail"
			id="email"
			bind:value={email}
			class="border-2 border-dark rounded-lg w-full"
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl rounded-lg">
		<label for="password" class="font-bold text-sm">MOT DE PASSE :</label>
		<input
			type="password"
			name="userPassword"
			id="password"
			bind:value={password}
			class="border-2 border-dark rounded-lg w-full "
		/>
	</div>

	<div class="w-[90%] mx-auto mt-10 shadow-xl rounded-lg">
		<label for="passwordVerification" class="font-bold text-sm">MOT DE PASSE :</label>
		<input
			type="password"
			name="userPasswordVerification"
			id="passwordVerification"
			bind:value={passwordVerification}
			class="border-2 border-dark rounded-lg w-full "
		/>
	</div>

	<button
		class="mx-auto font-bold mt-10 w-[40%] h-12 bg-taupe rounded-lg"
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
