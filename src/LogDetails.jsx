import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LogDetails = ({ toggleDetails }) => {
  const { id } = useParams();
  const [logDetail, setLogDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:8888/logs/${id}`)
      .then((res) => res.json())
      .then((data) => setLogDetail(data.log));
  }, [id]);

  if (!logDetail) return null;

  return (
    <div>
      <h3>Captain Name: {logDetail.captainName}</h3>
      <p>Title: {logDetail.title}</p>
      <p>Post: {logDetail.post}</p>
      <p>
        Mistakes Were Made Today:{" "}
        {logDetail.mistakesWereMadeToday ? "Yes" : "No"}
      </p>
      <p>Days Since Last Crisis: {logDetail.daysSinceLastCrisis}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default LogDetails;
