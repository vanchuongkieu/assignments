import { AddIcon } from "@/assets/icons";
import { message, Upload as AntdUpload, UploadProps } from "antd";
import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import styled from "styled-components";

const UploadCard = styled(AntdUpload)`
  & .ant-upload {
    width: 100%;
    height: 490px;
    overflow: hidden;
  }

  & .ant-upload-select-picture-card {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 0;
  }

  & svg {
    fill: #000;
    transition: all 0.25s ease-in-out;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover {
    & svg {
      fill: var(--info-2);
    }
  }
`;

interface Props {
  onFile: (file: File | null) => void;
  preview?: string;
}

const Upload = ({ onFile, preview }: Props) => {
  const [previewImage, setPreviewImage] = useState<string>();

  useEffect(() => {
    setPreviewImage(preview);
  }, [preview]);

  const getBase64 = (img: any, callback: (values: any) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = async (file: RcFile) => {
    const accepts = ["image/gif", "image/jpeg", "image/png"];
    const extensionFile = accepts.map((item) => item.split("image/")[1]);
    if (file.size / 1024 / 1024 > 2) {
      message.error("Kích thước ảnh tối đa 2MB");
      return false;
    } else if (!accepts.includes(file.type)) {
      message.error(
        `Hình ảnh phải thuộc một trong các định dạng sau: ${extensionFile.join(
          ", "
        )}`
      );
      return false;
    }
    getBase64(file, (image) => {
      setPreviewImage(image);
      onFile(file);
    });
    return false;
  };

  const uploadProps: UploadProps = {
    fileList: [],
    showUploadList: false,
    listType: "picture-card",
    beforeUpload: beforeUpload,
    onChange: () => {
      setPreviewImage("");
      onFile(null);
    },
  };

  return (
    <UploadCard {...uploadProps}>
      {previewImage ? (
        <img src={previewImage} alt={previewImage} />
      ) : (
        <AddIcon width={40} height={40} />
      )}
    </UploadCard>
  );
};

export default Upload;
