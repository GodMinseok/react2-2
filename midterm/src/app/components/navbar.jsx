import Link from "next/link";

export default function Navbar() {
  // 함수 이름을 PascalCase로 변경
  return (
    <>
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/slug/1030">Slug</Link>
      </nav>
    </>
  );
}
