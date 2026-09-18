import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/hackuem", replace: true });
  },
  head: () => ({
    meta: [
      { title: "HackUEM 6.0 — 12-Hour Flagship Hackathon" },
      {
        name: "description",
        content:
          "HackUEM 6.0 was the 12-hour flagship hackathon organized by the UEM Jaipur ACM Student Chapter on 11 September 2026. The event is now closed.",
      },
      { property: "og:title", content: "HackUEM 6.0 — 12-Hour Flagship Hackathon" },
      {
        property: "og:description",
        content:
          "HackUEM 6.0 brought twelve hours of building and innovation to UEM Jaipur. The event is now closed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});