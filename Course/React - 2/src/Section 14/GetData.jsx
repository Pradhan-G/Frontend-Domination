import React, { useEffect } from "react";
import axios from "axios";

function GetData({ bringValue }) {
  const getProducts = async () => {
    try {
      const api = "https://fakestoreapi.com/products";
      const response = await axios.get(api);
      return response.data; // Return the data from the API call
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Throw the error to be caught by the caller if needed
    }
  };

  useEffect(() => {
    async function hello() {
      try {
        const data = await getProducts(); // Wait for the API call to complete
        bringValue(data); // Pass the data to the parent component
      } catch (error) {
        // Handle errors if needed
        console.error("Error getting products:", error);
      }
    }

    hello();
  }, []);

  return "";
}

export default GetData;
