import { FC, useState, useCallback } from "react";
import styled from "styled-components";

export type Skill = {
  id: number;
  categoryId: number;
  value: string;
};

export const useSkill = () => {
  const [selectSkill, setSelectSkill] = useState<string[]>([]);
  const handleSelectSkill = useCallback(
    (tag: string) => {
      if (selectSkill.some((e) => e === tag)) {
        // 一致するタグがすでに存在する場合
        setSelectSkill(selectSkill.filter((e) => e !== tag));
      } else {
        // なければ追加
        setSelectSkill([...selectSkill, tag]);
      }
    },
    [selectSkill]
  );

  return {
    selectSkill,
    handleSelectSkill,
  };
};

type Props = {
  skillList: Skill[];
  handleSelectSkill: (tag: string) => void;
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
          onClick={() => handleSelectSkill(t.value)}
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
