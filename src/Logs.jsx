import { Link, useParams } from "react-router-dom";

const Logs = ({ logs, setLogs, setToggleDetails, setEdit }) => {
  const { id } = useParams();
  if (logs.length === 0) return null;

  const handleDelete = (id) => {
    const options = {
      method: "DELETE",
    };
    fetch(`http://localhost:8888/logs/${id}`, options)
      .then((res) => res.json())
      .then((data) => setLogs(data.logs));
  };

  return (
    <div>
      <h2>Logs</h2>
      {logs.map(({ id, captainName, title, post }) => (
        <div key={id}>
          <h3>Captain Name: {captainName}</h3>
          <p>Title: {title}</p>
          <p>Post: {post}</p>
          <Link to={`/${id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Logs;
