export class Account {
  description: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  accountTypeId: number;
  ignoreOverallBalance: boolean;
  includeDashboard: boolean;
  openingBalance: number;
  AccountType: AccountType;
}

export class AccountType {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
