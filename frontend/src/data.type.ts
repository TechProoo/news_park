export interface PostProp {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    author_email: string;
    category: string;
    tags: string[];
    image: string;
    created_at: Date;
    user_id: number;
  }