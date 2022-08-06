import utils from "@/utils";
import { Button, Empty, Input, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CaretLeftIcon, CrossIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { cartAction, CartSelector } from "./reducer";
import * as S from "./styled";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, total } = useSelector(CartSelector);

  const increase = (id?: string) => {
    dispatch(cartAction.increase(id));
  };

  const decrease = (id?: string) => {
    dispatch(cartAction.decrease(id));
  };

  const remove = (id?: string) => {
    dispatch(cartAction.remove(id));
    message.success("Xóa thành công");
  };

  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <CaretLeftIcon />
          Trở về
        </Link>
        <span>Giỏ hàng</span>
      </S.Header>
      {carts.length ? (
        carts.map(({ quantity, product }) => (
          <S.BoxItem key={product._id}>
            <S.BoxImage src={product.image} />
            <S.BoxContent>
              <div className="close-btn">
                <Popconfirm
                  title="Bạn có đồng ý xóa sản phẩm?"
                  onConfirm={() => remove(product._id)}
                  okText="Đồng ý"
                  cancelText="Hủy"
                  placement="bottom"
                >
                  <span>
                    <CrossIcon width={12} height={12} />
                  </span>
                </Popconfirm>
              </div>
              <div className="title">{product.name}</div>
              <div className="price">
                {product.new_price ? (
                  <>
                    <div className="price-old">
                      {utils.currency(product.new_price)}
                    </div>
                    <div className="price-sale">
                      {utils.currency(product.price)}
                    </div>
                    <div className="price-percent">
                      Giảm {utils.salePercent(product.price, product.new_price)}
                    </div>
                  </>
                ) : (
                  <div className="price-old">
                    {utils.currency(product.price)}
                  </div>
                )}
              </div>
              <div className="amount">
                <span>Chọn số lượng:</span>
                <Input.Group compact>
                  {quantity > 1 ? (
                    <Button onClick={() => decrease(product._id)}>-</Button>
                  ) : (
                    <Popconfirm
                      title="Bạn có đồng ý xóa sản phẩm?"
                      onConfirm={() => remove(product._id)}
                      onCancel={() => increase(product._id)}
                      okText="Đồng ý"
                      cancelText="Hủy"
                      placement="bottom"
                    >
                      <Button onClick={() => decrease(product._id)}>-</Button>
                    </Popconfirm>
                  )}
                  <Input
                    value={quantity}
                    min={1}
                    onChange={(e) =>
                      dispatch(
                        cartAction.change({
                          id: product._id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                  />
                  <Button onClick={() => increase(product._id)}>+</Button>
                </Input.Group>
              </div>
              <S.Description>{product.short_description}</S.Description>
            </S.BoxContent>
          </S.BoxItem>
        ))
      ) : (
        <Empty description={false} />
      )}
      <S.TotalPrice>
        <span>Tổng tiền tạm tính:</span>
        <h2>{utils.currency(total)}</h2>
      </S.TotalPrice>
      <S.ButtonGroup>
        <Button type="primary" danger>
          Tiến hành đặt hàng
        </Button>
        <Button danger>
          <Link to="/">Chọn thêm sản phẩm khác</Link>
        </Button>
      </S.ButtonGroup>
    </S.Container>
  );
};

export default Cart;
