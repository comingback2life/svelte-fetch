import db from '$lib/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await db.post.findUnique({ where: { slug: params.slug } });

	if (!post) {
		throw error(404, 'Posts not found');
	}
	return post;
};
