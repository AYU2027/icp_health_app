import React, { useEffect, useState } from "react";
import { icp_health_app_backend } from "../../declarations/icp_health_app_backend";

function App() {
  const [response, setResponse] = useState("Loading...");

  useEffect(() => {
    async function fetchGreeting() {
      try {
        const res = await icp_health_app_backend.greet("Rishitha");
        setResponse(res);
      } catch (error) {
        console.error("Backend call failed:", error);
        setResponse("❌ Error calling backend");
      }
    }

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>ICP Health App</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
