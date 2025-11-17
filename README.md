#react-realtime-chat-app

COMPANY:CODTECH IT SOLUTIONS

NAME:SAIVARDHAN ULLEMGALA

INTERN ID:CT06DR482

DOMAIN:React.js Web Development

DURATION:6 Weeks

MENTOR:Neela Santhosh Kumar

*DESCRIPTION*:This project is a fully functional Real-Time Chat Application built using React.js and Socket.io, developed as part of a frontend assignment focused on real-time communication, event handling, and modern UI structuring. The main objective of this task was to create a chat platform that allows multiple users to communicate instantly, participate in group chats, and view typing indicators that show live user activity. The application uses WebSocket-based communication via Socket.io to exchange messages between users without requiring page reloads, providing a smooth and interactive messaging experience.

The app allows users to enter a username, join a chat room, and begin chatting with other users in real time. Messages are transmitted instantly to all connected clients in the same room through Socket.io’s event-based architecture. In addition to messaging, the app includes typing indicators, notifying other users when someone is typing, which enhances the chat’s interactivity and brings it closer to the feel of professional messaging apps. The interface automatically scrolls to the latest message, ensuring a seamless user experience.

For the frontend, I used React.js to take advantage of its component-based structure, efficient rendering, and hook-driven state management. Core React concepts such as useState, useEffect, and conditional rendering were used to manage chat states, track typing status, and update the UI in response to incoming socket events. The application structure includes reusable components such as the Join Screen, Chat Window, Message List, and Input Box, making the project well-organized and easy to maintain. The clean separation of components ensures that the app remains scalable as new features are added.

The backend was created using Node.js, Express.js, and Socket.io Server, handling all real-time connections, room management, and message broadcasting. The server listens for socket events such as "message", "typing", "stopTyping", and "joinRoom" and emits appropriate responses to all connected clients. This setup forms the backbone of the real-time communication system.

To maintain a simple and attractive visual design, I used modern CSS (or Tailwind CSS if applied) to style the user interface. The UI is fully responsive, ensuring that the chat app works smoothly across mobile, tablet, and desktop devices. Elements such as message bubbles, input areas, indicators, and headers were built with clarity and usability in mind, helping users navigate the app effortlessly.

The development was done using Visual Studio Code (VS Code), which provided powerful tools for debugging, linting, and managing both the client and server environments efficiently. Git and GitHub were used for version control, making the project easy to track, update, and deploy. Hosting options such as Render, Vercel, or Railway can be used to deploy both the frontend and backend.

Overall, this Real-Time Chat Application demonstrates my ability to build a complete, interactive, and scalable real-time system from scratch using React and Socket.io. It reflects my understanding of event-driven architecture, client–server communication, responsive UI design, and modern frontend development practices. The project showcases my capability to create real-world applications that require instant updates, synchronized data flow, and smooth user interaction


*OUTPUT*:

<img width="655" height="565" alt="Image" src="https://github.com/user-attachments/assets/644f81a5-fcd1-47b3-a5d4-b6a3b9e20223" />


<img width="849" height="686" alt="Image" src="https://github.com/user-attachments/assets/9b274007-1ed3-4864-81bd-fdf79a692bf7" />


<img width="700" height="236" alt="Image" src="https://github.com/user-attachments/assets/3f91e3b4-6e1b-4ed0-b99e-b963f3747fcb" />




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
