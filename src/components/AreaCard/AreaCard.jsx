import './AreaCard.css';

const areasData = [
  {
    id: 1,
    title: 'Quick Recruit',
    transactions: '234 transactions',
    cost: '1200K',
    percentage: '+45%',
    backgroundColor: '#ffc300',
  },
  {
    id: 2,
    title: 'Tutor Bookings',
    transactions: '890 transactions',
    cost: '445K',
    percentage: '+38%',
    backgroundColor: '#023047',
  },
  {
    id: 3,
    title: 'Course Sales',
    transactions: '189 transactions',
    cost: '378K',
    percentage: '+31%',
    backgroundColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Subscriptions',
    transactions: '657 transactions',
    cost: '2214K',
    percentage: '+22%',
    backgroundColor: '#8b5cf6',
  },
];

const AreaCard = () => {
  return (
    <div className='area-card-container'>
      <div className='area-card-header'>
        <h3 className='area-card-heading'>Top Performing Areas</h3>
        <p className='area-card-text'>Highest revenue generators</p>
      </div>
      <div className='area-card-data-container'>
        {areasData.map((item) => {
          return (
            <div className='area-card-item-container' key={item.id}>
              <div className='area-card-item-header'>
                <div
                  className='area-card-item-color'
                  style={{ background: item.backgroundColor }}
                ></div>
                <div className='area-card-header-content'>
                  <h3 className='area-card-item-title'>{item.title}</h3>
                  <p className='area-card-item-transaction'>
                    {item.transactions}
                  </p>
                </div>
              </div>
              <div className='area-card-item-footer'>
                <h3 className='area-card-item-cost'>&#8377;{item.cost}</h3>
                <p className='area-card-item-percentage'>{item.percentage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaCard;
