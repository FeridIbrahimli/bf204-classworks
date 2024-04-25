import { useState } from "react";
import "./App.css";
import { AddForm } from "./assets/companents/AddForm";

import array from "./assets/data/data";
import Courses from "./assets/companents/Courses";

function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = data.filter((q) => {
    return q.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLocaleLowerCase());
  });
  // console.log(filteredCourses);
  return (
    <>
      <AddForm data={data} setData={setData} />
      <Courses data={filteredCourses} />
    </>
  );
}

export default App;
