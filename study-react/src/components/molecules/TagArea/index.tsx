import { FC } from "react";
import styled from "styled-components";
import { Tag } from "../Tag";

export type TagList = { id: string; value: string }[];

type Props = {
  tag: string[];
  tagList: TagList;
  handleAllClearTag: () => void;
  handlePushTag: (addTag: string) => void;
};

export const TagArea: FC<Props> = ({
  tag,
  tagList,
  handleAllClearTag,
  handlePushTag,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {tag.map((t) => (
            <Tag key={t} tag={t} handleCloseTag={handlePushTag} />
          ))}
        </StSelectedTagArea>
        <div onClick={handleAllClearTag}>×</div>
      </StSelectedTagAreaWrapper>
      <StSelectAreaWrapper>
        <StSelectArea>
          {tagList.map((t) => (
            <StSelectText key={t.value} onClick={() => handlePushTag(t.value)}>
              {t.value}
            </StSelectText>
          ))}
        </StSelectArea>
      </StSelectAreaWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div``;

const StSelectedTagAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StSelectedTagArea = styled.ul`
  display: flex;
`;

const StSelectAreaWrapper = styled.div`
  margin-top: 16px;
  border: 1px solid;
  padding: 0 8px;
`;
const StSelectArea = styled.ul`
  display: flex;
`;

const StSelectText = styled.li`
  margin-right: 8px;
`;
