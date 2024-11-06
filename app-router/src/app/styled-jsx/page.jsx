export default function StyledJsx() {
  return (
    <>
      <button className="button">Styled JSX</button>
      <style jsx>{`
        .button {
          padding: 1em;
          border-radius: 15px;
          background: green;
          color: white;
        }
      `}</style>
    </>
  );
}
