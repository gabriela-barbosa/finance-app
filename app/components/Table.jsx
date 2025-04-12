'use client';

import {
  Table as UITable,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';

export function Table({ columns = [], data = [], emptyMessage = 'No data available' }) {
  if (!data.length) {
    return <div className="py-4 text-center font-medium text-foreground">{emptyMessage}</div>;
  }

  return (
    <div className="w-full overflow-auto">
      <UITable>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex}>
              {columns.map((column) => (
                <TableCell key={`${row.id || rowIndex}-${column.key}`}>
                  {column.render ? column.render(row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </UITable>
    </div>
  );
}
