import './Card.css';

const Card = ({
  title,
  target,
  sent,
  conversions,
  cost,
  backgroundColor,
  color,
  type,
}) => {
  return (
    <div className='card-container'>
      <div className='card-title-type-target-container'>
        <div className='card-title-type-container'>
          <h3 className='card-title'>{title}</h3>
          <div
            className='card-type-container'
            style={{ background: backgroundColor, color: color }}
          >
            {type}
          </div>
        </div>
        <p className='card-target'>Target: {target}</p>
      </div>
      <div className='card-conversions-sent-container'>
        <h3 className='card-sent-text'>{sent}</h3>
        {conversions && cost && (
          <p className='card-conversions-text'>
            {conversions} . &#8377;{cost}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
