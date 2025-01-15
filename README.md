# UpTask

UpTask is a React.js-based Employee Task Management application that facilitates task assignment and tracking. Admin users can assign tasks to employees, who can then view, accept, and complete their tasks. The application leverages localStorage for seamless data management.

## Features

- **Admin Functionality:**

  - Assign tasks to employees.
  - Track task statuses: New, Active, Failed, and Completed.

- **Employee Functionality:**

  - View assigned tasks.
  - Accept or reject tasks.
  - Update task progress and mark as completed.

- **Task Categories:**

  - Categorize tasks (e.g., Design, Development).

- **User-Friendly Interface:**

  - Responsive and intuitive UI for both admin and employees.

## Technology Stack

- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Context API
- **Build Tool:** Vite
- **Data Storage:** localStorage

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/uptask.git

2. Navigate to the project directory:

   cd uptask

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. **Admin Login:**

   - Access the admin dashboard to assign and manage tasks.

2. **Employee Login:**

   - View and manage tasks assigned by the admin.

3. **Task Management:**

   - Accept tasks, track their progress, and mark them as completed.

## Folder Structure

- src/
  - components/ - Reusable components.
  - context/ - Context API for state management.
  - pages/ - Main application pages.
  - styles/ - Custom styling files.

## Future Enhancements

- Integration with a backend database for persistent data storage.
- Authentication system for secure access.
- Notifications for task updates.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   git checkout -b feature-name
3. Commit your changes:
   git commit -m 'Add new feature'
4. Push to the branch:
   git push origin feature-name
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Empower your team with UpTask – streamline task management with ease!**

