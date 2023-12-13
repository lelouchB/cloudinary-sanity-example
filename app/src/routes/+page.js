import { getGallery } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const galleryData = await getGallery();

	if (galleryData) {
		return galleryData;
	}

	throw error(404, 'Not found');
};
