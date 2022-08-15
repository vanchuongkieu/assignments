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

export const BoxRattingComment = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 15px;
  padding: 15px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  .empty-ratting {
    background-color: #eee;
    padding: 15px;
    text-align: center;
  }

  .box-total {
    display: flex;
    border: 1px solid rgb(60 64 67 / 20%);
    border-radius: 5px;
    margin-bottom: 15px;
    min-height: 40px;
    .box-count {
      width: 30%;
      border-right: 1px solid rgb(60 64 67 / 20%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      h2 {
        margin-bottom: 0;
        font-size: 30px;
      }

      svg {
        width: 20px;
      }
    }
    .box-progress {
      flex: 1;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .box-progress-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          svg {
            width: 15px;
          }
        }
        .total-rate {
          min-width: 70px;
        }
      }
    }
  }
`;

export const RattingProgess = styled.div`
  background-color: #eee;
  height: 10px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  .progess {
    background-color: var(--red-2);
    height: 100%;
  }
`;

export const RattingForm = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  form {
    position: absolute;
    width: 700px;
    min-height: 300px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    border-radius: 10px;
    overflow: hidden;
    .header {
      color: #fff;
      text-align: left;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 15px;
      background-color: var(--red-2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .content {
      padding: 15px;
      text-align: left;
      button {
        width: 100%;
      }
    }
  }
`;

export const Comment = styled.div`
  & + & {
    margin-top: 20px;
  }
  .header {
    .avatar-comment {
      background-color: #eee;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: #666;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .content-comment {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    margin-left: 40px;
    .rate {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      span {
        margin-right: 5px;
      }
      svg {
        &:first-child {
          margin-left: 10px;
        }
        width: 20px;
      }
    }
  }
`;
