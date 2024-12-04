export default function slug(props) {
  console.log(props);
  return (
    <>
      <h1>Slug page</h1>
      <h1>url: {props.params.url}</h1>
    </>
  );
}
