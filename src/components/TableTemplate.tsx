export const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-60 px-4 py-3 flex-1 border-zinc-600 border-l last:border-r">
      {children}
    </div>
  );
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row border-b border-zinc-600">{children}</div>
  );
};

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row bg-zinc-700 border-t border-zinc-600">
      {children}
    </div>
  );
};

export const Table = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};
