import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import Screen1 from '../page/screen-1';
import Screen2 from '../page/screen-2';
import Screen3 from '../page/screen-3';

const AppRoutes = () => {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />

          </Routes>
          <Paginate />
        </div>
      </Router>
    </div>
  );
};
const Paginate = () => {
  const { setCurrentPage, currentPage } = useContext(AppContext)

  const navigate = useNavigate();

  const navigatePage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        navigate('/')
        break
      case 2:
        navigate('/screen2')
        break
      case 3:
        navigate('/screen3')
        break
    }
  }

  const handleNext = () => {
    if (currentPage < 3) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigatePage(nextPage)
    }
  }
  const handleBack = () => {
    if (currentPage > 1) {
      const backPage = currentPage - 1;
      setCurrentPage(backPage);
      navigatePage(backPage)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
      {currentPage === 1 ? <></> :
        <button
          style={{ backgroundColor: "white", borderRadius: 10, height: 25, color: "#2596be", border: "none", margin: 10 }}
          onClick={handleBack}
        >
          Back
        </button>
      }
      <p>{currentPage}/3</p>
      {
        currentPage === 3 ?
          <button
            style={{ backgroundColor: "white", borderRadius: 10, height: 25, color: "#2596be", border: "none", margin: 10 }}
          >Finish</button>
          :
          <button
            onClick={handleNext}
            style={{ backgroundColor: "white", borderRadius: 10, height: 25, color: "#2596be", border: "none", margin: 10 }}
          >Next</button>
      }
    </div>
  )
}

export default AppRoutes;