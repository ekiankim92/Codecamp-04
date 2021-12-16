import { useState } from "react";

export default function HashTag() {
  const [hashtag, setHashTag] = useState<String[]>([]);

  const onKeyUp = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashTag([...hashtag, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const onClickDeleteHashTag = (index: number) => () => {
    hashtag.splice(index, 1);
    setHashTag([...hashtag]);
  };

  return (
    <>
      <div style={{ backgroundColor: "blue", display: "flex" }}>
        <div style={{ backgroundColor: "red", color: "white" }}>
          {hashtag.map((el, index) => (
            <span key={index} onClick={onClickDeleteHashTag(index)}>
              {el}
            </span>
          ))}
        </div>
        <input type="text" onKeyUp={onKeyUp} />
      </div>
    </>
  );
}
