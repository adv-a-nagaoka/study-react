import { useState, useCallback } from "react";

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
