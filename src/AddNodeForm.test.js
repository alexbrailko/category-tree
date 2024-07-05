import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddNodeForm from './AddNodeForm';

test('calls addNode with correct arguments when form is submitted and clears inputs after form submission', () => {
  const mockAddNode = jest.fn();
  render(<AddNodeForm addNode={mockAddNode} />);

  const parentIdInput = screen.getByTestId("parentIdInput");
  const newNodeNameInput = screen.getByTestId("newNodeInput");
  const submitButton = screen.getByTestId("addNode");

  fireEvent.change(parentIdInput, { target: { value: '1' } });
  fireEvent.change(newNodeNameInput, { target: { value: 'New Node' } });
  fireEvent.click(submitButton);

  expect(mockAddNode).toHaveBeenCalledWith(1, 'New Node');
  expect(parentIdInput.value).toBe('');
  expect(newNodeNameInput.value).toBe('');
});