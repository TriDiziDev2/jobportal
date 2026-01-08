import './CompanyModal.css';

const CompanyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='internship-modal-overlay'>
      <div className='company-modal-overlay-background' onClick={onClose}>
        <div className='company-modal-overlay-container'>
          <div className='internship-modal-header-container'>
            <h3 className='company-modal-heading'>Add New Company</h3>
          </div>
          <form className='internship-modal-form-container'>
            <div
              className='internship-modal-label-container
            '
            >
              <label className='internship-modal-label'>Company Name</label>
              <input
                type='text'
                placeholder='e.g. Tech Corp'
                className='internship-modal-input'
              />
            </div>
            <div className='new-job-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Industry</label>
                <input
                  type='text'
                  placeholder=''
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Company Size</label>
                <input
                  type='text'
                  placeholder=''
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div
              className='internship-modal-label-container
            '
            >
              <label className='internship-modal-label'>Location</label>
              <input
                type='text'
                placeholder='City, State'
                className='internship-modal-input'
              />
            </div>
            <div className='new-job-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Email</label>
                <input
                  type='text'
                  placeholder='hr@company.com'
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Phone</label>
                <input
                  type='text'
                  placeholder='+1 234 567 8900'
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div
              className='internship-modal-label-container
            '
            >
              <label className='internship-modal-label'>Website</label>
              <input
                type='text'
                placeholder='www.company.com'
                className='internship-modal-input'
              />
            </div>

            <div
              className='new-job-modal-label-container
            '
            >
              <label className='new-job-modal-label'>Description</label>
              <textarea
                rows={4}
                className='new-job-modal-input'
                placeholder='Brief description of the company'
              ></textarea>
            </div>
          </form>
          <div className='new-job-modal-footer-container'>
            <div className='new-job-btn-container'>
              <button className='new-job-modal-cancel-btn' onClick={onClose}>
                Cancel
              </button>
              <button className='company-modal-add-company-btn'>
                Add Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
