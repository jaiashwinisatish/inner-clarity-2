import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/claro/PrivacyPolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Claro" },
      {
        name: "description",
        content:
          "Learn how Claro collects, uses, protects, and manages information when you use the Claro service.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Claro",
      },
      {
        property: "og:description",
        content:
          "Learn how Claro collects, uses, protects, and manages information when you use the Claro service.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});
