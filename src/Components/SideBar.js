import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {


  const [courseData, setCourseData] = useState([]);



  useEffect(() => {
    fetch("https://biplob-it-course-amibiplob.vercel.app/")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      {courseData.map((singleData) => (
        <Link
          key={singleData.id}
          to={`../details/${singleData.id}`}
          className="btn btn-outline btn-sm"
        >
          {singleData.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
