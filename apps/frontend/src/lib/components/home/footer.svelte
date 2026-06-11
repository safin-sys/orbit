<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { GithubIcon } from "@hugeicons/core-free-icons";
	import favicon from "$lib/assets/favicon.svg";
</script>

<footer class="border-t border-border py-12 pb-28">
	<div class="container mx-auto px-4 sm:px-6">
		<div
			class="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-10"
		>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<img src={favicon} alt="Orbit" class="h-5 w-5" />
					<span class="text-base font-medium tracking-tight">Orbit</span>
					<span
						class="rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase"
						>Alpha</span
					>
				</div>
				<p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
					Open-source, privacy-first web analytics. Understand your audience without compromising
					their privacy.
				</p>
			</div>

			<a
				href="https://github.com/safin-sys/orbit"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
			>
				<HugeiconsIcon icon={GithubIcon} class="size-4" />
				View on GitHub
			</a>
		</div>

		<div class="mt-14 border-t border-border pt-8 text-center">
			<p class="text-xs text-muted-foreground">
				© {new Date().getFullYear()} Orbit. Released under the GPL-3.0 License.
			</p>
		</div>
	</div>
</footer>
