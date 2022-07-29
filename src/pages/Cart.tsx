import ListProduct from "@/components/Product/List";
import Title from "@/components/Title";
import { StyledContainer } from "@/layouts/client/StyledLayout";
import {
  decreaseUpdateCart,
  increaseUpdateCart,
  removeCart,
  updateCart,
} from "@/redux/actions/cartAction";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cart } from "@/redux/reducers/cartReducer";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CartList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  .title {
    font-weight: bold;
    margin-top: 15px;
  }
  .listflex {
    display: flex;
    align-items: center;

    img {
      width: 150px;
    }

    button {
      cursor: pointer;
      padding: 0 15px;
    }
    button,
    input {
      border: 1px solid #bdbdbd;
      height: 36px;
      background-color: #fff;
      border-radius: 5px;
      user-select: none;
    }

    .quantity {
      margin-left: 20%;
      &-input {
        margin-top: 10px;
        button {
          width: 40px;
          cursor: pointer;
          padding: 0;
        }
        input {
          width: 60px;
          text-align: center;
        }
      }
    }
  }
`;

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const { carts, total } = useAppSelector(cart);
  const [products, setProducts] = useState<ProductDto[]>([]);

  const fetchProducts = async () => {
    const { data } = await productServices.all();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const currency = (value: number) => {
    return value.toLocaleString("it-IT") + " đ";
  };

  return (
    <StyledContainer>
      <section
        style={{ border: "1px dashed red", marginTop: "40px", padding: 15 }}
      >
        <StyledContainer>
          <Title style={{ marginBottom: "20px" }}>sản phẩm</Title>
        </StyledContainer>
        <ListProduct
          col={4}
          cartButton
          style={{ margin: 0 }}
          products={products}
        />
      </section>
      <div style={{ border: "1px dashed", marginTop: "40px", padding: 15 }}>
        <Title style={{ marginBottom: "20px" }}>Giỏ hàng</Title>
        <CartList>
          {carts.map((cart) => (
            <li key={cart._id}>
              <div className="title">{cart.name}</div>
              <div className="listflex">
                <img src={cart.image} alt="" />
                <div className="quantity">
                  <span>Số lượng</span>
                  <div className="quantity-input">
                    <button onClick={() => dispatch(decreaseUpdateCart(cart))}>
                      -
                    </button>
                    <input
                      type="text"
                      value={cart.quantity}
                      onChange={(e) =>
                        dispatch(
                          updateCart({
                            ...cart,
                            quantity: Number(e.target.value),
                          })
                        )
                      }
                    />
                    <button onClick={() => dispatch(increaseUpdateCart(cart))}>
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: "right", marginLeft: "auto" }}>
                  <div style={{ fontWeight: "bold", marginBottom: 10 }}>
                    {cart.new_price > 0
                      ? currency(cart.new_price * cart.quantity)
                      : currency(cart.price * cart.quantity)}
                  </div>
                  <button onClick={() => dispatch(removeCart(cart))}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </CartList>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <span>Tổng số tiền</span>
          <span style={{ color: "red", fontSize: 26 }}>{currency(total)}</span>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Cart;
