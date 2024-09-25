export default function foodId(props) {
  return (
    <h1>
      Foo {props.params.foodId}/ {props.searchParams.country}
    </h1>
  );
}
