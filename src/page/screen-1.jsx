import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

export default function Screen1() {
  const { formData, setFormData ,setCurrentPage} = useContext(AppContext);
    
  useEffect(() => {
    setCurrentPage(1)
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  };

  return (
    <main >
      <div>
        <h1 style={{color: "#8091a5", textAlign: "center"}}>Welcome</h1>
        <h3 style={{color: "#adadad", textAlign: "center", marginBottom: 50}}>How should we call you?</h3>
        <input 
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          style={{borderColor: "#d3d3d3", margin: 10, padding: 10, borderRadius: 8, width: 300 }}
        ></input>
      </div>
    </main>
  );
};