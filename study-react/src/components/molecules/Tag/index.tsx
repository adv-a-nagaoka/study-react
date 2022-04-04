import { FC } from "react";
import styled, { css } from "styled-components";

export type TagColor = "blue" | "red" | "green" | "yellow";
type Props = {
  tag: string;
  color?: TagColor;
  handleCloseTag: (tag: string) => void;
};

export const Tag: FC<Props> = ({ tag, color = "blue", handleCloseTag }) => {
  return (
    <StTag color={color}>
      <StTagText>{tag}</StTagText>
      <StCloseButton onClick={() => handleCloseTag(tag)}>×</StCloseButton>
    </StTag>
  );
};

const getStyle = (color: TagColor): string => {
  let style = "rgb(27, 161, 255)";
  switch (color) {
    case "red":
      style = "rgb(239, 83, 80)";
      break;
    case "green":
      style = "rgb(156, 204, 101)";
      break;
    case "yellow":
      style = "rgb(255, 167, 38)";
      break;
    case "blue":
    default:
  }
  return style;
};

const StTag = styled.li<{ color: TagColor }>`
  background-color: ${(props) => getStyle(props.color)};
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
