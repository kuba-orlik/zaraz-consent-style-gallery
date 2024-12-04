import { TempstreamJSX } from 'tempstream'

export default function makeIframe(
	attributes: Record<string, string>,
	content: JSX.Element,
): JSX.Element {
	return <iframe {...{ ...attributes, srcdoc: content }}></iframe>
}
