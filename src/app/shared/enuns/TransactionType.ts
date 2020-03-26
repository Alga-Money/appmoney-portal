export class TransactionType {

  static readonly items: any[] = [
    {
      text: 'Despesa',
      value: 0
    },
    {
      text: 'Receita',
      value: 1
    },
    {
      text: 'Transação',
      value: 2
    },
  ];

  static getTextByValue(value: number): string {
    const result = TransactionType.items.find(item => item.value === value);
    return result
      ? result.text
      : '';
  }
}
