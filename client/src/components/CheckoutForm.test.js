import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const headerTxt = screen.getByText(/checkout form/i);

    expect(headerTxt).toBeTruthy();
});

// First Name:, Last NAme, Address:, City:, State:, Zip:
test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addrInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button =screen.getByTestId("button");

    expect(fNameInput).toBeTruthy();
    expect(lNameInput).toBeTruthy();
    expect(addrInput).toBeTruthy();
    expect(cityInput).toBeTruthy();
    expect(stateInput).toBeTruthy();
    expect(zipInput).toBeTruthy();
    expect(button).toBeTruthy();

    fireEvent.change(fNameInput, {target: {value: 'Aaron'}});
    fireEvent.change(lNameInput, {target: {value: 'Burns'}});
    fireEvent.change(addrInput, {target: {value: '1100 Cloudwalk Canyon Drive'}});
    fireEvent.change(cityInput, {target: {value: 'Chula Vista'}});
    fireEvent.change(stateInput, {target: {value: 'California'}});
    fireEvent.change(zipInput, {target: {value: '91911'}});

    expect(fNameInput).toHaveValue('Aaron');
    expect(lNameInput).toHaveValue('Burns');
    expect(addrInput).toHaveValue('1100 Cloudwalk Canyon Drive');
    expect(cityInput).toHaveValue('Chula Vista');
    expect(stateInput).toHaveValue('California');
    expect(zipInput).toHaveValue('91911');

    fireEvent.click(button);

    const formDisplay = await screen.findByTestId("successMessage");

    expect(formDisplay).toHaveTextContent("Aaron");
    expect(formDisplay).toHaveTextContent("Burns");
    expect(formDisplay).toHaveTextContent("Cloudwalk");
    expect(formDisplay).toHaveTextContent("Chula");
    expect(formDisplay).toHaveTextContent("California");
    expect(formDisplay).toHaveTextContent("91911");

    





});
