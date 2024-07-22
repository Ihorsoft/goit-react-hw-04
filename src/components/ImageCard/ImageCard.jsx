import css from "./ImageCard.module.css";

const ImageCard = ({ data, onImgClick }) => {
  return (
    <div
      className={css.card}
      onClick={() => onImgClick(data.urls.regular, data.alt_description)}
    >
      <img
        className={css.img}
        src={data.urls.small}
        alt={data.altDescription}
      />
    </div>
  );
};
export default ImageCard;
