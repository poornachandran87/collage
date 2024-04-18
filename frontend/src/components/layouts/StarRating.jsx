import './Star.css'
const StarRating = ({ rating }) => {
    
  
    return (
      <div className="rating-outer">
                        <div className="rating-inner" style={{width: `${rating/ 5 * 100}%` }}></div>
                    </div>
    );
  };
  export default StarRating;