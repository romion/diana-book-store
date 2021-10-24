export interface Book {
  name: string;
  author: string;
  pages: number;
  picture?: string;
  isBestseller?: boolean;
  id: number;
  genre: string[];
  description?: string;
}
