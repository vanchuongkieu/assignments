import { CommentDto } from "@/services/dtos/Comment.dto";

class Utils {
  currency(value: number) {
    return value.toLocaleString("it-IT") + " đ";
  }
  salePercent(oldPrice: number, newPrice: number) {
    const calc = (oldPrice - newPrice) / oldPrice;
    const price = Math.round(calc * 100);
    return price + "%";
  }
  countStar(comments: CommentDto[]) {
    let count = 0;
    let sum = 0;
    const commentsCount = [];
    for (let i = 1; i <= 5; i++) {
      const totalStar = comments.filter((x) => x.rate == i).length;
      commentsCount.push(totalStar);
    }
    commentsCount.forEach(function (value, index) {
      if (value) {
        count += value;
        sum += value * (index + 1);
      }
    });

    const commentTotal = {
      middle: Number((sum / count).toFixed(1)) || 0,
      count: comments.length,
      comments: commentsCount,
    };
    return commentTotal;
  }
}

export default new Utils();
