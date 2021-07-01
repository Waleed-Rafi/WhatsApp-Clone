import React, { lazy, Suspense } from "react";
import "./App.css";
const Register = lazy(() => import("./Screens/Register/Register"));
//React.lazy is useful when we want a component to be completely rendered let say we pass a name to component to search on the github api now that component is only visible when that component gets data back from UI and UI is ready to render else we can Suspense and pass a fallback like a loader

function App() {
  return (
    <div className="App">
      <Suspense fallback={() => <div>Loading...</div>}>
        <Register />
      </Suspense>
    </div>
  );
}

export default App;
