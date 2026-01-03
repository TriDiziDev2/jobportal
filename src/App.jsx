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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />}>
          <Route index element={<Dashboard />} />
          <Route path='job-management' element={<JobManagement />} />
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
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
