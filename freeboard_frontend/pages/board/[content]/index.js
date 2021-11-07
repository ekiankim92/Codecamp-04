import { useRouter } from 'next/router'
import { useQuery, gql} from '@apollo/client'
import {Wrapper, MyDiv, Header, Header_Info, 
    Header_Image, Header_Date, Navigation, List, 
    Title, Image_Section, Content_Section, Video_Section,
    Icon_Footer} from '../../../styles/board_content'


const FETCH_BOARD = gql`
    query fetchBoard ($boardId: ID!){
        fetchBoard (boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function PortfolioContent(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.content
        }
    })

    function changeBackground(event) {
        event.target.style.background = "red";
    }

    function changeMouseLeave (event){
        event.target.style.background= "";
    }

    console.log(data)

    return (
        <>
        <Wrapper>
            <Header>
                    <Header_Info>
                        <Header_Image src="/images/user.png"/>
                        <Header_Info>작성자: {data?.fetchBoard.writer}</Header_Info>
                        <Header_Date>2021.11.05</Header_Date>
                    </Header_Info>
                    <Navigation>
                        <List href="#title" onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave}>Title</List>
                        <List href="#content" onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave}>Content</List>
                        <List href="#image" onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave}>Image</List>
                        <List href="#video" onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave}>Video</List>
                        <List href="#footer" onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave}>Footer</List>
                    </Navigation>
            </Header>
            <Title>
            <MyDiv id="title">제목: {data?.fetchBoard.title}</MyDiv>
            </Title>
            <Image_Section>
                <img id="image" src='https://content.codecademy.com/courses/freelance-1/unit-2/explorer.jpeg'></img>
            </Image_Section>

            <Content_Section>
            <div id="content">내용: {data?.fetchBoard.contents}</div>
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