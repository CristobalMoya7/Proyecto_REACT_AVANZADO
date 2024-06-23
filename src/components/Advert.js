import "./Advert.css";
import { useEffect, useState } from "react";
import ImagenNoAvaliable from "../assets/imagenNoAvaliable.png";

const Advert = ({ id, name, price, sale, tags, photo }) => {
  const formattedPrice = price.toFixed(2) + "€";
  const backupFoto = ImagenNoAvaliable;
  const [imageToShow, setImagetoShow] = useState(photo || backupFoto);

  return (
    <ul className="advert-item" key={id}>
      <div className="advert-details">
        <p className="advert-name">{name}</p>
        <p className="advert-photo">
          <img src={imageToShow} alt="Advert" />
        </p>
        <p className="advert-state">Estado: {sale ? "En venta" : "Compra"}</p>
        <p className="advert-price">Precio: {formattedPrice}</p>
        <p className="advert-tags">
          Categorías:{" "}
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </ul>
  );
};

export default Advert;
