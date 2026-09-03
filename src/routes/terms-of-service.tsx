import { createFileRoute } from "@tanstack/react-router";
import { TermsOfServicePage } from "@/components/claro/TermsOfServicePage";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Claro" },
      {
        name: "description",
        content:
          "Read the terms and conditions governing your use of the Claro service.",
      },
      {
        property: "og:title",
        content: "Terms of Service | Claro",
      },
      {
        property: "og:description",
        content:
          "Read the terms and conditions governing your use of the Claro service.",
      },
    ],
  }),
  component: TermsOfServicePage,
});
