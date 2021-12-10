import propTypes from "prop-types";

export const DataElementType = propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    fat: propTypes.number.isRequired,
    calories: propTypes.number.isRequired,
    image_mobile: propTypes.string.isRequired
}));