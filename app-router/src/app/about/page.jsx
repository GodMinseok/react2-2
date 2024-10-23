// import Image from "next/image";
// import abc from "/images/cat-8579018_1280.jpg";

// export default function About() {
//   return (
//     <>
//       <h1>About page</h1>
//       <Image src={abc} alt="고양이" width={300} height={500} />
//     </>
//   );
// }

import Image from "next/image";
import foo from "/public/images/leaf-6760484_1920.jpg";

export default function About() {
  return (
    <>
      <h1>About page</h1>
      {/* 경로 방식 */}
      <Image
        src="/images/corn-9064747_640.jpg"
        alt="옥수수"
        width={400}
        height={500}
      />
      <Image
        src="/images/corn-9064747_640.jpg"
        alt="옥수수"
        width={400}
        height={500}
        layout="responsive"
      />

      {/* import 방식 */}
      <Image src={foo} alt="단풍" width={400} height={500} />
    </>
  );
}
