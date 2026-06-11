<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
</script>

<svelte:head>
	<title>Invalid reset link — Orbit</title>
</svelte:head>

<div class="h-screen overflow-x-hidden bg-background font-sans text-foreground">
	<main class="container mx-auto px-6 py-20">
		<div class="mb-12 flex justify-center">
			<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
				<img src={favicon} alt="Orbit" class="w-6 h-6" />
				<span class="text-2xl font-medium tracking-tight">Orbit</span>
			</a>
		</div>

		<div class="mx-auto max-w-md text-center">
			<div class="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
				<div class="border-b border-border px-6 py-4">
					<h1 class="text-xl font-semibold">Invalid reset link</h1>
				</div>
				<div class="px-6 py-8">
					<p class="text-muted-foreground">
						The URL you entered is not correct.
					</p>
					<div class="mt-6 flex flex-col gap-3">
						<a
							href="/forgot"
							class="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
						>
							Request a new reset link
						</a>
						<a
							href="/login"
							class="inline-flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
						>
							Back to login
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
