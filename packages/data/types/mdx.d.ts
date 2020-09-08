declare module "*.mdx" {
  export const metadata: Record<string, any>
  export default (props: any) => JSX.Element
}
