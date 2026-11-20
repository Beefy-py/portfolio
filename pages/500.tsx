import ErrorPage from "../components/errorPage.component";

export default function Custom500() {
  return (
    <ErrorPage
      code="500"
      title="Something went wrong"
      message="Something broke on my end. Try again in a moment, or head back to the homepage."
    />
  );
}
