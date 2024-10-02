export default function Foo(props) {
  console.log(props);
  return (
    <>
      <h1>Blog page</h1>
      <h1>blog[0]: {props.params.blog[0]}</h1>
      {/* <h1>blog[1]: {props.params.blog[1]}</h1>
        <h1>blog[2]: {props.params.blog[2]}</h1>
        <h1>id: {props.searchParams.id}</h1> */}
      <h1>name: {props.searchParams.name}</h1>
    </>
  );
}
