<script lang="ts">
	import { onMount } from "svelte";
	import { inView } from "$lib/helpers/in-view";
	import { Button } from "$lib/components/ui/button";

	let sectionEl: HTMLElement;
	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		const ctx = canvas.getContext("2d")!;
		let W = 0,
			H = 0;

		let dots: {
			x: number;
			y: number;
			phase: number;
			speed: number;
			size: number;
			opacity: number;
		}[] = [];

		function resize() {
			const rect = sectionEl.getBoundingClientRect();
			W = canvas.width = rect.width;
			H = canvas.height = rect.height;
			initDots();
		}

		function initDots() {
			const count = W < 640 ? 180 : W < 1024 ? 300 : 500;
			dots = [];
			for (let i = 0; i < count; i++) {
				const bright = Math.random() < 0.12;
				dots.push({
					x: Math.random() * W,
					y: Math.random() * H,
					phase: Math.random() * Math.PI * 2,
					speed: 0.005 + Math.random() * 0.02,
					size: bright ? 0.8 + Math.random() * 1.2 : 0.2 + Math.random() * 0.6,
					opacity: bright ? 0.6 + Math.random() * 0.35 : 0.1 + Math.random() * 0.35,
				});
			}
		}

		function draw() {
			ctx.clearRect(0, 0, W, H);
			ctx.fillStyle = "#000";
			ctx.fillRect(0, 0, W, H);

			const time = Date.now() * 0.001;

			for (const d of dots) {
				const pulse = Math.sin(time * d.speed * 60 + d.phase) * 0.5 + 0.5;
				const alpha = d.opacity * (0.15 + pulse * 0.85);
				ctx.beginPath();
				ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
				ctx.fill();
			}
		}

		function loop() {
			draw();
			animationId = requestAnimationFrame(loop);
		}

		resize();
		window.addEventListener("resize", resize);
		loop();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
		};
	});
</script>

<section
	bind:this={sectionEl}
	use:inView
	class="animate-fade-in-up relative overflow-hidden border-t border-border bg-background py-20 md:py-32"
>
	<canvas bind:this={canvas} class="pointer-events-none absolute inset-0 z-0"></canvas>
	<div class="relative z-10">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					Ready to ship faster?
				</h2>
				<p class="mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-12">
					Start tracking in minutes. Free to get started, no credit card required.
				</p>
				<div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
					<a href="/signup">
						<Button
							size="lg"
							class="h-14 w-full rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 sm:w-auto"
						>
							Start
						</Button>
					</a>
					<a href="/demo">
						<Button
							size="lg"
							variant="outline"
							class="h-14 w-full rounded-full border-border px-8 text-base font-medium text-foreground transition-all duration-200 hover:scale-105 hover:bg-accent sm:w-auto"
						>
							Demo
						</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
