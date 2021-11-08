import {Wrapper, MyDiv, Header, Header_Info, 
    Header_Image, Header_Date, Navigation, List, 
    Title, Image_Section, Content_Section, Video_Section,
    Icon_Footer} from './BoardDetail.styles'

export default function BoardDetailUI (props) {

return (

<>
        <Wrapper>
            <Header>
                    <Header_Info>
                        <Header_Image src="/images/user.png"/>
                        <Header_Info>작성자: {props.data?.fetchBoard.writer}</Header_Info>
                        <Header_Date>Date</Header_Date>
                    </Header_Info>
                    <Navigation>
                        <List href="#title">Title</List>
                        {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
                        <List href="#content">Content</List>
                        {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
                        <List href="#image">Image</List>
                        {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
                        <List href="#video">Video</List>
                        {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
                        <List href="#footer">Footer</List>
                        {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
                    </Navigation>
                    
            </Header>
            <Title>
            <MyDiv id="title">제목: {props.data?.fetchBoard.title}</MyDiv>
            </Title>
            <Image_Section>
                <img id="image" src='https://content.codecademy.com/courses/freelance-1/unit-2/explorer.jpeg'></img>
            </Image_Section>

            <Content_Section>
            <div id="content">내용: {props.data?.fetchBoard.contents}</div>
            </Content_Section>

            <Video_Section>
                <video id="video" src="/media/cc0-videos/flower.mp4" controls></video>
            </Video_Section>

            <Icon_Footer id="footer">
                <img src="/images/email.png"></img>
                <img src="/images/phone.png"></img>
            </Icon_Footer>
        </Wrapper>
    </>
)

}