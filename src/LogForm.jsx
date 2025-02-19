import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogForm = ({ setLogs }) => {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    };
    fetch("http://localhost:8888/logs", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) alert("All inputs must be filled");
        else {
          setLogs(data.logs);
          setLog({
            captainName: "",
            title: "",
            post: "",
            mistakesWereMadeToday: false,
            daysSinceLastCrisis: 0,
          });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Log Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">
          Captain Name:
          <input
            onChange={handleChange}
            type="text"
            id="captainName"
            name="captainName"
            value={log.captainName}
            // required
          />
        </label>
        <label htmlFor="title">
          Title:
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={log.title}
            // required
          />
        </label>
        <label htmlFor="post">
          Post:
          <input
            onChange={handleChange}
            type="text"
            id="post"
            name="post"
            value={log.post}
            // required
          />
        </label>
        <label htmlFor="mistakesWereMadeToday">
          Mistakes Were Made Today:
          <input
            onChange={handleChange}
            type="text"
            id="mistakesWereMadeToday"
            name="mistakesWereMadeToday"
            value={log.mistakesWereMadeToday}
            // required
          />
        </label>
        <label htmlFor="daysSinceLastCrisis">
          Days Since Last Crisis:
          <input
            onChange={handleChange}
            type="number"
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            // required
          />
        </label>
        <button>Submit</button>
      </form>
      <Link to={"/"}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default LogForm;
