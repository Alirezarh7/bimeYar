import React from "react";

// --- Type Definitions ---
interface DataItem {
  label: string;
  value: string | number;
}

interface Section {
  title: string;
  icon: React.ReactNode;
  data: DataItem[];
}

interface DetailsCardProps {
  title: string;
  sections: Section[];
  children?: React.ReactNode; // For action buttons
}

const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  sections,
  children,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[var(--card)] text-[var(--card-foreground)] rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>

      {sections.map((section, index) => (
        <div key={index} className={index < sections.length - 1 ? "mb-8" : ""}>
          {/* Section Header */}
          <div className="flex items-center gap-x-2 mb-4 pb-2 border-b border-[var(--hover)]">
            <span className="text-[var(--primary)]">{section.icon}</span>
            <h3 className="font-bold text-[var(--primary)]">{section.title}</h3>
          </div>

          {/* Section Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            {section.data.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col">
                <span className="text-[var(--muted)]">{item.label}</span>
                <span className="font-semibold mt-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Action buttons can be passed as children */}
      {children && <div className="mt-8 flex justify-end">{children}</div>}
    </div>
  );
};

export default DetailsCard;
