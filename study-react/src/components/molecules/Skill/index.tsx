import { FC } from "react";
import styled from "styled-components";

export type Skill = {
  id: number;
  categoryId: number;
  value: string;
};

type Props = {
  skillList: Skill[];
  handleSelectSkill: (tag: Skill) => void;
};

export const SkillList: FC<Props> = ({ skillList, handleSelectSkill }) => {
  if (skillList.length === 0) {
    return <StSelectText>カテゴリを選択してください</StSelectText>;
  }
  return (
    <>
      {skillList.map((t) => (
        <StSelectText
          key={t.id}
          value={t.value}
          onClick={() => handleSelectSkill(t)}
        >
          {t.value}
        </StSelectText>
      ))}
    </>
  );
};

const StSelectText = styled.li`
  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
