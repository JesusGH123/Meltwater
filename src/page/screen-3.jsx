import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function Screen3() {
  const { setCurrentPage, formData, setFormData } = useContext(AppContext)

  useEffect(() => {
    setCurrentPage(3)
  })

  const [brand, setBrand] = useState('')
  
  const AddBrandName = () => {
   
    let updateBrands = [...formData.brands];

    updateBrands.push(brand);
    setFormData({ ...formData, brands: updateBrands });
    setBrand(setBrand)
  };

  const handleInputBrand = (e) => {
    setBrand(e.target.value);
  };

  return (
    <main>
      <div>
        <h1 style={{color: "#8091a5"}}>One last thing</h1>
        <h3 style={{color: "#a9a9a9", marginBottom: 50}}>Have you collaborated with brands in the past?</h3>
    
        <input 
          type="text"
          required
          placeholder="Enter brand name" 
          value={brand}
          onChange={handleInputBrand}
          style={{borderColor: "#d3d3d3", margin: 10, padding: 10, borderRadius: 8, width: 300 }}
        />
        <button 
          onClick={AddBrandName}
          style={{backgroundColor: "#2596be", borderRadius: 10, height: 25, color: "white"}}
          >
            Add
        </button>
        {formData?.brands&&formData?.brands.map((item)=>{
          return(
            <div>
              @{item}
            </div>
          )
        })}
      </div>
    </main>
  );
};
