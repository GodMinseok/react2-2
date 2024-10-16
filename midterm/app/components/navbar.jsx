import Link from "next/link";

export default function navbar() {
  return (
    <>
      <nav>
        {/* 이동하는 링크 */}
        <Link href="/">HOME</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/slug/1030">slug</Link>
      </nav>
    </>
  );
}
