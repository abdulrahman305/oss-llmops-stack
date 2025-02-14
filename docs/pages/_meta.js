export default {
    index: {
        title: 'Overview',
        type: 'page',
        theme: {
            typesetting: 'article'
        }
    },
    docs: {
        title: 'Get Started',
        type: 'page'
    },
    "docs-links": {
        title: 'Docs',
        type: 'menu',
        items: {
            litellm: {
                title: 'LiteLLM Docs ↗',
                href: 'https://docs.litellm.ai/docs/simple_proxy',
                newWindow: true,
                type: 'page'
            },
            langfuse: {
                title: 'Langfuse Docs ↗',
                href: 'https://langfuse.com/docs',
                newWindow: true,
                type: 'page'
            }
        }
    }
}