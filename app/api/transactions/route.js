import { NextResponse } from 'next/server';
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from '@/app/services/transactionService';

export async function GET() {
  try {
    const transactions = await getTransactions();
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const transaction = await request.json();

    // Validar campos obrigatórios
    if (
      !transaction.description ||
      !transaction.amount ||
      !transaction.type ||
      !transaction.category
    ) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: descrição, valor, tipo e categoria' },
        { status: 400 }
      );
    }

    // Formatar a data se não for fornecida
    if (!transaction.date) {
      transaction.date = new Date().toISOString();
    }

    // Salvar a transação no Supabase
    const newTransaction = await createTransaction(transaction);
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const transaction = await request.json();

    // Validar dados da transação
    if (
      !transaction.id ||
      !transaction.description ||
      !transaction.amount ||
      !transaction.type ||
      !transaction.category
    ) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: id, descrição, valor, tipo e categoria' },
        { status: 400 }
      );
    }

    // Atualizar a transação no Supabase
    const id = transaction.id;
    const updatedTransaction = await updateTransaction(id, transaction);

    return NextResponse.json(updatedTransaction);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    // Obter o ID da URL
    const id = request.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID da transação é obrigatório' }, { status: 400 });
    }

    // Excluir a transação no Supabase
    await deleteTransaction(id);

    return NextResponse.json({ message: 'Transação excluída com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
