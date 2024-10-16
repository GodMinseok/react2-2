export default async function slug(props) {
  console.log(props);
  return (
    <h1>
      Slug {props.params.foo} / {props.searchParams.pid}
    </h1>
  );
}
