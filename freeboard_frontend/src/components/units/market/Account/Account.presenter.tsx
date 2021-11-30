import * as S from "./Account.styles";

export default function AccountPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <h1>Create Account</h1>
        <S.Inner_Wrapper>
          <div>
            First Name:
            <S.First_Name
              type="text"
              placeholder="Enter Your First Name"
              name="name"
              onChange={props.onChangeInput}
            />
          </div>
          <div>{props.inputsError}</div>
          <div>
            Last Name:
            <S.Last_Name
              type="text"
              placeholder="Enter Your Last Name"
              name="name"
              onChange={props.onChangeInput}
            />
          </div>
          <div></div>
          <div>
            Username:{" "}
            <S.UserName type="text" placeholder="Enter Your User Name" />
            <button>Check Availability</button>
          </div>
          <div></div>
          <div>
            Password:
            <S.Password
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={props.onChangeInput}
            />
          </div>
          <div></div>
          <div>
            Confirm Password:
            <S.Password_Confirm
              type="password"
              placeholder="Confirm Your Password"
              name="password"
              onChange={props.onChangeInput}
            />
          </div>
          <div></div>
          <div>
            Email:{" "}
            <S.Email
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={props.onChangeInput}
            />
            <button>Check Availability</button>
          </div>
          <div></div>
        </S.Inner_Wrapper>
        <S.Submit_Button onClick={props.onClickSubmit}>Submit</S.Submit_Button>
      </S.Wrapper>
    </>
  );
}
