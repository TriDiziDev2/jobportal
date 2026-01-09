const FreelanceGigsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='new-job-modal-overlay'>
      <div className='new-job-modal-overlay-background' onClick={onClose}>
        <div className='new-job-modal-overlay-container'>
          <div className='new-job-modal-overlay-header'>
            <h3 className='new-job-modal-heading'>Add New Freelance Gig</h3>
          </div>
          <form className='new-job-modal-form-container'>
            <div
              className='new-job-modal-label-container
            '
            >
              <label className='new-job-modal-label'>Project Title</label>
              <input
                type='text'
                placeholder='e.g.Freelance Web Developer'
                className='new-job-modal-input'
              />
            </div>
            <div className='new-job-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Company/Client</label>
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
                  placeholder='Remote or City'
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div className='internship-modal-grid-container'>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Project Duration</label>
                <input
                  type='text'
                  placeholder='e.g.2-3 months'
                  className='new-job-modal-input'
                />
              </div>
              <div
                className='new-job-modal-label-container
            '
              >
                <label className='new-job-modal-label'>Deadline</label>
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
                <label className='new-job-modal-label'>Budget</label>
                <input
                  type='text'
                  placeholder='e.g. $50-$100/hr'
                  className='new-job-modal-input'
                />
              </div>
            </div>
            <div className='internship-modal-grid-container'>
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
                <label className='new-job-modal-label'>Payment Type</label>
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
                <label className='new-job-modal-label'>Experience Level</label>
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
              <label className='new-job-modal-label'>Project Description</label>
              <textarea
                rows={4}
                className='new-job-modal-input'
                placeholder='Describe the project requirements...'
              ></textarea>
            </div>
          </form>
          <div className='new-job-modal-footer-container'>
            <div className='new-job-btn-container'>
              <button className='new-job-modal-cancel-btn' onClick={onClose}>
                Cancel
              </button>
              <button className='new-job-modal-create-job-btn'>
                Create Gig
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceGigsModal;
