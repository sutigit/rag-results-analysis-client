import { Table, TableHeader, TableCell, TableRow } from "./TableTemplate";

export default function RetrievalTable() {
  return (
    <div className="mt-10">
      <h2>Retrieval</h2>
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
    </div>
  );
}
