import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	return new Response('Hello');
};

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');
	return new Response(
		JSON.stringify({
			success: true,
			message: 'Data could be fetched from the DB',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	);
};
