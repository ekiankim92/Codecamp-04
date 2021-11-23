// console.log("Hello World");

// 1. 테이블 만들기
// 2. API 만들어서 저장시키기
//tsx 가 아닌 이유는 우리가 jsx 를 쓰고 있지않기 때문에

import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecampt",
  host: "34.64.207.239",
  port: 3309,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts;"],
  logging: true,
  synchronize: true,
})
  // 연결 성공시 실행하기
  .then(() => {
    console.log("연결 완료!");
  })
  .catch((error) => {
    console.log(error.message);
  });
// 연결 실패시 실행가지
