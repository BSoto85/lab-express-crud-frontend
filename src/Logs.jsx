import { useEffect } from "react";

const Logs = ({ logs, setLogs, setToggleDetails }) => {
  useEffect(() => {
    fetch("http://localhost:8888/logs")
      .then((res) => res.json())
      .then((data) => setLogs(data.logs));
  }, []);

  if (logs.length === 0) return null;

  return (
    <div>
      <h2>Logs</h2>
      {logs.map(({ id, captainName, title, post }) => (
        <div key={id}>
          <h3>Captain Name: {captainName}</h3>
          <p>Title: {title}</p>
          <p>Post: {post}</p>
          <button onClick={() => setToggleDetails({ show: true, id })}>
            Details
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Logs;
