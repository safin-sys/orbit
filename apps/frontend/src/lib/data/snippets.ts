export const snippets = {
  next: {
    label: "Next.js",
    language: "tsx",
    code: `// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://orbit.pages.dev/orbit.js"
          data-api-key="YOUR_API_KEY"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}`,
  },

  react: {
    label: "React",
    language: "tsx",
    code: `// main.tsx or index.tsx
import { useEffect } from "react";

function OrbitScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://orbit.pages.dev/orbit.js";
    script.dataset.apiKey = "YOUR_API_KEY";
    script.defer = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return null;
}

// Add <OrbitScript /> to your root component`,
  },

  svelte: {
    label: "SvelteKit",
    language: "html",
    code: `<!-- src/routes/+layout.svelte -->
<svelte:head>
  <script src="https://orbit.pages.dev/orbit.js" data-api-key="YOUR_API_KEY" defer></script>
</svelte:head>

<slot />`,
  },

  nuxt: {
    label: "Nuxt",
    language: "ts",
    code: `// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://orbit.pages.dev/orbit.js",
          "data-api-key": "YOUR_API_KEY",
          defer: true,
        },
      ],
    },
  },
});`,
  },

  vue: {
    label: "Vue",
    language: "ts",
    code: `// main.ts
const script = document.createElement("script");
script.src = "https://orbit.pages.dev/orbit.js";
script.dataset.apiKey = "YOUR_API_KEY";
script.defer = true;
document.head.appendChild(script);`,
  },

  astro: {
    label: "Astro",
    language: "html",
    code: `<!-- src/layouts/Layout.astro -->
<head>
  <script src="https://orbit.pages.dev/orbit.js" data-api-key="YOUR_API_KEY" defer></script>
</head>`,
  },

  remix: {
    label: "Remix",
    language: "tsx",
    code: `// app/root.tsx
import { Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <body>
        <Outlet />
        <Scripts />
        <script
          src="https://orbit.pages.dev/orbit.js"
          data-api-key="YOUR_API_KEY"
          defer
        />
      </body>
    </html>
  );
}`,
  },

  gatsby: {
    label: "Gatsby",
    language: "tsx",
    code: `// gatsby-ssr.tsx
import { Script } from "gatsby";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <Script
      key="orbit"
      src="https://orbit.pages.dev/orbit.js"
      data-api-key="YOUR_API_KEY"
    />,
  ]);
};`,
  },

  html: {
    label: "HTML",
    language: "html",
    code: `<script src="https://orbit.pages.dev/orbit.js" data-api-key="YOUR_API_KEY" defer></script>`,
  },
} as const;

export type SnippetKey = keyof typeof snippets;
