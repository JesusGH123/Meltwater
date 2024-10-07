import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const options = [
  'Lifestyle',
  'Beauty',
  'Food'
];

export default function Screen2() {
  const { formData, setFormData, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage(2)
  })

  const handleCheckBox = (e) => {
    const { value } = e.target;
    const { checked } = e.target
    let updateChecks = [...formData.expertise]

    if (checked) {
      updateChecks.push(value)
    } else {
      updateChecks = updateChecks.filter((item) => item !== value)
    }
    setFormData({ ...formData, expertise: updateChecks })
  };

  return (
    <main>
      <div>
        <h1 style={{ color: "#8091a5" }}>Hi {formData.name}</h1>
        <h3 style={{ color: "#a9a9a9", marginBottom: 50 }}>What are your expertise?</h3>

        <div style={{ display: 'flex' }}>
          {
            options.map((item) => {
              return (
                <div >
                  <input id={item} type="checkbox" value={item} onChange={handleCheckBox} />
                  <label htmlFor={item}>{item}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
};