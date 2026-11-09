import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type Currency = 'INR' | 'USD';

interface BankingPreferences {
  currency: Currency;
  region: string;
  setCurrency: (currency: Currency) => void;
}

const BankingPreferencesContext = createContext<BankingPreferences | null>(null);

export function BankingPreferencesProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');
  const value = useMemo(
    () => ({ currency, region: 'India Operations', setCurrency }),
    [currency],
  );

  return (
    <BankingPreferencesContext.Provider value={value}>
      {children}
    </BankingPreferencesContext.Provider>
  );
}

export function useBankingPreferences() {
  const context = useContext(BankingPreferencesContext);
  if (!context) {
    throw new Error('useBankingPreferences must be used within BankingPreferencesProvider');
  }
  return context;
}
