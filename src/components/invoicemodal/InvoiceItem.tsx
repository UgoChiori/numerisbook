import React from "react";

interface InvoiceItemProps {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  description,
  quantity,
  unitPrice,
  total,
}) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <div>
        <p>{description}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
      </div>
      <div className="text-right border border-black">
        <p>Unit Price: ${unitPrice.toLocaleString()}</p>
        <p>Total: ${total.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default InvoiceItem;
