import "./ErrorPage.css";

export function ErrorPage() {
  const title = "This page doesn't exist";
  const back = "Back";
  return (
    <div className="container error">
      <h1>{title}</h1>
      <a href="/users">{back}</a>
    </div>
  );
}
