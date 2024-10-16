import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>name: {props.searchParams.name}</h1>
      <h1>number: {props.searchParams.number}</h1>
      <h1>url: {props.searchParams.url}</h1>
    </>
  );
}
