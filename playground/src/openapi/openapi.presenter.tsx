import { DogImg, Wrapper, Title } from "./openapi.styles";

export default function OpenapiListUI(props) {
  return (
    <>
      <Wrapper>
        <Title>Sponsor a dog!</Title>
        <div>
          {props.imgUrls.map((el, index) => (
            <>
              <DogImg key={el} src={el} />
              {(index + 1) % 3 === 0 && <br />}
            </>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
