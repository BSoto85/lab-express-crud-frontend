import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logs from "./Logs";
import LogDetails from "./LogDetails";
import LogForm from "./LogForm";
import LogEdit from "./LogEdit";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });
  const [toggleForm, setToggleForm] = useState(false);
  const [edit, setEdit] = useState({ show: false, id: null });

  useEffect(() => {
    fetch("http://localhost:8888/logs")
      .then((res) => res.json())
      .then((data) => setLogs(data.logs));
  }, []);

  return (
    <div>
      <h1>Logs CRUD</h1>
      <Link to={"/new"}>
        <button>Create Log</button>
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <Logs
              logs={logs}
              setLogs={setLogs}
              setToggleDetails={setToggleDetails}
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
        <Route path="/:id" element={<LogDetails />} />
        <Route
          path="/edit/:id"
          element={
            <LogEdit
              setLogs={setLogs}
              setToggleForm={setToggleForm}
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
        <Route
          path="/new"
          element={
            <LogForm
              setLogs={setLogs}
              setToggleForm={setToggleForm}
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
