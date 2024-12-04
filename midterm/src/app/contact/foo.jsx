export default function Foo(props) {
  console.log(props);
  return (
    <>
      <h1>url: {props.params.url}</h1>
    </>
  );
}
