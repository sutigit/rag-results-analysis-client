// import AdditionalRequirementsTable from "./AdditionalRequirementsTable";
import GenerationTable from "./GenerationTable";
import InformationCard from "./InformationCard";
import RetrievalTable from "./RetrievalTable";

export default function AnalysisView() {
  return (
    <div className="flex-1 p-10 overflow-x-auto">
      <h1>ohtu-test-20.5.2025-11:53:59</h1>
      <InformationCard />
      <RetrievalTable />
      <GenerationTable />
      {/* <AdditionalRequirementsTable /> */}
    </div>
  );
}
