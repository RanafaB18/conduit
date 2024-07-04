export type Article = {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}

export type Author = {
    username: string;
    bio: string | null;
    image: string;
    following: boolean;
}

export type ArticleResponse = {
    articles: Article[],
    articlesCount: number
}

export type Filters = {
    tag?: string;
    author?: string;
    favorited?: boolean;
}