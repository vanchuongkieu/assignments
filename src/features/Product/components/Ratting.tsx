import { StarIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  ratting?: number;
  disabled?: boolean;
  onValueChange?: (num: number) => void;
};

const Radio = styled.input`
  display: none;
`;

const Ratting = ({ ratting = 0, disabled, onValueChange }: Props) => {
  const [rattingValue, setRatting] = useState<number>(0);

  useEffect(() => setRatting(ratting), [ratting]);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              disabled={disabled}
              value={starValue}
              onClick={() => {
                setRatting(starValue);
                onValueChange && onValueChange(starValue);
              }}
            />
            <StarIcon fill={starValue <= rattingValue ? "#f59e0b" : "#000"} />
          </label>
        );
      })}
    </>
  );
};

export default Ratting;
