export default function StyledJsx() {
  return (
    <>
      <button className="button">Styled JSX</button>
      <span>Span Tag</span>
      <style jsx global>{`
        .button {
          padding: 1em;
          border-radius: 15px;
          background: green;
          color: white;
        }
        span {
          background: blue;
          color: white;
        }
      `}</style>
    </>
  );
}
