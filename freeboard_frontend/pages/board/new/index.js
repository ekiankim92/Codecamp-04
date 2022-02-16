// export default 해서 만들기 !! (보면서 따라서 만들기)
// class folder 보고 따라 만들기

import {
  MyDiv,
  Wrapper,
  DataForm,
  Address,
  Title,
  MiddleStory,
  Name,
  Password,
  NameOfTitle,
  AddressContinue,
  Video,
  Pictures,
  UploadPic,
  AlinePictures,
  FinalButtons,
  CancelButton,
  ReviseButton,
  MainSettings,
  DataName,
  DataPassword,
  TitleName,
  MiddleComment,
  AddressName,
  AddressNumber,
  AddressButton,
  YouTubeVideo,
  AddingPhoto,
  MainMenu,
  MainMenuPicture,
  ButtonLines,
} from "../../../styles/board_new";

export default function PortfolioPage() {
  return (
    <Wrapper>
      <MyDiv>게시물 등록</MyDiv>

      <DataForm>
        <DataName>작성자</DataName>
        <Name type="text" placeholder="이름을 적어주세요." />
        <DataPassword>비밀번호</DataPassword>
        <Password type="text" placeholder="비밀번호를 입력해주세요." />`
      </DataForm>

      <Title>
        <TitleName>제목</TitleName>
        <NameOfTitle type="text" placeholder="제목을 작성해주세요." />
      </Title>

      <MiddleStory>
        <MiddleComment>내용</MiddleComment>
        <textarea placeholder="내용을 작성해주세요." rows="15" cols="83" />
      </MiddleStory>

      <Address>
        <AddressName>
          <label>주소</label>
        </AddressName>
        <AddressNumber type="text" placeholder="07250" />
        <AddressButton>우편번호 검색</AddressButton>
        <div>
          <AddressContinue type="text" />
          <div>
            <AddressContinue type="text" />
          </div>
        </div>
      </Address>

      <div>
        <YouTubeVideo>유튜브</YouTubeVideo>
        <Video type="text" placeholder="링크를 복사해주세요" />
      </div>

      <Pictures>
        <div>
          <AddingPhoto>사진 첨부</AddingPhoto>
        </div>
        <AlinePictures>
          <UploadPic>+ Upload</UploadPic>
          <UploadPic>+ Upload</UploadPic>
          <UploadPic>+ Upload</UploadPic>
        </AlinePictures>
      </Pictures>

      <MainSettings>
        <div>
          <MainMenu>메인설정</MainMenu>
        </div>
        <input type="radio" name="setting" checked />
        <label placeholder="링크를 복사해주세요">유튜브</label>
        <MainMenuPicture type="radio" name="setting" />
        <label>사진</label>
      </MainSettings>

      <FinalButtons>
        <ButtonLines>
          <CancelButton>취소하기</CancelButton>
          <ReviseButton>수정하기</ReviseButton>
        </ButtonLines>
      </FinalButtons>
    </Wrapper>
  );
}
