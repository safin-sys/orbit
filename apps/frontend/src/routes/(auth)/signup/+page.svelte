<script lang="ts">
	import FloatingNav from "$lib/components/common/nav.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { goto } from "$app/navigation";
	import { signup, auth } from "$lib/stores/auth.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let name = $state("");
	let email = $state("");
	let password = $state("");

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (!name || !email || !password) {
			auth.error = "All fields are required";
			return;
		}
		const success = await signup(email, password, name);
		if (success) {
			goto("/dashboard");
		}
	};
</script>

<svelte:head>
	<title>Sign up — Orbit</title>
</svelte:head>

<div class="h-screen overflow-hidden bg-background font-sans text-foreground">
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
					<h1 class="text-xl font-semibold">Create your account</h1>
				</div>
				<div class="flex flex-col gap-6 p-6">
					<form class="flex flex-col gap-4" onsubmit={handleSubmit}>
						<div class="flex flex-col gap-2">
							<label for="name" class="text-sm font-medium text-muted-foreground">Name</label>
							<Input
								name="name"
								id="name"
								type="text"
								placeholder="Kanye"
								oninput={(e) => (name = e.currentTarget.value)}
							/>
						</div>

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

						<div class="flex flex-col gap-2">
							<label for="password" class="text-sm font-medium text-muted-foreground">Password</label>
							<Input
								name="password"
								id="password"
								type="password"
								placeholder="Min. 8 characters"
								minlength={8}
								oninput={(e) => (password = e.currentTarget.value)}
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
								Creating account...
							{:else}
								Create account
							{/if}
						</Button>
					</form>

					<p class="text-center text-sm text-muted-foreground">
						Already have an account?
						<a href="/login" class="ml-1 font-medium text-foreground hover:text-primary">Sign in</a>
					</p>
				</div>
			</div>
		</div>
	</main>

	<FloatingNav />
</div>
