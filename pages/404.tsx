import ErrorPage from "../components/errorPage.component";

export default function Custom404() {
  return (
    <ErrorPage
      code="404"
      title="Page not found"
      message="Sorry, I can't find that page. There's plenty more to explore on the homepage."
    />
  );
}
