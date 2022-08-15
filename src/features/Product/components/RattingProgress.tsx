import { StarIcon } from "@/assets/icons";
import commentApi from "@/services/comment.service";
import * as S from "../styled";
import Ratting from "./Ratting";

type Props = {
  ascii?: string;
};

const RattingProgress = ({ ascii }: Props) => {
  const { data: comments } = commentApi.useListRattingQuery(ascii);

  return comments ? (
    <div className="box-total">
      <div className="box-count">
        <h2>{comments.commentTotal.middle}/5</h2>
        <div>
          <Ratting
            ratting={Math.round(comments.commentTotal.middle)}
            disabled
          />
        </div>
        {comments.commentTotal.count} đánh giá và nhận xét
      </div>
      <div className="box-progress">
        {comments.commentTotal.comments.map((value, index) => {
          index += 1;
          const percent = (value * 100) / comments.commentTotal.count;
          return (
            <div className="box-progress-item" key={index}>
              <span>
                {index} <StarIcon />
              </span>
              <S.RattingProgess>
                <div
                  className="progess"
                  style={{ width: percent ? percent + "%" : "0" }}
                ></div>
              </S.RattingProgess>
              <div className="total-rate">{value} đánh giá</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default RattingProgress;
