import axios from "axios";

export default function GraphqlRestPage() {
  const onClickSubmit = async () => {
    // 밑에 방식은 헤더에 accessToken 을 넣어야할떄
    // const result = axios.post("", {}, {headers: {
    //     authorization:
    // }})

    // fetch 건 query 건 무조건 post
    const result = await axios.post(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        query: `
                    mutation createBoard { 
                        createBoard( 
                            createBoardInput: {
                                writer: "숙희",
                                password: "1234",
                                title: "멍멍",
                                contents: "뭘 쳐다봐"
                            }
                    ){
                        _id
                        writer
                    }
                }
                `,
      }
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
