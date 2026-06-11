<script lang="ts">
	import FloatingNav from "$lib/components/common/nav.svelte";
	import SaturnCanvas from "$lib/components/home/saturn-canvas.svelte";
	import Features from "$lib/components/home/features.svelte";
	import HowItWorks from "$lib/components/home/how-it-works.svelte";
	import Installation from "$lib/components/home/installation.svelte";
	import CTA from "$lib/components/home/cta.svelte";
	import Footer from "$lib/components/home/footer.svelte";
	import { Button } from "$lib/components/ui/button";
	import favicon from "$lib/assets/favicon.svg";
</script>

<svelte:head>
	<title>Orbit — Ship faster. Track everything.</title>
</svelte:head>

<div class="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
	<SaturnCanvas />
	<main class="relative z-10 flex min-h-screen items-start pt-40 md:items-center md:pt-0">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="max-w-3xl">
				<div class="mb-8 flex items-center gap-3 sm:mb-16">
					<img src={favicon} alt="Orbit" class="h-6 w-6" />
					<span class="text-2xl font-medium tracking-tight">Orbit</span>
					<span
						class="rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase"
						>Alpha</span
					>
				</div>

				<h1
					class="mb-6 text-5xl leading-[0.9] font-bold tracking-tighter text-foreground sm:text-6xl md:text-8xl"
				>
					Ship faster.<br />
					Track everything.
				</h1>

				<p
					class="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-xl"
				>
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
		</div>
	</main>

	<Installation />
	<Features />
	<HowItWorks />
	<CTA />
	<Footer />
	<FloatingNav />
</div>
