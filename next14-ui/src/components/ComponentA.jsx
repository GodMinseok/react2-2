import ComponentB from "./ComponentB"; // ComponentB를 import 추가

export default function ComponentA({ user }) {
  return (
    <>
      <h1>ComponentA</h1>
      <h2>props-flow에서-{user.id}</h2>
      <ComponentB bar={user} /> {/* user를 bar로 전달 */}
    </>
  );
}
