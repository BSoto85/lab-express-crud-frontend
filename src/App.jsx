import { useState } from "react";
import Logs from "./Logs";
import LogDetails from "./LogDetails";
import LogForm from "./LogForm";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div>
      <h1>Logs CRUD</h1>
      <button onClick={() => setToggleForm(true)}>Create Log</button>
      <Logs logs={logs} setLogs={setLogs} setToggleDetails={setToggleDetails} />
      {toggleDetails.show && <LogDetails toggleDetails={toggleDetails} />}
      {toggleForm && (
        <LogForm setLogs={setLogs} setToggleForm={setToggleForm} />
      )}
    </div>
  );
};

export default App;
