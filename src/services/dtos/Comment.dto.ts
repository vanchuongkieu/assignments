export interface CommentDto {
  name: string;
  phone: string;
  comment: string;
  rate: number;
  product?: string;
}

export interface CommnetRattingResponse {
  comments: CommentDto[];
  commentTotal: {
    middle: number;
    count: number;
    comments: number[];
  };
}
