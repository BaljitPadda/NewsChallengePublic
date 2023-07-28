import { useEffect, useState } from "react";
import axios from "axios";
import HeadlinesPage from "./Components/HeadlinesPage";
import "./App.css";

function App() {
  const [headlines, setHeadlines] = useState([]);

  const getHeadlines = async () => {
    try {
      const response = await axios.get("http://localhost:3000/mockApiResponse");
      console.log(response.data.response.results);
      return response.data.response.results;
    } catch (e) {
      console.log("No headlines found");
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      setHeadlines(await getHeadlines());
    };
    setTimeout(() => getData(), 0);
  }, []);

  return (
    <>
      <h1 className="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
        Headlines Page
      </h1>
      <HeadlinesPage dataArray={headlines} />
    </>
  );
}

export default App;
