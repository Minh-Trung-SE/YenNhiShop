import { Table } from "@tanstack/react-table";
import TableCell from "@src/common/TanStackTable/components/TableCell";

function TableRows<T = unknown>(props: { table: Table<T> }) {
    const { table } = props;

    return table.getRowModel().rows.map((row) => (
        <tr
            key={row.id}
            className="border-b last:border-b-0 hover:bg-slate-800 hover:text-white transition-all duration-300"
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} cell={cell} />
            ))}
        </tr>
    ));
}

export default TableRows;
