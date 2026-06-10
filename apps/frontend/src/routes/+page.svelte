<script lang="ts">
	import FloatingNav from "$lib/components/common/nav.svelte";
	import SaturnCanvas from "$lib/components/home/saturn-canvas.svelte";
	import Features from "$lib/components/home/features.svelte";
	import HowItWorks from "$lib/components/home/how-it-works.svelte";
	import Footer from "$lib/components/home/footer.svelte";
	import { Button } from "$lib/components/ui/button";
	import favicon from "$lib/assets/favicon.svg";
</script>

<svelte:head>
	<title>Orbit — Ship faster. Track everything.</title>
</svelte:head>

<div class="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
	<SaturnCanvas />
	<main class="relative z-10 container mx-auto px-6 pt-32 pb-40">
		<div class="max-w-3xl">
			<div class="mb-16 flex items-center gap-3">
				<img src={favicon} alt="Orbit" class="w-6 h-6" />
				<span class="text-2xl font-medium tracking-tight">Orbit</span>
				<span
					class="rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase"
					>Alpha</span
				>
			</div>

			<h1
				class="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-foreground md:text-8xl"
			>
				Ship faster.<br />
				Track everything.
			</h1>

			<p class="mb-12 max-w-xl text-xl leading-relaxed text-muted-foreground">
				One script. Infinite insights. Understand your users better with privacy-first analytics.
			</p>

			<div class="flex gap-4">
				<a href="/signup">
					<Button
						size="lg"
						class="h-14 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90"
					>
						Start
					</Button>
				</a>
				<a href="/demo">
					<Button
						size="lg"
						variant="outline"
						class="h-14 rounded-full border-border px-8 text-base font-medium text-foreground transition-all duration-200 hover:scale-105 hover:bg-accent"
					>
						Demo
					</Button>
				</a>
			</div>
		</div>
	</main>

	<Features />
	<HowItWorks />
	<Footer />
	<FloatingNav />
</div>
