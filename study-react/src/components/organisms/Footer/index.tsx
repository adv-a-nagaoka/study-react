import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <p>skyticket</p>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  font-size: 20px;
  width: 100%;
  margin-top: 32px;
  padding: 8px;
`;
