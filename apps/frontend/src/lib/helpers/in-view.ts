export function inView(node: HTMLElement, options?: { once?: boolean; threshold?: number }) {
	const { once = true, threshold = 0.15 } = options ?? {};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add("in-view");
					if (once) observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
