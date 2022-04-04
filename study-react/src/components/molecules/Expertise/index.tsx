import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Category, CategoryList } from "../Category";
import { Skill, SkillList } from "../Skill";
import { TagColor, Tag } from "../Tag";

type Props = {
  categoryList: Category[];
  handleSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  skillList: Skill[];
  selectSkill: Skill[];
  handleSelectSkill: (tag: Skill) => void;
  handleDeleteSkill: (tag: string) => void;
};

export const Expertise: FC<Props> = ({
  categoryList,
  handleSelectCategory,
  skillList,
  selectSkill,
  handleSelectSkill,
  handleDeleteSkill,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {selectSkill.map((t) => (
            <Tag
              color={getColor(t.categoryId)}
              key={t.id}
              tag={t.value}
              handleCloseTag={handleDeleteSkill}
            />
          ))}
        </StSelectedTagArea>
      </StSelectedTagAreaWrapper>
      <StTitle>カテゴリ</StTitle>
      <CategoryList
        categoryList={categoryList}
        handleSelectCategory={handleSelectCategory}
      />
      <StTitle>スキル</StTitle>
      <StSkillArea>
        <SkillList
          skillList={skillList}
          handleSelectSkill={handleSelectSkill}
        />
      </StSkillArea>
    </StWrapper>
  );
};

const getColor = (categoryId: number): TagColor => {
  let color: TagColor = "blue";
  switch (categoryId) {
    case 1:
    default:
      break;
    case 2:
      color = "red";
      break;
    case 3:
      color = "green";
      break;
    case 4:
      color = "yellow";
      break;
  }
  return color;
};

const StWrapper = styled.div`
  padding: 16px 0;
`;
const StTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
`;
const StSelectedTagAreaWrapper = styled.div`
  margin-bottom: 16px;
`;
const StSelectedTagArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const StSkillArea = styled.ul`
  margin-top: 16px;
  border: 1px solid;
  padding: 8px;
`;
