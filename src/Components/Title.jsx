import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <>
      <h1 className="p-3 mb-2 bg-primary-subtle text-emphasis-primary title">
        {props.title}
      </h1>
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
