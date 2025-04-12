import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const transaction = {
      id: Number(id),
      description: 'Transação de exemplo',
      category: 'Diversos',
      date: new Date().toLocaleDateString('pt-BR'),
      amount: 100,
      type: 'despesa',
    };

    return NextResponse.json(transaction);
  } catch {
    return NextResponse.json({ error: 'Erro ao buscar a transação' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
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

    const updatedTransaction = {
      id: Number(id),
      ...transaction,
    };

    return NextResponse.json(updatedTransaction);
  } catch {
    return NextResponse.json({ error: 'Erro ao atualizar a transação' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    return NextResponse.json({
      message: 'Transação excluída com sucesso',
      id: Number(id),
    });
  } catch {
    return NextResponse.json({ error: 'Erro ao excluir a transação' }, { status: 500 });
  }
}
