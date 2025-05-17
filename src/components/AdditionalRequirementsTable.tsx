import { Table, TableHeader, TableCell, TableRow } from "./TableTemplate";

export default function AdditionalRequirementsTable() {
  return (
    <div className="mt-10">
      <h1>Additional requirements</h1>
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
      </Table>
    </div>
  );
}
