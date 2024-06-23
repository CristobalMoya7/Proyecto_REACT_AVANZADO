import FormField from "../components/FormField";
import { useEffect, useState } from "react";
import { newAd, tagsAdvert } from "./service";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import CheckBox from "../components/CheckBox";
import SelectList from "../components/SelectList";
import FileUploadImage from "../components/FileUpload";
import { useDispatch } from "react-redux";
import { adsCreated } from "../store/actions";
import { getAd } from "../store/selectors";

export default function NewAdvertPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    sale: true,
    price: 0,
    tags: [],
    photo: null,
  });

  const [checkBoxValue, setChekBoxValue] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const [avaliableTags, setAvaliableTags] = useState([]);
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();
  const { name, price, tags } = formValues;
  const buttonDisabled = !name || price <= 0 || tags.length === 0;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckBoxChange = () => {
    setChekBoxValue((previousState) => !previousState);
    setFormValues((currentValues) => ({
      ...currentValues,
      sale: !currentValues.sale,
    }));
  };

  const handleSelectTagChange = (event, item) => {
    if (event.target.checked) {
      setSelectedTags((prevTags) => [...prevTags, item]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== item));
    }
  };

  const handleFileUpload = (photo) => {
    setPhoto(photo);
  };

  useEffect(() => {
    tagsAdvert().then((tags) => {
      setAvaliableTags(tags);
    });
  }, []);

  useEffect(() => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      tags: selectedTags,
      photo: photo,
    }));
  }, [selectedTags, photo]);

  useEffect(() => {
    const getTagsFromApi = async () => {
      try {
        const response = await tagsAdvert();
        setAvaliableTags(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTagsFromApi();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const adCreated = await newAd(formValues);
      console.log(adCreated);
      dispatch(adsCreated(adCreated));
      console.log(adsCreated(adCreated));
      console.log("prenavigate");
      navigate(`/v1/adverts/${adCreated.id}`);
      console.log("postnavigate");
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nombre"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        ></FormField>
        <CheckBox
          label="En venta"
          type="checkbox"
          name="sale"
          checked={checkBoxValue}
          onChange={handleCheckBoxChange}
        ></CheckBox>
        <FormField
          label="Precio"
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
        ></FormField>
        <SelectList
          label="Familias de producto"
          type="text"
          name="tags"
          optionsArray={avaliableTags}
          value={selectedTags}
          multiple
          onChange={handleSelectTagChange}
        ></SelectList>
        <FileUploadImage onChange={handleFileUpload} />

        <Button type="submit" disabled={buttonDisabled}>
          Submit
        </Button>
      </form>
    </Layout>
  );
}
