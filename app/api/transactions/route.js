import { NextResponse } from 'next/server';

export async function GET() {
  // Mock transactions data for demo
  const transactions = [
    {
      id: 1,
      description: 'Salário',
      category: 'Renda',
      date: '05/05/2024',
      amount: 5000,
      type: 'receita',
    },
    {
      id: 2,
      description: 'Aluguel',
      category: 'Moradia',
      date: '10/05/2024',
      amount: 1200,
      type: 'despesa',
    },
  ];

  return NextResponse.json(transactions);
}

export async function POST(request) {
  try {
    const transaction = await request.json();

    // Validate required fields
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

    // In a real implementation, you would save the transaction to a database
    // For now, we just return the transaction with an ID
    const newTransaction = {
      id: Date.now(),
      date: transaction.date || new Date().toLocaleDateString('pt-BR'),
      ...transaction,
    };

    return NextResponse.json(newTransaction, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erro ao processar a transação' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const transaction = await request.json();

    // Validate transaction data
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

    // In a real implementation, you would update the transaction in a database
    // For demo purposes, we'll just return the updated transaction

    return NextResponse.json(transaction);
  } catch {
    return NextResponse.json({ error: 'Erro ao atualizar a transação' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    // In Next.js route handlers, we can use the nextUrl property on request
    const id = request.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID da transação é obrigatório' }, { status: 400 });
    }

    // In a real implementation, you would delete the transaction from a database
    // For demo purposes, we'll just return a success message

    return NextResponse.json({ message: 'Transação excluída com sucesso' });
  } catch {
    return NextResponse.json({ error: 'Erro ao excluir a transação' }, { status: 500 });
  }
}
