import { createContext, useContext, useState, type ReactNode } from 'react';

interface TabsContextValue {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('WorkspaceTabs components must be used inside WorkspaceTabs');
  return context;
}

export function WorkspaceTabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

WorkspaceTabs.List = function List({ children }: { children: ReactNode }) {
  return <div className="tab-list" role="tablist">{children}</div>;
};

WorkspaceTabs.Trigger = function Trigger({ value, children }: { value: string; children: ReactNode }) {
  const { active, setActive } = useTabs();
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active === value}
      className={active === value ? 'tab active' : 'tab'}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
};

WorkspaceTabs.Panel = function Panel({ value, children }: { value: string; children: ReactNode }) {
  const { active } = useTabs();
  return active === value ? <div role="tabpanel" className="tab-panel">{children}</div> : null;
};
