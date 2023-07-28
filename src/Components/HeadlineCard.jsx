import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const HeadlineCard = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ width: "40rem" }}>
        <img
          src={props.imageText}
          alt={props.headline}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-text"> {props.headline} </h3>
        </div>
      </div>
    </>
  );
};

HeadlineCard.propTypes = {
  headline: PropTypes.string.isRequired,
  imageText: PropTypes.string.isRequired,
};

HeadlineCard.defaultProps = {
  headline: "Article Headline (default)",
  imageText: "A relevant picture",
};

export default HeadlineCard;
