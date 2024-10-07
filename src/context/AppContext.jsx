import { createContext, useState } from "react";

export const AppContext = createContext()
export default function AppProvider({ children }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        name: "stranger",
        expertise: [],
        brands: [],
    });
    

    return (
        <AppContext.Provider value={{ currentPage, setCurrentPage,formData, setFormData }}>
            {children}
        </AppContext.Provider>
    )
}