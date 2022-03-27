import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Counter } from "../../molecules/Counter";
import { TagArea, TagList } from "../../molecules/TagArea";
import { Skill, useSkill } from "../../molecules/Skill";
import { Category, useCategory } from "../../molecules/Category";
import { Expertise } from "../../molecules/Expertise";
import { useCount, useTagList } from "./hooks";

export const Top: FC = () => {
  const { count, handleIncrement, handleDecrement, resetCount } = useCount();
  const { tag, handleClearTag, handlePushTag } = useTagList();
  const { selectCategory, handleSelectCategory } = useCategory();
  const { selectSkill, handleSelectSkill } = useSkill();

  const [tagList, setTagList] = useState<TagList>([]);
  const [skillList, setSkillList] = useState<Skill[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  // 初回のみ呼び出し
  useEffect(() => {
    console.log("mounted");

    const getTag = async () => {
      const res = await fetch("/api/tag");
      const data: TagList = await res.json();

      setTagList(data);
    };
    getTag();

    const getCategory = async () => {
      const res = await fetch("/api/category");
      return await res.json();
    };
    getCategory().then((categoryData: Category[]) => {
      setCategoryList(categoryData);
    });
  }, []);

  // selectCategoryの値が変更されたとき呼び出し
  useEffect(() => {
    console.log("change selectCategory", selectCategory);
    if (selectCategory === 0) {
      setSkillList([]);
      return;
    }
    const getSkill = async () => {
      const res = await fetch(`/api/skill/${selectCategory}`);
      return await res.json();
    };
    getSkill().then((skillData: Skill[]) => {
      setSkillList(skillData);
    });
  }, [selectCategory]);

  return (
    <StTopRoot>
      <StContent>
        <StTopTitle>react初心者向け講座</StTopTitle>
        <StArticle>
          <StArticleTitle>カウント</StArticleTitle>
          <Counter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            resetCount={resetCount}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>タグ</StArticleTitle>
          <TagArea
            tag={tag}
            tagList={tagList}
            handleAllClearTag={handleClearTag}
            handlePushTag={handlePushTag}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>興味のある言語/フレームワーク</StArticleTitle>
          <Expertise
            categoryList={categoryList}
            handleSelectCategory={handleSelectCategory}
            skillList={skillList}
            selectSkill={selectSkill}
            handleSelectSkill={handleSelectSkill}
          />
        </StArticle>
      </StContent>
    </StTopRoot>
  );
};

const StTopRoot = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 32px 24px;
`;

const StContent = styled.div`
  background-color: rgb(255, 255, 255);
`;

const StTopTitle = styled.h1`
  background-color: rgb(255, 255, 255);
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid #222;
  border-radius: 3px;
  font-size: 24px;
  font-weight: bold;
`;

const StArticle = styled.article`
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid #222;
  border-radius: 3px;
`;

const StArticleTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
