<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import {
		EyeIcon,
		Link01Icon,
		GlobeIcon,
		MonitorDotIcon,
		ActivityIcon,
		Shield01Icon
	} from "@hugeicons/core-free-icons";
	import { inView } from "$lib/helpers/in-view";

	const features = [
		{
			icon: EyeIcon,
			title: "Page Views & Visitors",
			description: "Track every page load and see unique visitor counts in real time."
		},
		{
			icon: Link01Icon,
			title: "Referrer Tracking",
			description: "Know exactly where your traffic is coming from — search, social, or direct."
		},
		{
			icon: GlobeIcon,
			title: "Geographic Data",
			description: "See your audience by country, region, and city on an interactive map."
		},
		{
			icon: MonitorDotIcon,
			title: "Device Analytics",
			description: "Browser, OS, and device breakdowns so you know how users access your site."
		},
		{
			icon: ActivityIcon,
			title: "Real-time Dashboard",
			description: "Live data streams in as your visitors browse — no delays, no polling."
		},
		{
			icon: Shield01Icon,
			title: "Privacy First",
			description: "No cookies, no personal data, no consent banners. Just the insights you need."
		}
	];
</script>

<section use:inView class="animate-fade-in-up py-32">
	<div class="container mx-auto px-6">
		<div class="mx-auto mb-20 max-w-2xl text-center">
			<h2 class="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
				Everything you need to understand your audience
			</h2>
			<p class="text-lg leading-relaxed text-muted-foreground">
				Real-time analytics that respect your users' privacy. One script, infinite insights.
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature, i}
				<article
					class="animate-fade-in-up-stagger rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-muted-foreground/20 hover:bg-muted/30"
					style="animation-delay: {i * 80}ms"
				>
					<div
						class="mb-4 flex size-11 items-center justify-center rounded-lg border border-border bg-muted/50"
					>
						<HugeiconsIcon icon={feature.icon} class="size-5 text-muted-foreground" />
					</div>
					<h3 class="mb-2 text-base font-medium">{feature.title}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
