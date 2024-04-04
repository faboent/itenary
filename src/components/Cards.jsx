
import PropTypes from 'prop-types'; // Import PropTypes
import './Card.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link

const Card = ({ buttonText, buttonBackgroundColor, buttonTextColor, paragraphText, paragraphsText, backgroundColor, paragraphTextColor, linkTo }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <p style={{ color: paragraphTextColor }}>{paragraphText}</p>
      <p style={{ color: paragraphTextColor }}>{paragraphsText}</p>
      <Link to={linkTo}>
        <button style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}>{buttonText}</button>
      </Link>
    </div>
  );
};

// Add propTypes validation
Card.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  paragraphsText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string, // Prop type for background color
  paragraphTextColor: PropTypes.string, // Prop type for paragraph text color
  linkTo: PropTypes.string.isRequired, // Prop type for link destination
  
};

// Default props
Card.defaultProps = {
  backgroundColor: '#ffffff', // Default background color
  paragraphTextColor: '#000000', // Default paragraph text color
};

export default Card;
