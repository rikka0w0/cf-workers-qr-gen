import qr from 'qr-image';
import index_html from "./index.html";

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const text = url.searchParams.get("qr_text");
		
		if (text) {
			const headers = { "Content-Type": "image/png" }
			const qr_png = qr.imageSync(text);

			return new Response(qr_png, { headers });
		}

		return new Response(index_html, {
			headers: {
				"Content-Type": "text/html"
			}
		})
	},
};
