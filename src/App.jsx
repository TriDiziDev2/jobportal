import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import JobManagement from './pages/JobManagement/JobManagement';
import InternshipHub from './pages/InternshipHub/InternshipHub';
import FreelanceGigs from './pages/FreelanceGigs/FreelanceGigs';
import Companies from './pages/Companies/Companies';
import UserManagement from './pages/UserManagement/UserManagement';
import ColdLeads from './pages/ColdLeads/ColdLeads';
import Employees from './pages/Employees/Employees';
import Income from './pages/Income/Income';
import Reports from './pages/Reports/Reports';
import Support from './pages/Support/Support';
import Login from './pages/Login/Login';
import Institutes from './pages/Institutes/Institutes';
import Courses from './pages/Courses/Courses';
import Tutors from './pages/Tutors/Tutors';
import Marketing from './pages/Marketing/Marketing';
import SingleJob from './pages/SingleJob/SingleJob';
import JobsManagement from './pages/JobsManagement/JobsManagement';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Dashboard />} />
          <Route path='job-management' element={<JobsManagement />}>
            <Route index element={<JobManagement />} />
            <Route path=':id' element={<SingleJob />} />
          </Route>
          <Route path='internship-hub' element={<InternshipHub />} />
          <Route path='freelance-gigs' element={<FreelanceGigs />} />
          <Route path='companies' element={<Companies />} />
          <Route path='user-management' element={<UserManagement />} />
          <Route path='cold-leads' element={<ColdLeads />} />
          <Route path='employees' element={<Employees />} />
          <Route path='income' element={<Income />} />
          <Route path='reports' element={<Reports />} />
          <Route path='support' element={<Support />} />
          <Route path='institutes' element={<Institutes />} />
          <Route path='courses' element={<Courses />} />
          <Route path='tutors' element={<Tutors />} />
          <Route path='marketing' element={<Marketing />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
