import { TempstreamJSX } from 'tempstream'

export default function makeIframe(
	attributes: Record<string, string>,
	content: string,
) {
	return (
		<iframe
			width="100%"
			height="500"
			{...{ ...attributes, srcdoc: content }}
		></iframe>
	)
}
