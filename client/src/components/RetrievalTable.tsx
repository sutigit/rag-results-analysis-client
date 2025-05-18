import { Table, TableHeader, TableCell, TableRow } from "./TableTemplate";

export default function RetrievalTable() {
  return (
    <div className="mt-10">
      <h2>Retrieval</h2>
      <Table>
        <TableHeader>
          <TableCell flex={2} align="center">
            Query
          </TableCell>
          <TableCell flex={2} align="center">
            Retrieved documents
          </TableCell>
          <TableCell align="center">Accuracy</TableCell>
          <TableCell align="center">Precision</TableCell>
          <TableCell align="center">Recall</TableCell>
          {/* <TableCell>Mean Reciprocal Rank</TableCell>
                    <TableCell>Mean Average Precision</TableCell> */}
        </TableHeader>
        <TableRow>
          <TableCell flex={2}>Mikä on scrumbut??</TableCell>
          <TableCell flex={2}>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden border-l-10 border-zinc-700 pl-2">
                Scrumbut on ohjelmistokehityksen termi, joka kuvaa tiimiä, joka
                noudattaa Scrumia, mutta tekee siitä poikkeuksia ("Scrum,
                but...").
              </div>
              <div className="overflow-hidden border-l-10 border-zinc-700 pl-2">
                Scrumbut on ...
              </div>
            </div>
          </TableCell>
          <TableCell align="center">0.92</TableCell>
          <TableCell align="center">0.75</TableCell>
          <TableCell align="center">0.66</TableCell>
          {/* <TableCell>Cell 6</TableCell>
                    <TableCell>Call 7</TableCell> */}
        </TableRow>
      </Table>
    </div>
  );
}
