import { ChangeEvent, FC } from "react";
import styled from "styled-components";

export type Category = {
  id: number;
  value: string;
};

type Props = {
  categoryList: Category[];
  handleSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const CategoryList: FC<Props> = ({
  categoryList,
  handleSelectCategory,
}) => {
  return (
    <StCategorySelect onChange={(e) => handleSelectCategory(e)}>
      {categoryList.map((category) => (
        <StCategoryOption key={category.id} value={category.id}>
          {category.value}
        </StCategoryOption>
      ))}
    </StCategorySelect>
  );
};

const StCategorySelect = styled.select`
  width: 320px;
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
`;
const StCategoryOption = styled.option``;
