import { Comment } from "../shared/comment.model";

export class Post {

  constructor(public name: string, public description: string, public imagePath: string, public comments: Comment[]) {}

}
