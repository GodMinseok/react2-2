import ComponentB from "./ComponentB";

export default function ComponentA({ foo }) {
  return (
    <>
      <h1>ComponentA</h1>
      <h2>ComponentA에서-{foo.name}</h2>
      <ComponentB bar={foo} />
    </>
  );
}
