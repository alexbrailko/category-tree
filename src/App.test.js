import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('adds a new node', () => {
  render(<App />);
  const parentIdInput = screen.getByTestId("parentIdInput");
  const newNodeNameInput = screen.getByTestId("newNodeInput");
  const addButton = screen.getByTestId("addNode");

  fireEvent.change(parentIdInput, { target: { value: '1' } });
  fireEvent.change(newNodeNameInput, { target: { value: 'New Node' } });
  fireEvent.click(addButton); 

  expect(screen.getByText(/New Node/i)).toBeInTheDocument();
});  