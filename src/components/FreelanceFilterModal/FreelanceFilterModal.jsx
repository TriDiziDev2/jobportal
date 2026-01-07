import { RxCross2 } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';

const locationData = [
  {
    id: 1,
    title: 'All Locations',
    number: '(10)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Remote',
    number: '(10)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const categoryData = [
  {
    id: 1,
    title: 'All',
    number: '(10)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Technology',
    number: '(3)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Writing',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Design',
    number: '(2)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 5,
    title: 'Marketing',
    number: '(2)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 6,
    title: 'Video Production',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 7,
    title: 'Administrative',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const jobTypeData = [
  {
    id: 1,
    title: 'All Status',
    number: '(10)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Active',
    number: '(8)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Pending',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Closed',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const paymentData = [
  {
    id: 1,
    title: 'All Types',
    number: '(10)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Fixed',
    number: '(5)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Hourly',
    number: '(5)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const FreelanceFilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='internship-filters-modal-overlay'>
      <div className='internship-filters-modal-overlay-background'>
        <div className='internship-filters-modal-overlay-container'>
          <div className='filters-modal-header-container'>
            <div className='filters-modal-header-reset-btn-container'>
              <h3 className='filters-modal-heading'>Filters</h3>
            </div>
            <div className='filters-modal-cross-icon-container'>
              <RxCross2
                className='filters-modal-cross-icon'
                onClick={onClose}
              />
            </div>
          </div>
          <div className='filters-modal-main-container'>
            <div className='filters-modal-data-container'>
              <h3 className='filters-modal-status-heading'>Status</h3>
              <div className='filters-modal-data-grid-container'>
                {jobTypeData.map((item) => {
                  const {
                    id,
                    title,
                    number,
                    backgroundColor,
                    color,
                    borderColor,
                  } = item;
                  return (
                    <div
                      className='filters-modal-data-item-container'
                      key={id}
                      style={{
                        background: backgroundColor,
                        border: `1px solid ${borderColor}`,
                        color: color,
                      }}
                    >
                      <p className='filters-modal-title'>{title}</p>
                      <p className='filters-modal-number'>{number}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='filters-modal-data-container'>
              <h3 className='filters-modal-data-heading'>Category</h3>
              <div className='filters-modal-data-search-container'>
                <IoSearch />
                <input
                  type='text'
                  placeholder='Search Category...'
                  className='filters-modal-input'
                />
              </div>
              <div className='filters-modal-data-grid-container'>
                {categoryData.map((item) => {
                  const {
                    id,
                    title,
                    number,
                    backgroundColor,
                    color,
                    borderColor,
                  } = item;
                  return (
                    <div
                      className='filters-modal-data-item-container'
                      key={id}
                      style={{
                        background: backgroundColor,
                        border: `1px solid ${borderColor}`,
                        color: color,
                      }}
                    >
                      <p className='filters-modal-title'>{title}</p>
                      <p className='filters-modal-number'>{number}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='filters-modal-data-container'>
              <h3 className='filters-modal-data-heading'>Payment Type</h3>
              <div className='filters-modal-data-grid-container'>
                {paymentData.map((item) => {
                  const {
                    id,
                    title,
                    number,
                    backgroundColor,
                    color,
                    borderColor,
                  } = item;
                  return (
                    <div
                      className='filters-modal-data-item-container'
                      key={id}
                      style={{
                        background: backgroundColor,
                        border: `1px solid ${borderColor}`,
                        color: color,
                      }}
                    >
                      <p className='filters-modal-title'>{title}</p>
                      <p className='filters-modal-number'>{number}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='filters-modal-data-container'>
              <h3 className='filters-modal-data-heading'>Location</h3>
              <div className='filters-modal-data-search-container'>
                <IoSearch />
                <input
                  type='text'
                  placeholder='Search Location...'
                  className='filters-modal-input'
                />
              </div>
              <div className='filters-modal-data-grid-container'>
                {locationData.map((item) => {
                  const {
                    id,
                    title,
                    number,
                    backgroundColor,
                    color,
                    borderColor,
                  } = item;
                  return (
                    <div
                      className='filters-modal-data-item-container'
                      key={id}
                      style={{
                        background: backgroundColor,
                        border: `1px solid ${borderColor}`,
                        color: color,
                      }}
                    >
                      <p className='filters-modal-title'>{title}</p>
                      <p className='filters-modal-number'>{number}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='filters-modal-footer-container'>
            <div className='filters-modal-btn-container'>
              <button className='filters-modal-cancel-btn' onClick={onClose}>
                Cancel
              </button>
              <button className='filters-modal-apply-filter-btn'>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceFilterModal;
