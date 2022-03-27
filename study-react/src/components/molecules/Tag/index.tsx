import { FC } from "react";
import styled from "styled-components";

type Props = {
  tag: string;
  handleCloseTag: (tag: string) => void;
};

export const Tag: FC<Props> = ({ tag, handleCloseTag }) => {
  return (
    <StTag>
      <StTagText>{tag}</StTagText>
      <StCloseButton onClick={() => handleCloseTag(tag)}>×</StCloseButton>
    </StTag>
  );
};

const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px 12px;
  font-size: 12px;
`;
const StTagText = styled.span`
  display: inline-block;
  margin-right: 8px;
`;
const StCloseButton = styled.button`
  appearance: none;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
`;
