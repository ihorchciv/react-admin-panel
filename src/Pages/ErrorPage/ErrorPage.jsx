import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <div className="container error">
      <h1>This page doesn't exist</h1>
      <a href="/users">Back</a>
    </div>
  );
}
