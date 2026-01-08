import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);
  const [isInternshipFilterModalOpen, setIsInternshipFilterModalOpen] =
    useState(false);
  const [isFreelanceModalOpen, setIsFreelanceModalOpen] = useState(false);
  const [isFreelanceFilterModalOpen, setIsFreelanceFilterModalOpen] =
    useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isCompanyFiltersModalOpen, setIsCompanyFiltersModalOpen] =
    useState(false);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        isJobModalOpen,
        setIsJobModalOpen,
        isFilterModalOpen,
        setIsFilterModalOpen,
        isInternshipModalOpen,
        setIsInternshipModalOpen,
        isInternshipFilterModalOpen,
        setIsInternshipFilterModalOpen,
        isFreelanceModalOpen,
        setIsFreelanceModalOpen,
        isFreelanceFilterModalOpen,
        setIsFreelanceFilterModalOpen,
        isCompanyModalOpen,
        setIsCompanyModalOpen,
        isCompanyFiltersModalOpen,
        setIsCompanyFiltersModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
