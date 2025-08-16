import { children, createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [data, setData] = useState();
    // Fathings all Products
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products?limit=150`)
            console.log(res)
            const productsData = res.data.products
            setData(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

        const getUniqueCategories = (data, property) => {
        let newVAL = data?.map((curElem) => {
            return curElem[property]
        })
        newVAL = ["All",...new Set(newVAL)]
        return newVAL
    }
    const categoryOnlyData = getUniqueCategories(data, 'category')
    const brandOnlyData = getUniqueCategories(data, 'brand')


    return <DataContext.Provider value={{ data, setData, fetchAllProducts,categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}


export const getData = ()=>useContext(DataContext);