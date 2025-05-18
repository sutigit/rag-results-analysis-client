import { Table, TableHeader, TableCell, TableRow } from "./TableTemplate";

export default function GenerationTable() {
  return (
    <div className="mt-10">
      <h2>Generation</h2>
      <Table>
        <TableHeader>
          <TableCell flex={2} align="center">
            Query
          </TableCell>
          <TableCell flex={2} align="center">
            RAG answer
          </TableCell>
          <TableCell flex={2} align="center">
            Acual answer
          </TableCell>
          <TableCell align="center">LLM-evaluated score</TableCell>
          <TableCell align="center">Self-evaluated score</TableCell>
        </TableHeader>
        <TableRow>
          <TableCell flex={2}>Mikä on scrumbut??</TableCell>
          <TableCell flex={2}>
            Scrumbut on ohjelmistokehityksen termi, joka kuvaa tiimiä, joka
            noudattaa Scrumia, mutta tekee siitä poikkeuksia ("Scrum, but...").
          </TableCell>
          <TableCell flex={2}>
            Scrumbut on ohjelmistokehityksen termi, joka kuvaa tiimiä, joka
            noudattaa Scrumia, mutta tekee siitä poikkeuksia ("Scrum, but...").
          </TableCell>
          <TableCell align="center">4.2/5</TableCell>
          <TableCell align="center">4/5</TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
