<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/state';
	import FloatingNav from '$lib/components/common/nav.svelte';
	import favicon from '$lib/assets/favicon.svg';

	const status = page.status;
	const message = page.error?.message ?? 'Something went wrong';
</script>

<svelte:head>
	<title>{status} — Orbit</title>
</svelte:head>

<div class="h-screen overflow-x-hidden bg-background text-foreground font-sans">
	<main class="relative z-10 container mx-auto px-6 pt-32 pb-40">
		<!-- Logo -->
		<div class="flex justify-center mb-16">
			<a href="/" class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
				<img src={favicon} alt="Orbit" class="w-6 h-6" />
				<span class="text-2xl font-medium tracking-tight">Orbit</span>
				<span class="text-[10px] font-medium uppercase tracking-widest px-1.5 py-0.5 rounded-md border border-border text-muted-foreground">Alpha</span>
			</a>
		</div>

		<!-- Error Content -->
		<div class="text-center max-w-2xl mx-auto">
			<div class="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-foreground">
				{status}
			</div>
			
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
				{status === 404 ? 'Page not found' : 'Something went wrong'}
			</h1>
			
			<p class="text-xl text-muted-foreground mb-12 leading-relaxed">
				{status === 404 ? "The page you're looking for doesn't exist or has been moved." : message}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/">
					<Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-semibold rounded-full">
						Go home
					</Button>
				</a>
				<Button size="lg" variant="outline" class="border-border text-foreground hover:bg-accent h-14 px-10 text-base font-medium rounded-full" onclick={() => history.back()}>
					Go back
				</Button>
			</div>
		</div>
	</main>

	<FloatingNav />
</div>
