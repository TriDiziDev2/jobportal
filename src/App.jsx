import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import JobManagement from './pages/JobsManagement/JobManagement/JobManagement';
import InternshipHub from './pages/InternshipPage/InternshipHub/InternshipHub';
import FreelanceGigs from './pages/Freelance/FreelanceGigs/FreelanceGigs';
import Companies from './pages/CompaniesPage/Companies/Companies';
import UserManagement from './pages/UserManagement/UserManagement';
import ColdLeads from './pages/ColdLeads/ColdLeads';
import Employees from './pages/EmployeesPage/Employees/Employees';
import Income from './pages/IncomePage/Income/Income';
import Reports from './pages/Reports/Reports';
import Support from './pages/SupportPage/Support/Support';
import Login from './pages/Login/Login';
import Institutes from './pages/InstitutesPage/Institutes/Institutes';
import Courses from './pages/CoursesPage/Courses/Courses';
import Tutors from './pages/TutorsPage/Tutors/Tutors';
import Marketing from './pages/MarketingPage/Marketing/Marketing';
import SingleJob from './pages/JobsManagement/SingleJob/SingleJob';
import JobsManagement from './pages/JobsManagement/JobsManagement';
import InternshipPage from './pages/InternshipPage/InternshipPage';
import SingleInternship from './pages/InternshipPage/SingleInternship/SingleInternship';
import Freelance from './pages/Freelance/Freelance';
import SingleFreelanceGig from './pages/Freelance/SingleFreelanceGig/SingleFreelanceGig';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage';
import SingleCompany from './pages/CompaniesPage/SingleCompany/SingleCompany';
import SingleInstitute from './pages/InstitutesPage/SingleInstitute/SingleInstitute';
import InstitutesPage from './pages/InstitutesPage/InstitutesPage';
import SingleTrainer from './pages/InstitutesPage/SingleTrainer/SingleTrainer';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import SingleCourse from './pages/CoursesPage/SingleCourse/SingleCourse';
import TutorsPage from './pages/TutorsPage/TutorsPage';
import SingleTutor from './pages/TutorsPage/SingleTutor/SingleTutor';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import SingleEmployee from './pages/EmployeesPage/SingleEmployee/SingleEmployee';
import MarketingOverview from './pages/MarketingPage/MarketingOverview/MarketingOverview';
import MarketingUserResources from './pages/MarketingPage/MarketingUserResources/MarketingUserResources';
import PushNotifications from './pages/MarketingPage/PushNotifications/PushNotifications';
import Campaigns from './pages/MarketingPage/Campaigns/Campaigns';
import RevenueAnalytics from './pages/IncomePage/RevenueAnalytics/RevenueAnalytics';
import UpdatePlans from './pages/IncomePage/UpdatePlans/UpdatePlans';
import SupportPage from './pages/SupportPage/SupporttPage';
import RaiseTicket from './pages/SupportPage/RaiseTicket/RaiseTicket';
import PlanSettings from './pages/IncomePage/PlanSettings/PlanSettings';

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

          <Route path='employees' element={<EmployeesPage />}>
            <Route index element={<Employees />} />
            <Route path=':employee' element={<SingleEmployee />} />
          </Route>

          <Route path='income' element={<Income />}>
            <Route index element={<RevenueAnalytics />} />
            <Route path='update-plans' element={<UpdatePlans />} />
            <Route path='plan-settings' element={<PlanSettings />} />
          </Route>

          <Route path='reports' element={<Reports />} />

          <Route path='support' element={<SupportPage />}>
            <Route index element={<Support />} />
            <Route path=':ticket' element={<RaiseTicket />} />
          </Route>

          <Route path='institutes' element={<InstitutesPage />}>
            <Route index element={<Institutes />} />
            <Route path=':institute' element={<SingleInstitute />} />
            <Route path=':trainer' element={<SingleTrainer />} />
          </Route>
          <Route path='courses' element={<CoursesPage />}>
            <Route index element={<Courses />} />
            <Route path=':course' element={<SingleCourse />} />
          </Route>
          <Route path='tutors' element={<TutorsPage />}>
            <Route index element={<Tutors />} />
            <Route path=':tutor' element={<SingleTutor />} />
          </Route>
          <Route path='marketing' element={<Marketing />}>
            <Route index element={<MarketingOverview />} />
            <Route path='user-resources' element={<MarketingUserResources />} />
            <Route path='push-notifications' element={<PushNotifications />} />
            <Route path='campaigns' element={<Campaigns />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
