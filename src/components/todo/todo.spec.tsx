import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Todos from "./todo";

describe('Todos', () => {
   it('should show my tasks message', () => {
      render(<Todos />);
      expect(screen.getByText('My tasks')).toBeInTheDocument()
   })
   it('should show task input', () => {
      render(<Todos/>)
      const input = screen.getByPlaceholderText('Insert a task name')
      expect(input).toBeInTheDocument()
   })

   it('should show add button', () => {
      render(<Todos />)
      expect(screen.queryByLabelText('Add task')).toBeInTheDocument();
   })

   it('should be able add task on click', async () => {
      render(<Todos/>)
      const input = screen.getByPlaceholderText('Insert a task name')
      const taskTile = 'New task'
      await userEvent.type(input, taskTile)
      screen.getByDisplayValue(taskTile)
      const addButton = screen.getByLabelText('Add task')
      await userEvent.click(addButton)
   })
})