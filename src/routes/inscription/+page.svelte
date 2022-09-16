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
	<div>
		<label for="email">Email</label>
		<input type="email" name="userEmail" id="email" bind:value={email} />
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" name="userPassword" id="password" bind:value={password} />
	</div>

	<div>
		<label for="passwordVerification">Password verification</label>
		<input
			type="password"
			name="userPasswordVerification"
			id="passwordVerification"
			bind:value={passwordVerification}
		/>
	</div>

	<button
		on:click={() => {
			inscription();
		}}
	>
		S'inscrire
	</button>

	<button
		on:click={() => {
			goto('/connexion');
		}}>Connexion</button
	>
</div>
