import ComponentC from "./ComponentC";

export default function ComponentB({ bar }) {
  return (
    <>
      <h1>ComponentB</h1>
      <h2>A에서={bar.name}</h2>
      {/* <ComponentC foobar={bar} /> */}
    </>
  );
}
