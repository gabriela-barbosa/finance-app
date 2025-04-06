/* global console */
import { supabase } from './supabase';

export async function getTransactions() {
  try {
    // Verifique se o cliente Supabase está funcionando
    console.log('Supabase URL:', supabase.supabaseUrl);

    // Tente listar todas as tabelas para depuração
    const { data: tables, error: tablesError } = await supabase
      .from('pg_catalog.pg_tables')
      .select('tablename')
      .eq('schemaname', 'public');

    if (tablesError) {
      console.error('Erro ao listar tabelas:', tablesError);
    } else {
      console.log('Tabelas disponíveis:', tables);
    }

    // Consulta original
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Erro detalhado:', error);
      throw new Error(`Falha ao buscar transações: ${error.message}`);
    }

    return data || [];
  } catch (e) {
    console.error('Exceção ao buscar transações:', e);
    throw e;
  }
}

export async function getTransactionById(id) {
  const { data, error } = await supabase.from('transactions').select('*').eq('id', id).single();

  if (error) {
    throw new Error(`Falha ao buscar transação ${id}: ${error.message}`);
  }

  return data;
}

export async function createTransaction(transaction) {
  const { data, error } = await supabase.from('transactions').insert(transaction).select();

  if (error) {
    throw new Error(`Falha ao criar transação: ${error.message}`);
  }

  return data[0];
}

export async function updateTransaction(id, transaction) {
  const { data, error } = await supabase
    .from('transactions')
    .update(transaction)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(`Falha ao atualizar transação ${id}: ${error.message}`);
  }

  return data[0];
}

export async function deleteTransaction(id) {
  const { error } = await supabase.from('transactions').delete().eq('id', id);

  if (error) {
    throw new Error(`Falha ao excluir transação ${id}: ${error.message}`);
  }

  return true;
}
