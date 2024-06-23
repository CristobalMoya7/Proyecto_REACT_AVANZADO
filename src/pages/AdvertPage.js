import { useParams, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { getUniqueAdvert, deleteAd } from "./service";
import Advert from "../components/Advert";
import { useSelector } from "react-redux";
import { getAd } from "../store/selectors";

export function AdvertPage() {
  const { advertId } = useParams();
  debugger;
  const advert = useSelector(getAd(advertId));
  debugger;
  console.log(advert);
  debugger;
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [confirmToDelete, setConfirmToDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  //const [advert, setAdvert] = useState(null);

  const resetError = () => {
    setError(null);
    navigate("/v1/adverts");
    const to = location.state?.fvrom || "/";
    navigate(to, { replace: true });
  };

  // useEffect(() => {
  //   async function fetchAdvert() {
  //     try {
  //       const fetchedAdvert = await getUniqueAdvert(params.advertId);
  //       setAdvert(fetchedAdvert);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   }
  //   fetchAdvert();
  // }, [params.advertId]);

  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      await deleteAd(advert.id);
      navigate("/v1/adverts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteCancel = () => {
    setConfirmToDelete(false);
  };

  const handleDeleteRequest = () => {
    setConfirmToDelete(true);
  };

  return (
    <Layout title="Advert detail">
      {advert && (
        <>
          <Advert
            id={advert.id}
            photo={advert.photo}
            name={advert.name}
            price={advert.price}
            tags={advert.tags}
          />
          {!confirmToDelete && !error && (
            <Button onClick={handleDeleteRequest} disabled={isDeleting}>
              Delete Advert
            </Button>
          )}
        </>
      )}
      {error && <div className="Advert-delete-error">{`${error}`}</div>}
      <Button onClick={resetError}>Click here to go back</Button>
      {confirmToDelete && (
        <div className="Advert-confirm-to-delete">
          <p>Do you confirm to delete this ad?</p>
          <div>
            <Button onClick={handleDeleteConfirm} disabled={isDeleting}>
              Confirm
            </Button>
            <Button onClick={handleDeleteCancel} disabled={isDeleting}>
              Cancel
            </Button>
          </div>
        </div>
      )}
      {isDeleting && <div>Deleting Advert...</div>}
    </Layout>
  );
}

export default AdvertPage;
