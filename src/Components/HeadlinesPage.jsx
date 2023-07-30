import PropTypes from "prop-types";
import Title from "./Title";
import HeadlineCard from "./HeadlineCard";
import "./css/HeadlinesPage.css";

const displayData = (headlines) => {
  return headlines.map((headline) => {
    return (
      <HeadlineCard
        headline={headline.fields.headline}
        imageText={headline.fields.thumbnail}
        key={headline.id}
      />
    );
  });
};

const HeadlinesPage = (props) => {
  return (
    <>
      <div className="headlinesPage">
        <Title />
        {displayData(props.dataArray)}
      </div>
    </>
  );
};

HeadlinesPage.propTypes = {
  dataArray: PropTypes.array,
};

HeadlinesPage.defaultProps = {
  dataArray: [],
};

export default HeadlinesPage;
