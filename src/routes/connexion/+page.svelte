<script>
	import { goto } from '$app/navigation';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

	let email;
	let password;

	const auth = getAuth();

	function connexion() {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
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

	<button
		on:click={() => {
			connexion();
		}}
	>
		Connexion
	</button>

	<button
		on:click={() => {
			goto('/inscription');
		}}>Inscription</button
	>
</div>
