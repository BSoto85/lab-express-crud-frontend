import { useEffect, useState } from "react";

const LogDetails = ({ toggleDetails }) => {
  const [logDetail, setLogDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:8888/logs/${toggleDetails.id}`)
      .then((res) => res.json())
      .then((data) => setLogDetail(data.log));
  }, [toggleDetails.id]);

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
    </div>
  );
};

export default LogDetails;
