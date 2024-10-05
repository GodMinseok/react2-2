import Link from "next/link";

export default function NewBar() {
  return (
    <>
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/about">About</Link>
        <Link href="/foo">Foo</Link>
        <Link href="/foo/1030">FooID</Link>
      </nav>
    </>
  );
}
