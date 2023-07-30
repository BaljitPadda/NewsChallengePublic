import PropTypes from "prop-types";
import Title from "./Title";
import HeadlineCard from "./HeadlineCard";

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
      <Title />
      {displayData(props.dataArray)}
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
