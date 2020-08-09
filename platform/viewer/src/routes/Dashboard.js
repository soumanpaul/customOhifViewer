import '../theme-tide.css';
import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="p-4 dashboardBack">
        <div className="positioning pb-3">
          <h5 className="pb-4">OHIF dicom viewer Demo React Project</h5>

	 <h5 className="pt-4">CT</h5>
          <a
            className="border border-primary btn btn-primary"
            href={`http://localhost:3000/viewer?url=https://api.jsonbin.io/b/5f2bcfd8dddf413f95be276d/13`}
            target="_blank"
          >
            View CT
          </a>
        </div>
        <div className="text-center pb-3">
          <h5 className="pt-4">X-RAY</h5> 
          <a
            className="border border-primary btn btn-primary"
            href={`http://localhost:3000/viewer?url=http://svasthiya.in:5002/xray.json`}
            target="_blank"
          >
            View X-RAY
          </a>
        </div>
       
      </div>
    );
  }
}

export default Dashboard;
