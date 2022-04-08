import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 700px;
  height: 600px;
  margin: 100px auto;
  border: 1px solid #000;
`;

export const TableLists = styled.li`
  color: blue;
  li:before {
    content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: red; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`;

export const BulletPoints = styled.div`
  display: list-item;
  list-style-type: decimal;
  list-style-position: outside;
  margin-left: 20px;
`;
