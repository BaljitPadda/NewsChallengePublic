import PropTypes from "prop-types";
import "./css/Title.css";

const date = new Date().toDateString();

const Title = (props) => {
  return (
    <>
      <h1 className="p-3 mb-2 bg-primary-subtle text-emphasis-primary title">
        {props.title}
      </h1>
      <p className="date"> Today's top stories: {date}</p>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  title: "Headlines Page",
};

export default Title;
