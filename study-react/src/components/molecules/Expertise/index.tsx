import { ChangeEvent, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { Category, CategoryList } from "../Category";
import { Skill, SkillList } from "../Skill";
import { Tag } from "../Tag";

type Props = {
  categoryList: Category[];
  handleSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  skillList: Skill[];
  selectSkill: string[];
  handleSelectSkill: (tag: string) => void;
};

export const Expertise: FC<Props> = ({
  categoryList,
  handleSelectCategory,
  skillList,
  selectSkill,
  handleSelectSkill,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {selectSkill.map((t) => (
            <Tag key={t} tag={t} handleCloseTag={handleSelectSkill} />
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
