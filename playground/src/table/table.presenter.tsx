import { Wrapper, TableLists, BulletPoints } from "./table.styles";
import styled from "@emotion/styled";

const Carrier = styled.div`
  display: list-item;
  list-style-position: outside;
  /* list-style-type: decimal; */
  /* margin-left: 20px; */
  margin: -10px 0px 4px 40px;
`;

const Maximum = styled.div`
  display: list-item;
  list-style-position: outside;
  /* list-style-type: decimal; */
  /* margin-left: 20px; */
  margin: 0px 0px 4px 40px;
`;

const InputTest = styled.input`
  width: 260px;
  height: 60px;
  padding: 10px;
  ::placeholder {
    opacity: 0.6;
    padding: 10px;
  }
  :focus-within {
    color: lightcoral;
  }
  border-color: white;
  :focus {
    outline: 1px solid red;
  }
`;

const SecondInputTest = styled.input`
  width: 260px;
  height: 60px;
  :focus {
    outline: 2px solid green;
  }
  :focus-within {
    color: blue;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
`;

const ThreePiecesWrapper = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CabinBagWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const ThreePieces = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 48px;
  background-color: #eee;
  color: blue;
  border-radius: 20px;
`;

const OneFreeLuggage = styled.div`
  display: list-item;
  list-style-position: outside;
  margin: 20px 0px 4px 40px;
  /* opacity: 0.5; */
  color: gray;
  font-size: 15px;
`;

const LuggageExceed = styled.div`
  display: list-item;
  list-style-position: outside;
  margin: 0px 0px 4px 40px;
  /* opacity: 0.5; */
  color: gray;
  font-size: 15px;
`;

export default function TableUI() {
  return (
    <Wrapper>
      <div>
        <IntroWrapper>
          <CabinBagWrapper>
            <h2>Cabin Bag</h2>
            <Carrier>20 in. carrier</Carrier>
            <Maximum>Max 115cm/45in, Max 8kg/17lb</Maximum>
          </CabinBagWrapper>
          <ThreePiecesWrapper>
            <ThreePieces>Free 3 pieces</ThreePieces>
          </ThreePiecesWrapper>
        </IntroWrapper>
        <OneFreeLuggage>Up to one free luggage per passenger.</OneFreeLuggage>
        <LuggageExceed>
          if the number of luggage you have exceed the free allowance, please
          add it as regular luggages.
        </LuggageExceed>
      </div>
      <div>
        ====================================================================
      </div>
      <div>Add Luggage</div>
      <table>
        <tr>
          <td>Cabin Bag</td>
          <li>20 in. carrier</li>
          <TableLists>Max 115cm/45in, Max 8kg/17lb</TableLists>
        </tr>
      </table>
      <div>
        ====================================================================
      </div>
      <div>
        <BulletPoints>Add Luggage</BulletPoints>
        <BulletPoints>Cabin Bag</BulletPoints>
        <BulletPoints>Hello World</BulletPoints>
        <InputTest type="text" placeholder="testing for placehoder" />
        <SecondInputTest type="text" placeholder="second test" />
      </div>
      <div>
        ====================================================================
      </div>
    </Wrapper>
  );
}
