<script lang="ts">
	import { page } from "$app/state";
	import FloatingNav from "$lib/components/common/nav.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { reset_password, auth } from "$lib/stores/auth.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let password = $state("");
	let confirm = $state("");
	let success = $state(false);

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (!password) {
			auth.error = "Password is required";
			return;
		}
		if (password.length < 8) {
			auth.error = "Password must be at least 8 characters";
			return;
		}
		if (password !== confirm) {
			auth.error = "Passwords do not match";
			return;
		}
		const token = page.params.token as string;
		const ok = await reset_password(token, password);
		if (ok) {
			success = true;
		}
	};
</script>

<svelte:head>
	<title>Reset password — Orbit</title>
</svelte:head>

<div class="h-screen overflow-x-hidden bg-background font-sans text-foreground">
	<main class="container mx-auto px-6 py-20">
		<div class="mb-12 flex justify-center">
			<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
				<img src={favicon} alt="Orbit" class="w-6 h-6" />
				<span class="text-2xl font-medium tracking-tight">Orbit</span>
			</a>
		</div>

		<div class="mx-auto max-w-md">
			<div class="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
				<div class="border-b border-border px-6 py-4">
					<h1 class="text-xl font-semibold">Set new password</h1>
				</div>
				<div class="flex flex-col gap-6 p-6">
					{#if success}
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
							<h2 class="text-lg font-semibold">Password reset successful</h2>
							<p class="text-sm text-muted-foreground">
								Your password has been updated. You can now sign in with your new password.
							</p>
							<a
								href="/login"
								class="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
							>
								Sign in
							</a>
						</div>
					{:else}
						<form class="flex flex-col gap-4" onsubmit={handleSubmit}>
							<div class="flex flex-col gap-2">
								<label for="password" class="text-sm font-medium text-muted-foreground">New password</label>
								<Input
									name="password"
									id="password"
									type="password"
									placeholder="Min. 8 characters"
									oninput={(e) => (password = e.currentTarget.value)}
								/>
							</div>

							<div class="flex flex-col gap-2">
								<label for="confirm" class="text-sm font-medium text-muted-foreground">Confirm password</label>
								<Input
									name="confirm"
									id="confirm"
									type="password"
									placeholder="Re-enter your password"
									oninput={(e) => (confirm = e.currentTarget.value)}
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
									Resetting...
								{:else}
									Reset password
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