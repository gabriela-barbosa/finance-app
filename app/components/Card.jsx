export const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-neutral-100 rounded-lg shadow p-6 ${className}`}>
      {title && <h3 className="text-sm font-medium text-foreground mb-1">{title}</h3>}
      {children}
    </div>
  );
};
