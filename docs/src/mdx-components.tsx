import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-xl font-bold py-4'>{children}</h1>
    ),
    p: ({ children }) => (
      <h1 className='text-xl'>{children}</h1>
    ),
    ...components,
  }
}
