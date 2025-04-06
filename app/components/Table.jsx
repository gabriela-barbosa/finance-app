export const Table = ({
  columns,
  data,
  emptyMessage = 'Nenhum dado encontrado.',
  className = '',
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-100 rounded-lg">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={row.id || index}
                className={`${index % 2 === 0 ? 'bg-neutral-100/50' : 'bg-neutral-200/30'} hover:bg-neutral-200/70`}
              >
                {columns.map((column) => (
                  <td
                    key={`${row.id || index}-${column.key}`}
                    className={
                      column.cellClassName || 'px-6 py-4 whitespace-nowrap text-foreground'
                    }
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-sm text-neutral-300"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
