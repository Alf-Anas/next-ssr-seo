export interface SampleResponse {
    data: Data;
    meta: Meta;
}
interface Data {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
}

interface Image {
    data: Data2;
}

interface Data2 {
    id: number;
    attributes: Attributes2;
}

interface Attributes2 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

interface Formats {
    large: Large;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

export interface Meta {}
