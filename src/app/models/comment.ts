export interface Comment {
  id: string;
  useId: number;
  timestamp: string;
  comment: string; 
  commentTime: Date;
  markedSpam: boolean;
  isDeleted: boolean;
}

export class Comment implements Comment{
    constructor(comment:string ){
      this.comment = comment;
      this.markedSpam = false;
      this.isDeleted = false;
    }
}

export interface CommentData { comment: string; id: string; }
export interface Comment extends CommentData { id: string; }