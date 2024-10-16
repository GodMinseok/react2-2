export default async function slug(props) {
  console.log(props);
  return (
    <h1>
      Foo {props.params.foo} / {props.searchParams.pid}
    </h1>
  );
}
