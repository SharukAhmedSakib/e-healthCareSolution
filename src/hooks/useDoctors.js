import { useEffect } from "react";
import { useState } from "react";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/c112ef90b6390fd9c656")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return { doctors, setDoctors };
};

export default useDoctors;
