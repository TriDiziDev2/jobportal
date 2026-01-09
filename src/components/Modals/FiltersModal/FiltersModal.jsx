import './FiltersModal.css';

import { RiResetLeftFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';

const categoryData = [
  {
    id: 1,
    title: 'All',
    number: '(12)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Technology',
    number: '(4)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Management',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Sales',
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
    title: 'Design',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 7,
    title: 'Hospitality',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 8,
    title: 'Customer Service',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 9,
    title: 'Finance',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 10,
    title: 'Human Resources',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const locationData = [
  {
    id: 1,
    title: 'All',
    number: '(12)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'New York, NY',
    number: '(2)',
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
    title: 'Boston, MA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 5,
    title: 'Austin, TX',
    number: '(2)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 6,
    title: 'Chicago, IL',
    number: '(3)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 7,
    title: 'Seattle, WA',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 8,
    title: 'Remote',
    number: '(2)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const jobTypeData = [
  {
    id: 1,
    title: 'All',
    number: '(12)',
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
  },
  {
    id: 2,
    title: 'Active',
    number: '(9)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 3,
    title: 'Closed',
    number: '(1)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
  {
    id: 4,
    title: 'Pending',
    number: '(2)',
    backgroundColor: '#1a1a1a',
    color: '#f6f6f6',
    borderColor: '#6f6f6f',
  },
];

const FiltersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='filters-modal-overlay'>
      <div className='filters-modal-overlay-background'>
        <div className='filters-modal-overlay-container'>
          <div className='filters-modal-header-container'>
            <div className='filters-modal-header-reset-btn-container'>
              <h3 className='filters-modal-heading'>Filters</h3>
              <button className='filters-modal-reset-btn'>
                <RiResetLeftFill /> Reset All
              </button>
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
            <div className='filters-modal-data-container'>
              <h3 className='filters-modal-data-heading'>Job Type</h3>
              <div className='filters-modal-data-search-container'>
                <IoSearch />
                <input
                  type='text'
                  placeholder=''
                  className='filters-modal-input'
                />
              </div>
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

export default FiltersModal;
