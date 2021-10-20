import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/a0b463298d1997c5addd")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return { blogs, setBlogs };
};

export default useBlogs;
