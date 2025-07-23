import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

const mockTimes = ["17:00", "18:00"];

test("shows validation errors on empty form submission", () => {
  render(<BookingForm availableTimes={mockTimes} />);
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/valid email required/i)).toBeInTheDocument();
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  expect(screen.getByText(/at least 1 guest required/i)).toBeInTheDocument();
});

test("submits successfully with valid data", () => {
  render(<BookingForm availableTimes={mockTimes} />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Fatito" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "fatito@example.com" } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-07-30" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(screen.getByText(/reservation submitted successfully/i)).toBeInTheDocument();
});
