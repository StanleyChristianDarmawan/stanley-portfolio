import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    p: ({ children }) => <p className="text-lg my-2">{children}</p>,
  }
}