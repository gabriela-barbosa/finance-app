'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const TransactionFilters = ({ onFilterChange, categories }) => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
    minAmount: '',
    maxAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Filtrar Transações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-xs">
              Data Inicial
            </Label>
            <Input
              id="startDate"
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate" className="text-xs">
              Data Final
            </Label>
            <Input
              id="endDate"
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" className="text-xs">
              Categoria
            </Label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Todas</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="minAmount" className="text-xs">
              Valor Mínimo
            </Label>
            <Input
              id="minAmount"
              type="number"
              name="minAmount"
              value={filters.minAmount}
              onChange={handleChange}
              placeholder="0,00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxAmount" className="text-xs">
              Valor Máximo
            </Label>
            <Input
              id="maxAmount"
              type="number"
              name="maxAmount"
              value={filters.maxAmount}
              onChange={handleChange}
              placeholder="0,00"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
