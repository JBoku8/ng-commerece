export interface IArticle {
    userId: number;
    id: number;
    title:string;
    body: string;
}

export interface IArticleComment {
    postId: number;
    id: number;
    email: string;
    body: string;
    name: string;
}