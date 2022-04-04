import { useState, useCallback, ChangeEvent } from "react";
import { Skill } from "../../molecules/Skill";

export const useCount = () => {
  const [count, setCount] = useState(0);
  console.log("----------rendering----------");
  const handleIncrement = useCallback(() => {
    console.log("----------Count rendering----------");
    return setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    console.log("----------Count rendering----------");
    // カウントが0以下にならないようにする
    if (count === 0) return;
    setCount(count - 1);
  }, [count]);
  const resetCount = useCallback(() => {
    console.log("----------execute resetCount----------");
    return setCount(0);
  }, []);

  return { count, handleIncrement, handleDecrement, resetCount };
};

export const useTagList = () => {
  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = useCallback(() => setTag([]), [tag]);
  const handlePushTag = (addTag: string) => {
    if (tag.some((e) => e === addTag)) {
      // 一致するタグがすでに存在する場合
      setTag(tag.filter((e) => e !== addTag));
    } else {
      // なければ追加
      setTag([...tag, addTag]);
    }
  };

  return { tag, handleClearTag, handlePushTag };
};

export const useCategory = () => {
  const [selectCategory, setSelectCategory] = useState<number>(0);
  const handleSelectCategory = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      console.log("handleSelectCategory", e.target.value);
      const categoryId = Number(e.target.value);
      setSelectCategory(categoryId);
    },
    [selectCategory]
  );

  return {
    selectCategory,
    handleSelectCategory,
  };
};

export const useSkill = () => {
  const [selectSkill, setSelectSkill] = useState<Skill[]>([]);
  const handleSelectSkill = useCallback(
    (tag: Skill) => {
      // 存在しなければ追加
      const isExist = selectSkill.some((e) => e.value === tag.value);
      if (!isExist) {
        setSelectSkill([...selectSkill, tag]);
      }
    },
    [selectSkill]
  );
  const handleDeleteSkill = useCallback(
    (tag: string) => {
      // 一致するタグが存在するかチェック
      if (selectSkill.some((e) => e.value === tag)) {
        // 該当のスキルを除外してset
        setSelectSkill(selectSkill.filter((e) => e.value !== tag));
      }
    },
    [selectSkill]
  );

  return {
    selectSkill,
    handleSelectSkill,
    handleDeleteSkill,
  };
};
