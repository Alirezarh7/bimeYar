import React from "react";

type DetailItemProps = {
  label: string;
  value?: string | null;
};

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-[var(--foreground)]">{label}:</p>
      <p className="text-base font-medium text-[var(--foreground)] mt-1">{value || "-"}</p>
    </div>
  );
};

export default DetailItem;
