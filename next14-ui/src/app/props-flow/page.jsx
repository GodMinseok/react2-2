import ComponentA from "../../components/ComponentA";
import ComponentC from "../../components/ComponentC";

export default function PropsFlow() {
  const data = { id: 1, name: "min", message: "Hello World!" };

  // user prop을 전달
  return (
    <>
      <h1>Props Flow</h1>
      <ComponentA user={data} />
      <ComponentC foobar={data} />
    </>
  );
}
