'use client';

export const TransactionFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="p-6 bg-neutral-100 rounded-lg shadow mb-6">
      <h2 className="text-lg font-medium text-foreground mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Período</label>
          <select
            value={filters.period}
            onChange={(e) => onFilterChange('period', e.target.value)}
            className="w-full p-2 bg-background border border-neutral-200 rounded-md text-foreground focus:ring-1 focus:ring-primary"
          >
            <option value="mes">Este mês</option>
            <option value="trimestre">Este trimestre</option>
            <option value="ano">Este ano</option>
            <option value="todos">Todos os períodos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Tipo</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full p-2 bg-background border border-neutral-200 rounded-md text-foreground focus:ring-1 focus:ring-primary"
          >
            <option value="todos">Todos</option>
            <option value="receita">Receitas</option>
            <option value="despesa">Despesas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Categoria</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full p-2 bg-background border border-neutral-200 rounded-md text-foreground focus:ring-1 focus:ring-primary"
          >
            <option value="todas">Todas</option>
            <option value="Renda">Renda</option>
            <option value="Moradia">Moradia</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
            <option value="Educação">Educação</option>
            <option value="Lazer">Lazer</option>
            <option value="Cuidados Pessoais">Cuidados Pessoais</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Ordenar por</label>
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange('sort', e.target.value)}
            className="w-full p-2 bg-background border border-neutral-200 rounded-md text-foreground focus:ring-1 focus:ring-primary"
          >
            <option value="recentes">Mais recentes</option>
            <option value="antigas">Mais antigas</option>
            <option value="maior">Maior valor</option>
            <option value="menor">Menor valor</option>
          </select>
        </div>
      </div>
    </div>
  );
};
