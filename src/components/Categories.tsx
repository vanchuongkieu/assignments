import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const colors = [
  "--gray-1",
  "--gray-2",
  "--gray-3",
  "--gray-4",
  "--gray-5",
  "--gray-6",
  "--green-1",
  "--green-2",
  "--green-3",
  "--primary",
  "--red-1",
  "--red-2",
  "--info-1",
  "--info-2",
  "--yellow-1",
  "--yellow-2",
  "--cyan-1",
  "--cyan-2",
  "--cyan-3",
  "--orange-1",
  "--orange-2",
  "--palette-1",
  "--palette-2",
  "--palette-3",
  "--palette-4",
  "--palette-5",
  "--magenta-1",
  "--magenta-2",
  "--magenta-3",
  "--magenta-4",
  "--purple-1",
  "--purple-2",
  "--purple-3",
  "--purple-4",
];

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 10px;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;

  & a {
    color: #444444;
  }
`;

const Item = styled(Link)`
  height: 125px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  object-fit: cover;

  &.bg {
    img {
      width: 80px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    color: #fff;
    text-shadow: 1px 1px 2px #999;
    margin: 8px 10px;
    word-break: break-word;
    width: 80%;
  }
  & img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    vertical-align: middle;
    border-style: none;
  }
`;

import img from "../assets/images/category/category-1.png";
import Title from "./Title";

type Props = {
  title: string;
  data: any[];
  bg?: boolean;
};

const Categories = ({ title, data, bg }: Props) => {
  return (
    <>
      <ListTitle>
        <Title>{title}</Title>
        <Link to="">Xem thêm</Link>
      </ListTitle>
      <List>
        {data.map((item, key) => (
          <Item
            key={key}
            to=""
            style={{
              backgroundColor: bg
                ? `var(${colors[Math.floor(Math.random() * colors.length)]})`
                : "",
            }}
            className={bg ? "bg" : ""}
          >
            <span className="title">{item.name}</span>
            <img src={item.image} alt="" />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Categories;
