import Image from "next/image";
import abc from "/images/cat-8579018_1280.jpg";

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <Image src={abc} alt="고양이" width={300} height={500} />
    </>
  );
}
