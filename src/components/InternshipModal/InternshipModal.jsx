import './InternshipModal.css';

const InternshipModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='internship-modal-overlay'>
      <div className='internship-modal-overlay-background' onClick={onClose}>
        <div className='internship-modal-overlay-container'>
          <div className='internship-modal-header-container'>
            <h3 className='internship-modal-heading'>Add New Internship</h3>
          </div>
          <form className='internship-modal-form-container'>
            <div
              className='internship-modal-label-container
            '
            >
              <label className='internship-modal-label'>Internship Title</label>
              <input
                type='text'
                placeholder='e.g.Software Engineering Intern'
                className='internship-modal-input'
              />
            </div>
            <div className='new-job-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Company</label>
                <input
                  type='text'
                  placeholder='Company name'
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Location</label>
                <input
                  type='text'
                  placeholder='City, State'
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div className='new-job-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Duration</label>
                <input
                  type='text'
                  placeholder='e.g.3 months'
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Start Date</label>
                <input
                  type='text'
                  placeholder=''
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div className='internship-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Stipend</label>
                <input
                  type='text'
                  placeholder='e.g.$15-$20/hr or Unpaid'
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Category</label>
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
                <label className='new-job-modal-label'>Spots Available</label>
                <input
                  type='text'
                  placeholder='Number of spots available'
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div className='internship-modal-checkbox-container'>
              <input
                type='checkbox'
                className='internship-modal-checkbox-input'
              />
              <label className='checkbox-label'>
                This is a paid internship
              </label>
            </div>
            <div
              className='new-job-modal-label-container
            '
            >
              <label className='new-job-modal-label'>Description</label>
              <textarea
                rows={4}
                className='new-job-modal-input'
                placeholder='Internship Description'
              ></textarea>
            </div>
          </form>
          <div className='new-job-modal-footer-container'>
            <div className='new-job-btn-container'>
              <button className='new-job-modal-cancel-btn' onClick={onClose}>
                Cancel
              </button>
              <button className='new-job-modal-create-job-btn'>
                Create Internship
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipModal;
