/**
 * @param {Request} request
 * @returns {Response}
 */
const handle = (request) => {
	if (request.method === "GET") {
		if (new URL(request.url).hostname === "hyperz111.my.id") {
			return Response.redirect("https://gravatar.com/hyperz111", 302);
		}

		return new Response(null, { status: 404 });
	}

	return new Response("Method Not Allowed", { status: 405 });
};

export default handle;

/** @type {import("@netlify/functions").Config} */
export const config = {
	path: "/*",
};
