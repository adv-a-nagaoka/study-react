import { FC } from "react";
import styled from "styled-components";

export const Top: FC = () => {
  return (
    <StTopRoot>
      <StTopContents>react初心者向け講座</StTopContents>
    </StTopRoot>
  );
};

const StTopRoot = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 32px 24px;
`;

const StTopContents = styled.p`
  background-color: rgb(255, 255, 255);
  padding: 16px;
  border: 1px solid #222;
  border-radius: 3px;
  font-size: 24px;
  font-weight: bold;
`;
