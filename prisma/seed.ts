import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Post = {
	title: string;
	body: string;
};

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();
	return posts as Post[];
}

async function slugify(title: string) {
	return title
		.replace(/\s/g, '-')
		.replace(/[^a-zA-z0-9-]/g, '')
		.toLowerCase();
}

async function main() {
	const posts = await getPosts();

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: await slugify(post.title)
			}
		});
	}
}
main();
