import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { Callout, Cards, Steps, Tabs } from "nextra/components";

const HOSTNAME = "https://oss-llmops-stack.com";

export default {
  logo: <span>OSS LLMOps Stack</span>,
  project: {
    link: "https://github.com/langfuse/oss-llmops-stack",
  },
  docsRepositoryBase:
    "https://github.com/langfuse/oss-llmops-stack/tree/main/docs",

  head() {
    const { url } = useRouter();
    const { frontMatter } = useConfig();

    const title = frontMatter.title
      ? `${frontMatter.title} - The OSS LLMOps Stack`
      : "The OSS LLMOps Stack";
    const description = frontMatter.description;
    const ogImage = frontMatter.ogImage
      ? `${HOSTNAME}${frontMatter.ogImage}`
      : undefined;

    return (
      <>
        {/* Charset & Viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        {url && <link rel="canonical" href={url} />}

        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:site_name" content="The OSS LLMOps Stack" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        {description && (
          <meta property="twitter:description" content={description} />
        )}
        {ogImage && <meta property="twitter:image" content={ogImage} />}
      </>
    );
  },
  gitTimestamp: null,
  footer: {
    content: "The OSS LLMOps Stack",
  },
  search: {
    component: null,
  },
  components: {
    Callout,
    Tabs,
    Tab: Tabs.Tab,
    Steps,
    Cards,
    Card: Cards.Card,
  },
};
