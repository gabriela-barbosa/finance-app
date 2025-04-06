-- Adicionar categorias de exemplo
INSERT INTO transactions (description, category, date, amount, type)
VALUES 
  ('Salário', 'Renda', CURRENT_DATE, 5000.00, 'receita'),
  ('Aluguel', 'Moradia', CURRENT_DATE, 1200.00, 'despesa'),
  ('Supermercado', 'Alimentação', CURRENT_DATE, 550.00, 'despesa'),
  ('Freela', 'Renda Extra', CURRENT_DATE, 1500.00, 'receita'),
  ('Internet', 'Serviços', CURRENT_DATE, 120.00, 'despesa'),
  ('Energia', 'Serviços', CURRENT_DATE, 180.00, 'despesa'); 