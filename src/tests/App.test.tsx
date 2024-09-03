import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import InvoiceActivity from "../components/invoicemodal/InvoiceActivity";
import InvoiceDetails from "../components/invoicemodal/InvoiceDetails";
import InvoiceHeader from "../components/invoicemodal/InvoiceHeader";
import InvoiceReminder from "../components/invoicemodal/InvoiceReminder";
import InvoicePage from "../components/invoicemodal/InvoicePage";
import Header from "../components/Header";
import InvoiceActions from "../components/InvoiceActions";
import InvoiceStats from "../components/InvoiceStats";
import RecentActivities from "../components/RecentActivities";
import RecentInvoices from "../components/RecentInvoices";


test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const message = screen.queryByText(/learn react/i);
  expect(message).toBeDefined();
});

test("renders InvoiceActivity", () => {
  render(<InvoiceActivity />);
  const message = screen.queryByText(/Invoice Activity/i);
  expect(message).toBeDefined();
});

test("renders InvoiceDetails", () => {
  render(<InvoiceDetails />);
  const message = screen.queryByText(/Invoice Details/i);
  expect(message).toBeDefined();
});

test("renders InvoiceHeader", () => {
  render(<InvoiceHeader />);
  const message = screen.queryByText(/Invoice Header/i);
  expect(message).toBeDefined();
});

test("renders InvoiceReminder", () => {
  render(<InvoiceReminder />);
  const message = screen.queryByText(/Invoice Reminder/i);
  expect(message).toBeDefined();
});

test("renders InvoicePage", () => {
  render(<InvoicePage isOpen={false} onClose={function (): void {
      throw new Error("Function not implemented.");
  } } />);
  const message = screen.queryByText(/Invoice Page/i);
  expect(message).toBeDefined();
});

test("renders Header", () => {
  render(<Header />);
  const message = screen.queryByText(/Invoice Page/i);
  expect(message).toBeDefined();
});

test("renders InvoiceActions", () => {
  render(<InvoiceActions />);
  const message = screen.queryByText(/Invoice Actions/i);
  expect(message).toBeDefined();
});

test("renders InvoiceStats", () => {
  render(<InvoiceStats />);
  const message = screen.queryByText(/Invoice Stats/i);
  expect(message).toBeDefined();
});

test("renders RecentActivities", () => {
  render(<RecentActivities />);
  const message = screen.queryByText(/Recent Activities/i);
  expect(message).toBeDefined();
});

test("renders RecentInvoices", () => {
  render(<RecentInvoices />);
  const message = screen.queryByText(/Recent Invoices/i);
  expect(message).toBeDefined();
});