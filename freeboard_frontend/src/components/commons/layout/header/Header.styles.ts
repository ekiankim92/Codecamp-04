import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ivory;
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid lightgray;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-style: oblique;
  width: 330px;
  /* height: 130px; */
  /* background-color: crimson; */
`;

export const Logo_Img = styled.img`
  margin-left: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const Header_RoutingPage = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const UsedMarket = styled.div`
  margin-right: 20px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const FreeBoard = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const MyPage = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const Header_Anchor = styled.a`
  font-size: 25px;
  padding: 15px;
  font-weight: bold;
`;

export const Create_Account = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const Sign_In = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

// export const Wrapper = styled.div`
//   width: 1200px;
//   height: 800px;
//   display: flex;
//   justify-content: space-around;
//   border-radius: 16px;
//   background-color: #eeee;
// `;

// export const Log_In_Info = styled.div`
//   width: 600px;
//   height: 800px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const Email_Log = styled.input`
//   width: 384px;
//   height: 64px;
//   margin-top: 70px;
// `;

// export const Password_Log = styled.input`
//   width: 384px;
//   height: 64px;
//   margin-top: 30px;
// `;

// export const Sign_Log = styled.button`
//   width: 300px;
//   height: 64px;
//   margin-top: 30px;
//   :hover {
//     cursor: pointer;
//     background-color: lightgray;
//   }
// `;

// export const Register_Log = styled.button`
//   width: 300px;
//   height: 64px;
//   margin-top: 30px;
//   :hover {
//     cursor: pointer;
//     background-color: lightgray;
//   }
// `;

// export const Log_In_Picture = styled.div`
//   width: 600px;
//   height: 800px;
//   background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIt3Ov961p3AmrxLYJy61L6pa-PWT94eRzg&usqp=CAU");
//   background-repeat: round;
//   background-size: 100%;
//   background-position: 100%;
//   opacity: 0.5;
//   border-radius: 10px;
// `;

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

// export const Login_Logo = styled.div`
//   margin-top: 150px;
// `;
