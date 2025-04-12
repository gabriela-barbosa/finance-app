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

    if (!transaction.date) {
      transaction.date = new Date().toISOString();
    }

    const newTransaction = await createTransaction(transaction);
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const transaction = await request.json();

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

    const id = transaction.id;
    const updatedTransaction = await updateTransaction(id, transaction);

    return NextResponse.json(updatedTransaction);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID da transação é obrigatório' }, { status: 400 });
    }

    await deleteTransaction(id);

    return NextResponse.json({ message: 'Transação excluída com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
