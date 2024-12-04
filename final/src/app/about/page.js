import Navbar from "../component/navbar";

export default function About() {
  return (
    <>
      <Navbar>
        <h1>이름</h1> <Name>서민석</Name>
        <h1>학번</h1>
        <No>201930112</No>
        <h1>파일 경로</h1>
        <Path>src/app</Path>
      </Navbar>
    </>
  );
}

// export default function Foo(props) {
//     console.log(props);
//     return (
//       <>
//         <h1>About page</h1>
//         <h1>url: {props.params.url[0]}</h1>
//       </>
//     );
//   }
