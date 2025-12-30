import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getImageData(id: string): ImagePlaceholder {
    const image = PlaceHolderImages.find((img) => img.id === id);
    if (!image) {
        // Return a default/fallback image if not found
        return {
            id: 'not-found',
            description: 'Placeholder image not found',
            imageUrl: 'https://picsum.photos/seed/notFound/600/400',
            imageHint: 'abstract placeholder'
        };
    }
    return image;
}
