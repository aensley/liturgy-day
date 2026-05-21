import { version } from '../package.json'

export const onRequestGet = async (context: any): Promise<Response> => {
  const response = await context.next()
  return new HTMLRewriter()
    .on('footer', {
      element: (element) => {
        element.prepend(` | v${version}`, { html: false })
      }
    })
    .transform(response)
}
