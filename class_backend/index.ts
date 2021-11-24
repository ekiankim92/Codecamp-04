// console.log("Hello World");

// 1. 테이블 만들기
// 2. API 만들어서 저장시키기
//tsx 가 아닌 이유는 우리가 jsx 를 쓰고 있지않기 때문에

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 처음에 수업할때 이걸로 씀. 알맹이들을 안에다가 씀 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

// type AAA {
//   fetchBoards2: [AAA]! //배열에 대한 느낌표
//   fetchBoards3: [AAA!]! //배열 안에 반드시 AAA 가 들어가야함
//   fetchBoards4: [AAA]
// }

const myResolver = {
  Query: {
    fetchBoards: async () => {
      // 어쩌구 저쩌구 데이터베이스에서 게시물데이터 꺼내오기
      // 이걸 return 을 하면 frontend 로 나가는거임
      // const result = await Board.find();
      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);
      // return "게시물 조회에 성공하였습니다!";
      return result;
    },
  },

  Mutation: {
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      //first curly bracket is the 조건
      return "게시물이 정상적으로 삭제되었습니다";
    },

    // 150 개의 API 가 있는데 공개적인건 100개 50개는 공통적인 API 함수로
    // 내부에서 사용하기 위한 API 들
    // 공통적인걸 빼고 빼다 보니까 몇몇개들은 15개정도 뺴놓은 공통 API. 프랜트한테는 안가는것
    // API 중에서 서로 쓸려고 공통된것을 만드는것임
    // createBoard 에서 deleteBoard 를 요청할수있음

    // 밑에 들어가는 parent 가 뭐에요?
    // 서로가 서로를 요청할수있으니까 backend 에서 자기가 자기끼리 요청할때
    // createBoard 가 deelteBoard 요청할때 parent 인자값을 쓰는것
    createBoard: async (_: any, args: any) => {
      /////// 1번째 방법  //////////
      // await Board.insert({
      //   title: "안녕하세요! 테스트입니다",
      //   writer: "짱구",
      //   age: 8,
      // });
      // 어쩌구 저쩌구 데이터베이스에서 게시물데이터 등록하기

      /////////2번째 방법 ///////////
      // await Board.insert({
      // ...args
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      //////// 3번째 방법 ///////////
      // console.log(args)
      // {
      //   createBoardInput: {
      //     title: '안녕하세요 제목입니다',
      //     writer: "짱구",
      //     age: 8
      //   }
      // }

      // console.log(args.createBoardInput)
      // {
      // title: '안녕하세요 제목입니다',
      // writer: "짱구",
      // age: 8
      // }
      // 이 전체를 ...args.createBoardInput 으로 뿌려줌

      await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return "게시물 등록에 성공하였습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  //type definition
  resolvers: myResolver,
  //실행되는 공간. 그냥 API 함수. 함수를 모아서 resolver 에다가 감싸서 잡어넣는거임
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3309,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  // 연결 성공시 실행하기
  .then(() => {
    console.log("연결 완료!");

    server.listen({ port: 4000 });
    // 접속할때까지 기다리는거임
  })
  .catch((error) => {
    console.log(error);
  });
// 연결 실패시 실행하기
