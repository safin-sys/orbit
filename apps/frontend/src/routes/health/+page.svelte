<script lang="ts">
	import FloatingNav from '$lib/components/common/nav.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let props = $props();
</script>

<svelte:head>
	<title>Health — Orbit</title>
</svelte:head>

<div class="h-screen overflow-hidden bg-background text-foreground font-sans">
	<main class="relative z-10 container mx-auto px-6 py-20">
		<div class="mx-auto max-w-md">
			<div class="mb-12 flex justify-center">
				<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
					<img src={favicon} alt="Orbit" class="w-6 h-6" />
					<span class="text-2xl font-medium tracking-tight">Orbit</span>
					<span class="text-[10px] font-medium uppercase tracking-widest px-1.5 py-0.5 rounded-md border border-border text-muted-foreground">Alpha</span>
				</a>
			</div>

			<div class="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
				<div class="border-b border-border px-6 py-4">
					<h1 class="text-xl font-semibold">System Status</h1>
				</div>
				<div class="p-8">
					{#if !props.data}
						<div class="text-center">
							<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-secondary">
								<svg class="h-8 w-8 text-muted-foreground animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
								</svg>
							</div>
							<div class="mb-2 text-lg font-medium text-muted-foreground">Checking status...</div>
						</div>
					{:else if props.data.error}
						<div class="text-center">
							<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-destructive/30 bg-destructive/20">
								<svg class="h-8 w-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
								</svg>
							</div>
							<div class="mb-2 text-lg font-semibold text-destructive">System Offline</div>
							<p class="text-sm text-muted-foreground">Unable to connect to the API</p>
						</div>
					{:else if props.data.data?.status === 'ok'}
						<div class="text-center">
							<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20">
								<svg class="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
								</svg>
							</div>
							<div class="mb-2 text-lg font-semibold text-emerald-400">All Systems Operational</div>
							<p class="text-sm text-muted-foreground">API is responding normally</p>
						</div>
					{:else}
						<div class="text-center">
							<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/20">
								<svg class="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
								</svg>
							</div>
							<div class="mb-2 text-lg font-semibold text-amber-400">Degraded</div>
							<p class="text-sm text-muted-foreground">Some services are experiencing issues</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</main>

	<FloatingNav />
</div>