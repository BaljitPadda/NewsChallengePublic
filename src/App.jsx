import { useEffect, useState } from "react";
import axios from "axios";
import HeadlinesPage from "./Components/HeadlinesPage";
import "./App.css";

function App() {
  const [headlines, setHeadlines] = useState([]);

  const getHeadlines = async () => {
    try {
      const response = await axios.get(
        "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=3cc97968-1693-479f-85a9-55fd3bbd8b23"
      );
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
      <div className="app">
        <HeadlinesPage dataArray={headlines} />
      </div>
    </>
  );
}

export default App;
