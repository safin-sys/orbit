<script lang="ts">
	import FloatingNav from "$lib/components/common/nav.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { forgot_password, auth } from "$lib/stores/auth.svelte";

	let email = $state("");
	let sent = $state(false);

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (!email) {
			auth.error = "Email is required";
			return;
		}
		const success = await forgot_password(email);
		if (success) {
			sent = true;
		}
	};
</script>

<svelte:head>
	<title>Forgot password — Orbit</title>
</svelte:head>

<div class="h-screen overflow-x-hidden bg-background font-sans text-foreground">
	<main class="container mx-auto px-6 py-20">
		<div class="mb-12 flex justify-center">
			<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					color="currentColor"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				>
					<path
						d="M22 8.5C22 9.88071 20.8807 11 19.5 11C18.1193 11 17 9.88071 17 8.5C17 7.11929 18.1193 6 19.5 6C20.8807 6 22 7.11929 22 8.5Z"
					/>
					<path
						d="M5.63604 18.364C4.00736 16.7353 3 14.4853 3 12C3 7.02944 7.02944 3 12 3C13.6393 3 15.1762 3.43827 16.5 4.20404M8.5 20.2941C9.57589 20.7487 10.7586 21 12 21C16.9706 21 21 16.9706 21 12C21 11.5348 20.9647 11.0778 20.8966 10.6315"
					/>
					<path
						d="M21.1733 6.37998C22.0683 4.52002 22.2767 3.07282 21.6005 2.39789C20.7268 1.52568 18.5637 2.13056 15.8873 3.78543M18.3049 10.8298C17.2978 12.1187 16.1137 13.4588 14.7889 14.7838C9.48663 20.0868 3.93971 23.1394 2.39946 21.6018C1.52229 20.7262 2.13378 18.5507 3.8022 15.8604"
					/>
				</svg>
				<span class="text-2xl font-medium tracking-tight">Orbit</span>
			</a>
		</div>

		<div class="mx-auto max-w-md">
			<div class="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
				<div class="border-b border-border px-6 py-4">
					<h1 class="text-xl font-semibold">Reset your password</h1>
				</div>
				<div class="flex flex-col gap-6 p-6">
					{#if sent}
						<div class="flex flex-col items-center gap-4 py-4 text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="48"
								height="48"
								color="currentColor"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" />
								<path d="M8 12.5L10.5 15L16 9" />
							</svg>
							<h2 class="text-lg font-semibold">Check your email</h2>
							<p class="text-sm text-muted-foreground">
								We've sent a password reset link to <span class="font-medium text-foreground">{email}</span>
							</p>
							<a href="/login" class="mt-2 text-sm font-medium text-foreground hover:text-primary">
								Back to sign in
							</a>
						</div>
					{:else}
						<form class="flex flex-col gap-4" onsubmit={handleSubmit}>
							<div class="flex flex-col gap-2">
								<label for="email" class="text-sm font-medium text-muted-foreground">Email</label>
								<Input
									name="email"
									id="email"
									type="email"
									placeholder="you@example.com"
									oninput={(e) => (email = e.currentTarget.value)}
								/>
							</div>

							<p class="invisible text-sm text-destructive" class:visible={auth.error}>
								{auth.error ?? "Unknown Error"}
							</p>

							<Button
								type="submit"
								disabled={auth.loading}
								class="w-full rounded-lg bg-primary p-6 font-medium text-primary-foreground transition-opacity hover:bg-primary/90 disabled:opacity-50"
							>
								{#if auth.loading}
									<svg
										class="mr-2 h-4 w-4 animate-spin"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Sending...
								{:else}
									Send reset link
								{/if}
							</Button>
						</form>

						<div>
							<p class="text-center text-sm text-muted-foreground">
								Back to
								<a href="/login" class="ml-1 font-medium text-foreground hover:text-primary">Sign in</a>
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</main>

	<FloatingNav />
</div>
