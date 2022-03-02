import { FC, useState } from "react";
import styled from "styled-components";
import { Counter } from "../../molecules/Counter";
import { TagArea, TagList } from "../../molecules/TagArea";

export const Top: FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    // カウントが0以下にならないようにする
    if (count === 0) return;
    setCount(count - 1);
  };

  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = () => setTag([]);
  const handlePushTag = (addTag: string) => {
    if (tag.some((e) => e === addTag)) {
      // 一致するタグがすでに存在する場合
      setTag(tag.filter((e) => e !== addTag));
    } else {
      // なければ追加
      setTag([...tag, addTag]);
    }
  };
  const tagList: TagList = [
    { id: "tag1", value: "React" },
    { id: "tag2", value: "Vue.js" },
    { id: "tag3", value: "Angular" },
    { id: "tag4", value: "Next.js" },
    { id: "tag5", value: "Nuxt.js" },
    { id: "tag6", value: "jQuery" },
    { id: "tag7", value: "Gatsby.js" },
  ];

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
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>タグ</StArticleTitle>
          <TagArea
            tag={tag}
            tagList={tagList}
            handleClearTag={handleClearTag}
            handlePushTag={handlePushTag}
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

const StTopTitle = styled.p`
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

const StArticleTitle = styled.p`
  font-weight: bold;
`;
