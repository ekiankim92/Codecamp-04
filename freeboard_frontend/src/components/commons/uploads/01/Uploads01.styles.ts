import styled from "@emotion/styled";

export const Image = styled.img`
  width: 200px;
  height: 200px;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const UploadButton = styled.button`
  width: 180px;
  height: 180px;
  background-color: #eee;
  outline: none;
  border: 1px dashed #808080;
  cursor: grab;
  border-radius: 40px;
  background-image: url("/market_images/image.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
