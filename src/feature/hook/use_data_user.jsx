import { useState, useEffect } from "react";

const UseDataUser = () => {

  const [users, setUsers] = useState([]);
  const urlApi = "https://646d4d739c677e232189e51a.mockapi.io/user";

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const response = await fetch(urlApi);
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, []);


  return {
    urlApi,
    setUsers,
  };
};

export default UseDataUser;
