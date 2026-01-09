import { RxCross2 } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';

const locationData = [
  {
    id: 1,
    title: 'All Locations',
    number: '(8)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'New York, NY',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'San Francisco, CA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Los Angeles, CA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 5,
    title: 'Boston, MA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 6,
    title: 'Chicago, IL',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 7,
    title: 'Austin, TX',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 8,
    title: 'Remote',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 9,
    title: 'Seattle, WA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const industryData = [
  {
    id: 1,
    title: 'All Industries',
    number: '(8)',
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
    title: 'Design',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Data & Analytics',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 5,
    title: 'Marketing',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 6,
    title: 'Media & Publishing',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 7,
    title: 'Healthcare',
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
    number: '(8)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Active',
    number: '(7)',
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
    title: 'Inactive',
    number: '(0)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const paymentData = [
  {
    id: 1,
    title: 'All Sizes',
    number: '(8)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Large',
    number: '(3)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Medium',
    number: '(4)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Small',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const CompanyFiltersModal = ({ isOpen, onClose }) => {
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
              <h3 className='filters-modal-data-heading'>Industry</h3>
              <div className='filters-modal-data-search-container'>
                <IoSearch />
                <input
                  type='text'
                  placeholder='Search industry...'
                  className='filters-modal-input'
                />
              </div>
              <div className='filters-modal-data-grid-container'>
                {industryData.map((item) => {
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
              <h3 className='filters-modal-data-heading'>Company Size</h3>
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

export default CompanyFiltersModal;
