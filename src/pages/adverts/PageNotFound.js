import Layout from "../../components/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/Button";
function PageNotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
    const to = location.state?.from || "/";
    navigate(to, { replace: true });
  };

  return (
    <Layout>
      <div>Error 404: This page does not exist any more</div>
      <Button onClick={resetError}> Go back</Button>
    </Layout>
  );
}

export default PageNotFound;
