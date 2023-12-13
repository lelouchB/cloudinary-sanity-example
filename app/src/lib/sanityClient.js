import { createClient } from '@sanity/client';
import groq from 'groq';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-03-20'
});

export async function getGallery() {
	return await client.fetch(groq`*[_type == "gallery"] | order(_createdAt desc)[0]`);
}
