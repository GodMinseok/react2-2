import { useRouter } from "next/router";

export default function Home(props) {
  console.log(props);
  return (
    <>
      {/* 이름, 학번, 파일 경로 출력 */}
      <h1>name: {props.searchParams.name}</h1>
      <h1>number: {props.searchParams.number}</h1>
      <h1>url: {props.searchParams.url}</h1>
    </>
  );
}
