const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

// 함수형 
function aaa(Component){

  // return function bbb(){
        // 로그인 검증 로직
  //   return '결과물'
  // }
}


// 화살표 함수형 
const withAuth = (Component) => (props) =>{

      // 로그인 검증 로직 

    return <Component {...props}/>

}

// 로직이 아무것도 없으면 중괄호 리턴를 생략할수있음 
const asdf () =>  123 