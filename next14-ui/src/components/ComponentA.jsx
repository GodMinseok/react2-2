import ComponentB from "./ComponentB";

export default function ComponentA({ user }) {
  return (
    <>
      <h1>ComponentA</h1>
      <h2>props-flow에서-{user.id}</h2>
      <ComponentB user={user} />
    </>
  );
}
