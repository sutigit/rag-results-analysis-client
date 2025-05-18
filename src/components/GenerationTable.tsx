import { Table, TableHeader, TableCell, TableRow } from "./TableTemplate";

export default function GenerationTable() {
  return (
    <div className="mt-10">
      <h2>Generation</h2>
      <Table>
        <TableHeader>
          <TableCell>Query</TableCell>
          <TableCell>RAG answer</TableCell>
          <TableCell>Acual answer</TableCell>
          <TableCell>LLM-evaluated score</TableCell>
          <TableCell>Self-evaluated score</TableCell>
        </TableHeader>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
          <TableCell>4.2/5</TableCell>
          <TableCell>4/5</TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
