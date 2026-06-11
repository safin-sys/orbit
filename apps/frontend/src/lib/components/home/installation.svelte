<script lang="ts">
	import { onMount } from "svelte";
	import { createHighlighter } from "shiki";
	import { snippets } from "$lib/data/snippets";
	import type { SnippetKey } from "$lib/data/snippets";
	import { toast } from "svelte-sonner";
	import { inView } from "$lib/helpers/in-view";

	type SnippetEntry = {
		key: SnippetKey;
		label: string;
		code: string;
	};

	const entries: SnippetEntry[] = (
		Object.entries(snippets) as [SnippetKey, (typeof snippets)[SnippetKey]][]
	).map(([key, s]) => ({ key, label: s.label, code: s.code }));

	let selectedIndex = $state(0);
	let highlighted = $state<Record<string, string>>({});
	let ready = $state(false);

	const selected = $derived(entries[selectedIndex] ?? entries[0]);

	onMount(async () => {
		const h = await createHighlighter({
			themes: ["vitesse-dark"],
			langs: ["html", "tsx", "ts"]
		});

		const map: Record<string, string> = {};
		for (const entry of entries) {
			const s = snippets[entry.key];
			map[entry.key] = h.codeToHtml(s.code, { lang: s.language, theme: "vitesse-dark" });
		}
		highlighted = map;
		ready = true;
	});

	function copyCode() {
		navigator.clipboard.writeText(selected.code);
		toast.success("Copied to clipboard", { position: "top-center" });
	}
</script>

<section use:inView class="animate-fade-in-up py-16 md:py-32">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto mb-10 max-w-2xl text-center md:mb-14">
			<h2 class="mb-5 text-4xl font-bold tracking-tight md:text-5xl">Add Orbit to your site</h2>
			<p class="text-lg leading-relaxed text-muted-foreground">
				Paste one script and start tracking. Works with every framework.
			</p>
		</div>

		<div
			class="tabs-scrollbar mx-auto flex thin-scrollbar flex-nowrap items-center gap-2 overflow-x-auto md:flex-wrap md:justify-center"
		>
			{#each entries as entry, i (entry.key)}
				<button
					class="inline-flex shrink-0 cursor-pointer items-center rounded-xl border px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 md:text-sm"
					class:border-foreground={selectedIndex === i}
					class:bg-foreground={selectedIndex === i}
					class:text-background={selectedIndex === i}
					class:border-border={selectedIndex !== i}
					class:text-muted-foreground={selectedIndex !== i}
					class:hover:bg-muted={selectedIndex !== i}
					class:hover:border-muted-foreground={selectedIndex !== i}
					onclick={() => (selectedIndex = i)}
				>
					{entry.label}
				</button>
			{/each}
		</div>

		<div class="mx-auto mt-6 max-w-3xl md:mt-8">
			<div
				class="installation-code relative rounded-xl border border-border bg-muted/30"
				style="background-color: #0a0a0a"
			>
				<button
					class="absolute top-3 right-3 z-10 flex size-8 cursor-pointer items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
					onclick={copyCode}
					aria-label="Copy code"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						class="size-4"
					>
						<rect x="9" y="9" width="13" height="13" rx="2" />
						<path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
					</svg>
				</button>
				<div
					class="thin-scrollbar overflow-y-auto p-4 text-sm leading-relaxed md:p-5"
					style="height: 320px"
				>
					{#if ready && highlighted[selected.key]}
						{@html highlighted[selected.key]}
					{:else}
						<pre
							class="m-0 p-0 font-mono text-sm leading-relaxed text-muted-foreground">{selected.code}</pre>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.tabs-scrollbar::-webkit-scrollbar-thumb) {
		background: var(--color-foreground) !important;
	}

	:global(.tabs-scrollbar) {
		scrollbar-color: var(--color-foreground) transparent !important;
	}

	.installation-code :global(.shiki) {
		background-color: transparent !important;
		margin: 0;
		padding: 0;
		font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
		font-size: 0.8125rem;
		line-height: 1.6;
	}

	.installation-code :global(.shiki code) {
		display: block;
	}

	.installation-code :global(.shiki .line) {
		display: block;
	}
</style>
