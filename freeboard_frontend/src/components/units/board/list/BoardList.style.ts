import styled from "@emotion/styled";
import { SmileOutlined } from "@ant-design/icons";
import { IPropsSearchBar } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 70%;
  margin: 120px auto 50px auto;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;

export const InnerWrapper = styled.div``;

export const BestWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px;
`;

export const BestRowWrapper = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border: 1px solid #d3d3d3; ;
`;

export const BestIconDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  margin-left: 6px;
  opacity: 0.6;
`;

export const SmileyFace = styled(SmileOutlined)`
  font-size: 16px;
  color: blue;
`;

export const SmilyFaceCount = styled.span`
  margin: 6px;
`;

export const BestDate = styled.div`
  font-size: 14px;
  opacity: 0.5;
  margin-right: 6px;
`;

export const ImageWrapper = styled.div`
  border-bottom: 1px solid #d3d3d3;
`;

export const Image = styled.img`
  width: 230px;
  height: 200px;
  object-fit: fill;
  :hover {
    cursor: pointer;
    width: 220px;
  }
`;

export const BestTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BestWriter = styled.div`
  font-size: 14px;
  opacity: 0.6;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  margin: 4px;
  justify-content: space-around;
  border-bottom: 1px solid #d3d3d3;
`;

export const IndexNumber = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const BoardsTitle = styled.div`
  width: 1000px;
  text-align: center;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    font-size: 18px;
  }
`;

export const BoardsWriter = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const BoardsDate = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const PaginationWrapper = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const EditPen = styled.img`
  margin: 2px;
`;

export const CreateBoardButton = styled.button`
  height: 48px;
  border-radius: 3px;
  color: white;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

export const SearchBar = styled.span`
  color: ${(props: IPropsSearchBar) => (props.isMatched ? "red" : "black")};
`;
