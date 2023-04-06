import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>OOPS </h1>
      <br />
      <h2>Something Went Wrong</h2>
      <br />
      <h2>{err.status + " :  " + err.statusText}</h2>
    </div>
  );
};
export default ErrorPage;
