import PropTypes from "prop-types";

export const PropTypeCard = PropTypes.shape({
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  durationWeeks: PropTypes.number.isRequired,
  guides: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  imageCover: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      day: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  maxGroupSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

  ratingsAverage: PropTypes.number.isRequired,
  ratingsQuantity: PropTypes.number.isRequired,
  secretTour: PropTypes.bool.isRequired,
  startDates: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  startLocation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  summary: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
}).isRequired;

// review: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       review: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       userRating: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         photo: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired
//   ).isRequired,
