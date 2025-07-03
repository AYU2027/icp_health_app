import React from "react";
import ReactDOM from "react-dom/client";
import { icp_health_app_backend } from "../../declarations/icp_health_app_backend";

function App() {
  const [response, setResponse] = React.useState("Loading...");

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await icp_health_app_backend.greet("Rishitha");
        setResponse(result);
      } catch (err) {
        console.error("❌ Backend call failed:", err);
        setResponse("❌ Error calling backend");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>ICP Health App</h1>
      <p>{response}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



