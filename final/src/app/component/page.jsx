import App from "next/app";
import About from "../about/page";
import Contact from "../contact/page";

export default function NavBar() {
  return (
    <>
      <h1>이름</h1>
      <About></About>
      <h1>학번</h1>
      <App></App>
      <h1>파일 경로</h1>
      <Contact></Contact>
    </>
  );
}
