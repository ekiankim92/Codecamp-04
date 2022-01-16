import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Hashtag(props) {
  const onKeyUp = (event) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      props.setHashtag([...props.hashtag, `#${event.target.value}`]);
      event.target.value = "";
    }
  };
  const onClickDelete = (index: number) => () => {
    props.hashtag.splice(index, 1);
    props.setHashtag([...props.hashtag]);
  };

  return (
    <>
      <div>
        <div>
          <label>Tags</label>
          <input type="text" onKeyUp={onKeyUp} />
          <div>
            {props.hashtag.map((el, index) => (
              <div key={uuidv4()} onClick={onClickDelete(index)}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// export default function HashTag() {
//   const [hashtag, setHashTag] = useState<String[]>([]);

//   const onKeyUp = (event) => {
//     if (event.keyCode === 32 && event.target.value !== " ") {
//       setHashTag([...hashtag, `#${event.target.value}`]);
//       event.target.value = "";
//     }
//   };

//   const onClickDeleteHashTag = (index: number) => () => {
//     hashtag.splice(index, 1);
//     setHashTag([...hashtag]);
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: "blue", display: "flex" }}>
//         <div style={{ backgroundColor: "red", color: "white" }}>
//           {hashtag.map((el, index) => (
//             <span key={index} onClick={onClickDeleteHashTag(index)}>
//               {el}
//             </span>
//           ))}
//         </div>
//         <input type="text" onKeyUp={onKeyUp} />
//       </div>
//     </>
//   );
// }
