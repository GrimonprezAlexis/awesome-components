import { Comment } from "../../core/models/comment.model";

//! = mode strict element are required and not empty
export class Post {
  id!: number;
  userId!: number;
  title!: string;
  createdDate!: string;
  content!: string;
  comments!: Comment[];
  imageUrl!: string;
}
