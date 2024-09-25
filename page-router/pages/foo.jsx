export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/reps/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({ repo }) {
  return <>{repo.owner.events.url}</>;
}
