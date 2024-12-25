
export interface Book {
    id: number,
    title: string,
    author: string,
    pages: number,
    releaseYear:number,
    cover: "hard" | "soft"
}