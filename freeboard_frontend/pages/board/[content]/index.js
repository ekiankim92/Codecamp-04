import ContainerDetailPage from "../../../src/components/units/board/detail/BoardDetail.container";
//BoardDetail.container
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
//BoardCommentWrite.container
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
//BoardCommentList.container

export default function ContainerPresenterPage() {
  return (
    <>
      <ContainerDetailPage />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}

// import BoardEdit from '../../../../src/components/units/board/write/BoardWrite.container'

// export default function BoardEditOpenPage() {
//     return <ContainerDetailPage/>
// }
