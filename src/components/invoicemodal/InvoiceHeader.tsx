import React, { useState } from "react";
import jsPDF from "jspdf";

const InvoiceHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Invoice -  1023494 - 2304", 20, 20);
        doc.text("View the details and activity of this invoice", 20, 30);
        doc.save("invoice-1023494-2304.pdf");
    }

    return (
        <header className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
            <div className="flex flex-col items-start w-full md:w-auto">
                <h1 className="text-xl md:text-2xl font-bold">Invoice - 1023494 - 2304</h1>
                <p className="text-gray-500 mt-1 mb-2">View the details and activity of this invoice</p>
                <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium mt-4 mb-4 text-sm md:text-base uppercase">
                    Partial Payment
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
                <button 
                    onClick={downloadPDF}
                    className="w-full md:w-[240px] md:h-[40px] bg-white border text-blue-600 uppercase px-3 py-1 rounded-full font-medium text-sm md:text-base">
                    Download as PDF
                </button>
                <button className="w-full md:w-[240px] md:h-[40px] bg-blue-600 text-white px-3 py-1 rounded-full font-medium text-sm md:text-base uppercase">
                    Send Invoice
                </button>
                <div className="relative">
                    <button 
                        onClick={toggleDropdown}
                        className="w-full md:w-[80px] h-[40px] bg-white border uppercase text-gray-600 px-2 py-1 rounded-full font-medium text-sm md:text-base">
                        More
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-full md:w-48 bg-white shadow-lg rounded-lg">
                            <ul>
                                <li className="px-2 py-1 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer text-sm md:text-base">
                                    Duplicate Invoice
                                </li>
                                <li className="px-2 py-1 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer text-sm md:text-base">
                                    Get Sharable Link
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default InvoiceHeader;
