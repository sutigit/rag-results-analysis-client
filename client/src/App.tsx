import "./App.css";
// import AdditionalRequirementsTable from "./components/AdditionalRequirementsTable";
import GenerationTable from "./components/GenerationTable";
import InformationCard from "./components/InformationCard";
import RetrievalTable from "./components/RetrievalTable";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="min-h-screen flex bg-zinc-800">
      <SideBar />
      <div className="flex-1 p-10 overflow-x-auto">
        <h1>ohtu-test-20.5.2025-11:53:59</h1>
        <InformationCard />
        <RetrievalTable />
        <GenerationTable />
        {/* <AdditionalRequirementsTable /> */}
      </div>
    </div>
  );
}

export default App;
