import { Rate } from "antd";
import { useState } from "react";

// export default function LibraryStarPage() {
//   const [value, setValue] = useState(3);

//   function handleChange(value: number) {
//     setValue(value);
//   }

//   return (
//     <span>
//       <Rate onChange={handleChange} value={value} />
//     </span>
//   );
// }

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  function handleChange(value: number) {
    setValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}

// return (
//     <span>
//       <Rate onChange={handleChange} value={2} />
//     </span>
//   );
//별 초기값이 2가 되는거임
