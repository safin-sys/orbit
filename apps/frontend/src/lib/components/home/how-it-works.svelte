<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { UserGroupIcon, CodeIcon, ChartBarIncreasingIcon } from "@hugeicons/core-free-icons";
	import { inView } from "$lib/helpers/in-view";

	const steps = [
		{
			number: "01",
			icon: UserGroupIcon,
			title: "Create your account",
			description: "Sign up in seconds. No credit card required. Start completely free."
		},
		{
			number: "02",
			icon: CodeIcon,
			title: "Add one script",
			description: "Paste a single script tag into your site's head. That's it — no complex setup."
		},
		{
			number: "03",
			icon: ChartBarIncreasingIcon,
			title: "Watch it roll in",
			description:
				"Your dashboard starts populating immediately. See live visitors, traffic sources, and more."
		}
	];
</script>

<section class="border-t border-border bg-muted py-32">
	<div class="container mx-auto px-6">
		<div class="mx-auto mb-20 max-w-2xl text-center">
			<h2 class="mb-5 text-4xl font-bold tracking-tight md:text-5xl">Get started in 3 steps</h2>
			<p class="text-lg leading-relaxed text-muted-foreground">
				From zero to insights in minutes. No configuration, no headache.
			</p>
		</div>

		<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-3" use:inView>
			{#each steps as step, i}
				<div
					class="relative flex animate-fade-in-up-stagger flex-col items-center text-center"
					style="animation-delay: {i * 120}ms"
				>
					{#if i < steps.length - 1}
						<div
							class="absolute top-12 right-0 hidden h-px w-[calc(50%-3rem)] bg-border md:block"
							style="left: calc(50% + 3rem)"
						></div>
					{/if}

					<div
						class="mb-6 flex size-12 items-center justify-center rounded-full border border-border bg-background text-xs font-medium tracking-wider text-muted-foreground"
					>
						{step.number}
					</div>

					<div
						class="mb-5 flex size-14 items-center justify-center rounded-xl border border-border bg-background"
					>
						<HugeiconsIcon icon={step.icon} class="size-6 text-muted-foreground" />
					</div>

					<h3 class="mb-3 text-lg font-medium">{step.title}</h3>
					<p class="max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
