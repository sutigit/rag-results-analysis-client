import "./App.css";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/ResultTable";

function App() {
  return (
    <div className="min-h-screen flex bg-zinc-800">
      <div className="min-w-xs border-r border-zinc-700 p-10">
        <h2>Overview</h2>
        <div className="flex flex-col gap-2">
          <p>Analysis</p>
          <p>Notes</p>
        </div>
        <h2 className="mt-15">Test results</h2>
        <div className="flex flex-col gap-2">
          <p>ohtu-test-20.5.2025-11:53</p>
          <p>ohtu-test-20.5.2025-13:21</p>
        </div>
      </div>
      <div className="flex-1 p-10 overflow-x-auto">
        <h1>Retrieval</h1>
        <Table>
          <TableHeader>
            <TableCell>Question</TableCell>
            <TableCell>Retrieved documents</TableCell>
            <TableCell>Accuracy</TableCell>
            <TableCell>Precision</TableCell>
            <TableCell>Recall</TableCell>
            {/* <TableCell>Mean Reciprocal Rank</TableCell>
            <TableCell>Mean Average Precision</TableCell> */}
          </TableHeader>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            {/* <TableCell>Cell 6</TableCell>
            <TableCell>Call 7</TableCell> */}
          </TableRow>
        </Table>

        <h1 className="mt-10">Generation</h1>
        <Table>
          <TableHeader>
            <TableCell>Question</TableCell>
            <TableCell>RAG answer</TableCell>
            <TableCell>Acual answer</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
        </Table>

        {/* <h1 className="mt-10">Additional requirements</h1>
        <Table>
          <TableHeader>
            <TableCell>Question</TableCell>
            <TableCell>Latency</TableCell>
            <TableCell>Diversity</TableCell>
            <TableCell>Noise robustness</TableCell>
            <TableCell>Negative Rejection</TableCell>
            <TableCell>Counterfactual Robustness</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
        </Table> */}
      </div>
    </div>
  );
}

export default App;
