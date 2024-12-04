export default function ComponentC({ foobar }) {
  return (
    <>
      <h1>ComponentC</h1>
      {/* 객체의 특정 속성만 출력 */}
      <h2>page에서- {foobar.name}</h2>{" "}
      {/* 또는 foobar.message, foobar.id 등 원하는 속성 출력 */}
    </>
  );
}
