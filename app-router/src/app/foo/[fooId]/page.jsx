export default async function foodId(props) {
  console.log(props);
  return (
    <h1>
      Foo {props.params.foodId} / {props.searchParams.country}
    </h1>
  );
}

// http://localhost:3000/foo/123?country=SouthKorea
