/* global console */
import axios from 'axios';

const API_BASE_URL = '/api';

export const transactionService = {
  getTransactions: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
      throw error;
    }
  },

  createTransaction: async (transaction) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/transactions`, transaction);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar transação:', error);
      throw error;
    }
  },

  updateTransaction: async (id, transaction) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/transactions/${id}`, transaction);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar transação ${id}:`, error);
      throw error;
    }
  },

  deleteTransaction: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir transação ${id}:`, error);
      throw error;
    }
  },
};
