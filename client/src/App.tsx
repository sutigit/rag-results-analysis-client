import "./App.css";

import AnalysisView from "./components/AnalysisView";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="min-h-screen flex bg-zinc-800">
      <SideBar />
      <AnalysisView />
    </main>
  );
}

export default App;
