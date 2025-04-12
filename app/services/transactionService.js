import { supabase } from './supabase';

export const getTransactions = async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    throw new Error(`Falha ao buscar transações: ${error.message}`);
  }

  return data || [];
};

export const getTransactionById = async (id) => {
  const { data, error } = await supabase.from('transactions').select('*').eq('id', id).single();

  if (error) {
    throw new Error(`Falha ao buscar transação ${id}: ${error.message}`);
  }

  return data;
};

export const createTransaction = async (transaction) => {
  const { data, error } = await supabase.from('transactions').insert(transaction).select();

  if (error) {
    throw new Error(`Falha ao criar transação: ${error.message}`);
  }

  return data[0];
};

export const updateTransaction = async (id, transaction) => {
  const { data, error } = await supabase
    .from('transactions')
    .update(transaction)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(`Falha ao atualizar transação ${id}: ${error.message}`);
  }

  return data[0];
};

export const deleteTransaction = async (id) => {
  const { error } = await supabase.from('transactions').delete().eq('id', id);

  if (error) {
    throw new Error(`Falha ao excluir transação ${id}: ${error.message}`);
  }

  return true;
};
