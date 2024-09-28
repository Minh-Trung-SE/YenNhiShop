import { Table } from "@tanstack/react-table";
import TableHeader from "@src/common/TanStackTable/components/TableHeader";

function TableHeaderGroups<T = unknown>(props: { table: Table<T> }) {
    const groups = props.table.getHeaderGroups();

    return groups.map((headerGroup) => (
        <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
                <TableHeader key={header.id} header={header} />
            ))}
        </tr>
    ));
}

export default TableHeaderGroups;
