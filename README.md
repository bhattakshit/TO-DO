# Todo List App

A simple and intuitive Todo List application built with React and Redux Toolkit, with data persistence using local storage. Manage your tasks efficiently with the ability to add, edit, delete, and toggle completion status.

![UI Preview](src/assets/capture.png)

## Features

- **Add Todo**: Add new tasks to your list.
- **Edit Todo**: Modify existing tasks.
- **Delete Todo**: Remove tasks from your list.
- **Toggle Completion**: Mark tasks as completed or pending.
- **Persistent State**: Todos are saved to and loaded from local storage, ensuring data is retained across page reloads.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Local Storage**: For persisting data.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Add a Task**: Enter your task in the input field and click "Add" or press Enter.
2. **Edit a Task**: Click the edit icon (✏️) next to a task to make changes. Click the save icon (📁) to save the changes.
3. **Delete a Task**: Click the delete icon (❌) next to a task to remove it.
4. **Toggle Completion**: Click the checkbox to mark a task as completed or pending.

## Code Structure

- **`src/store/todoSlice.js`**: Contains the Redux slice for managing todos.
- **`src/components/ToDoForm.js`**: Component for adding new todos.
- **`src/components/ToDoitem.js`**: Component for displaying and interacting with individual todos.
- **`src/App.js`**: Main application component.

## Contributing

Contributions are welcome! Please open an issue or a pull request if you'd like to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
