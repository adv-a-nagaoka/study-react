import { FC } from "react";
import styled from "styled-components";

type Props = {
  tag: string;
  handlePushTag: (addTag: string) => void;
};

export const Tag: FC<Props> = ({ tag, handlePushTag }) => {
  return (
    <>
      <StTag onClick={() => handlePushTag(tag)}>{tag}</StTag>
    </>
  );
};

const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin-right: 8px;
  padding: 4px 12px;
  font-size: 12px;
`;
