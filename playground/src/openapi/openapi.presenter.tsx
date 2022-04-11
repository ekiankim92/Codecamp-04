import { DogImg, Wrapper, Title } from "./openapi.styles";

export default function OpenapiListUI(props) {
  return (
    <>
      <Wrapper>
        <Title>Sponsor a dog!</Title>
        <div>Image Testing</div>
        <div>
          {props.imgUrls.map((el: any, index: number) => (
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
