import { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";

class Course {}

function AddForm({ data, setData }) {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseImage, setCourseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let newCourse = {
      id: nanoid(),
      name: courseName,
      price: coursePrice,
      img: courseImage,
    };
    console.log(newCourse);
    setData([...data, newCourse]);
    setCourseName("");
    setCoursePrice(0);
    setCourseImage("");
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(event) =>  }>
          <div>
            <label htmlFor="">Course Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Course Priece</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Course Image</label>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
