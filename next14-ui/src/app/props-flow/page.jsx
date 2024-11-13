import ComponentA from "../../components/ComponentA";
import ComponentC from "../../components/ComponentC";

export default function PropsFlow() {
  const data = { id: 1, name: "min", message: "Hello World!" };
  return (
    <>
      <h1>Props Flow</h1>
      <ComponentA foo={data} />
      <ComponentC foobar={data} />
    </>
  );
}
