import React from "react";

type DetailItemProps = {
  label: string;
  value?: string | null;
};

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}:</p>
      <p className="text-base font-medium text-gray-800 mt-1">{value || "-"}</p>
    </div>
  );
};

export default DetailItem;
