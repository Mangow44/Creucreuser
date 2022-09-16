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

	<button
		class="mx-auto font-bold mt-10 w-[40%] h-12 bg-taupe rounded-lg"
		on:click={() => {
			connexion();
		}}
	>
		Connexion
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
