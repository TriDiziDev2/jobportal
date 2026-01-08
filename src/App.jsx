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
import InternshipPage from './pages/InternshipPage/InternshipPage';
import SingleInternship from './pages/SingleInternship/SingleInternship';
import Freelance from './pages/Freelance/Freelance';
import SingleFreelanceGig from './pages/SingleFreelanceGig/SingleFreelanceGig';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage';
import SingleCompany from './pages/SingleCompany/SingleCompany';

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
          <Route path='internship-hub' element={<InternshipPage />}>
            <Route index element={<InternshipHub />} />
            <Route path=':id' element={<SingleInternship />} />
          </Route>
          <Route path='freelance-gigs' element={<Freelance />}>
            <Route index element={<FreelanceGigs />} />
            <Route path=':id' element={<SingleFreelanceGig />} />
          </Route>
          <Route path='companies' element={<CompaniesPage />}>
            <Route index element={<Companies />} />
            <Route path=':id' element={<SingleCompany />} />
          </Route>
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
