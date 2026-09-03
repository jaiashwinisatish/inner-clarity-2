import { createFileRoute } from "@tanstack/react-router";
import { ContactSupportPage } from "@/components/claro/ContactSupportPage";

export const Route = createFileRoute("/contact-support")({
  head: () => ({
    meta: [
      { title: "Contact Support | Claro" },
      {
        name: "description",
        content:
          "Get technical help, ask account questions, or submit feedback to the Claro support team.",
      },
      {
        property: "og:title",
        content: "Contact Support | Claro",
      },
      {
        property: "og:description",
        content:
          "Get technical help, ask account questions, or submit feedback to the Claro support team.",
      },
    ],
  }),
  component: ContactSupportPage,
});
