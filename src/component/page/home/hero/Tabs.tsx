

type TabsProps = { children?: React.ReactNode; defaultIndex?: number }
export function Tabs({ children }: TabsProps) {
  return <div>{children}</div>
}

export function TabList({ children }: { children?: React.ReactNode }) {
  return <div className="flex gap-2">{children}</div>
}
export function Tab({ children }: { children?: React.ReactNode }) {
  return <button className="px-3 py-1 rounded-full text-sm border border-transparent hover:border-primary">{children}</button>
}
export function TabPanels({ children }: { children?: React.ReactNode }) {
  return <div className="mt-3">{children}</div>
}
export function TabPanel({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>
}
