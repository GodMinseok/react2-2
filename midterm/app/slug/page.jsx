export default function Foo(props) {
  console.log(props);
  return (
    <>
      <h1>About page</h1>
      <h1>url: {props.params.url[0]}</h1>
    </>
  );
}
