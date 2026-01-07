import './NewJobModal.css';

const NewJobModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='new-job-modal-overlay'>
      <div className='new-job-modal-overlay-background' onClick={onClose}>
        <div className='new-job-modal-overlay-container'>
          <div className='new-job-modal-overlay-header'>
            <h3 className='new-job-modal-heading'>Add New Job</h3>
          </div>
          <form className='new-job-modal-form-container'>
            <div
              className='new-job-modal-label-container
            '
            >
              <label className='new-job-modal-label'>Job Title</label>
              <input
                type='text'
                placeholder='e.g.Senior React Developer'
                className='new-job-modal-input'
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
                <label className='new-job-modal-label'>Job Type</label>
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
                <label className='new-job-modal-label'>Category</label>
                <input
                  type='text'
                  placeholder=''
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div
              className='new-job-modal-label-container
            '
            >
              <label className='new-job-modal-label'>Salary Range</label>
              <input
                type='text'
                placeholder='e.g.$100K - $130K or $15-$20/hr'
                className='new-job-modal-input'
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
                placeholder='Job Description'
              ></textarea>
            </div>
          </form>
          <div className='new-job-modal-footer-container'>
            <div className='new-job-btn-container'>
              <button className='new-job-modal-cancel-btn' onClick={onClose}>
                Cancel
              </button>
              <button className='new-job-modal-create-job-btn'>
                Create Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJobModal;
