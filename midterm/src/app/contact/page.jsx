export default function Foo(props) {
  console.log(props);
  return (
    <>
      <h1>Contact page</h1>
      <h1>url: {props.params.url}</h1>
    </>
  );
}
