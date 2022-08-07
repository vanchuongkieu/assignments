import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 40px;
`;

export const Breadcrumb = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 64px;
  background: #fff;
  z-index: 10;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    height: 36px;
    z-index: 1099;
    a {
      color: #707070;
    }
  }
`;

export const Tilte = styled.div`
  border-bottom: 1px solid #d1d5db;
  padding: 5px 0;
  background: #fff;
  .container {
    a {
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;
      color: #0a263c;
      line-height: 1.35;
    }
  }
  margin-bottom: 30px;
`;

export const SwiperWrapper = styled.div`
  width: 400px;
  flex-basis: 400px;

  .main-swiper {
    height: 400px;
    .swiper-slide {
      border-radius: 10px;
      overflow: hidden;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        border-style: none;
        object-fit: contain;
      }
    }
  }

  .thumbs {
    height: 45px;
    margin-top: 15px;
    padding: 0 20px;
    .swiper-button-next,
    .swiper-button-prev {
      &::after {
        font-size: 15px;
        color: #d70018;
      }
      background-color: #fff;
      width: 15px;
      height: 45px;
      top: 47%;
    }
    .swiper-button-next {
      right: 0px;
    }

    .swiper-button-prev {
      left: 0px;
    }
    .swiper-slide {
      max-width: 45px;
      height: 45px;
      border: 1px solid #d1d5db;
      border-radius: 10px;
      overflow: hidden;
      padding: 5px;
      font-size: 7px;
      white-space: pre-line;
      order: 1;
      &.order-0 {
        order: 0;
        margin-right: 5px;
      }

      svg {
        width: 18px;
        height: 18px;
        margin-top: -2px;
      }
      text-align: center;
      cursor: pointer;
      span {
        display: block;
      }
      &.swiper-slide-thumb-active {
        border-color: #d70018;
      }
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        border-style: none;
        object-fit: cover;
      }
    }
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  .price {
    display: flex;
    align-items: center;
    gap: 15px;
    &-old {
      color: #d70018;
      font-size: 24px;
    }
    &-sale {
      font-size: 14px;
      color: #777777;
    }
    &-percent {
      background-color: #d70018;
      color: #fff;
      font-size: 12px;
      padding: 0 5px;
      line-height: 18px;
      border-radius: 5px;
    }
    margin: 0 0 15px;
  }
`;

export const ShortDescription = styled.div`
  word-break: break-word;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-wrap;
  margin-bottom: 30px;
`;

export const OutstandingFeatures = styled.div`
  .title {
    color: #d70018;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 16px;
  }
  white-space: pre-line;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  background: #f2f2f2;
  border-radius: 5px;
  margin-top: 40px;
  padding: 15px;
  word-break: break-word;
`;

export const Description = styled.div`
  white-space: pre-line;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  margin-top: 15px;
  word-break: break-word;
`;

export const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  gap: 15px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 48px;
    min-width: 200px;

    &.ant-btn-default {
      border: 0;
      color: #444;
      padding: 0;
      min-width: 50px;

      span {
        width: 70px;
        white-space: initial;
        display: block;
      }

      &:hover {
        svg {
          fill: var(--ant-error-color-hover);
          border-color: var(--ant-error-color-hover);
        }
      }
    }

    svg {
      fill: var(--ant-error-color);
      border-radius: 4px;
      height: 48px;
      width: 48px;
      padding: 12px;
      border: 1px solid var(--ant-error-color);
    }
  }
`;
