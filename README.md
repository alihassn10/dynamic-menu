# Dynamic Menu React App

![Dynamic Menu](https://github.com/alihassn10/dynamic-menu/blob/main/public/demo.png)

This repository contains a Dynamic Menu React App that allows you to create and customize menus with ease. The app provides a user-friendly interface for adding, editing, and deleting menu items, as well as arranging them in a hierarchical structure. The app is built using React and utilizes a Firebase backend for storing menu data.

You can access the live demo of the app here: [Dynamic Menu Demo](https://temp-react-menu.netlify.app/)

## Features

- **User-Friendly Interface:** The app offers an intuitive interface for creating, editing, and organizing menu items.

- **Dynamic Hierarchical Structure:** Create a hierarchical menu structure with parent and child items to represent various menu levels.

- **Real-Time Updates:** The app uses Firebase to provide real-time updates to the menu data, ensuring seamless synchronization across multiple users.

- **Customizable:** Easily customize menu item names, descriptions, prices, and images to match your needs.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alihassn10/dynamic-menu.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dynamic-menu
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and set up Firestore database. You can follow the official guide on how to [add Firebase to your web app](https://firebase.google.com/docs/web/setup).

5. After setting up the Firebase project, navigate to the Firebase Console, go to Project Settings, and copy your Firebase configuration object.

6. Create a `.env.local` file in the root directory of the project and add your Firebase configuration:

   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   REACT_APP_MEASUREMENT_ID=your_measurement_id
   ```

7. Start the development server:

   ```bash
   npm start
   ```

8. The app should now be running locally. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the app.

## Usage

1. Upon opening the app, you will see the existing menu items displayed in a tree-like structure.

2. To add a new menu item, click the "Add Item" button, provide the necessary details, and click "Save."

3. To edit an existing menu item, click the "Edit" icon next to the item, make your changes, and click "Save."

4. To delete a menu item, click the "Delete" icon next to the item.

5. You can rearrange menu items by dragging and dropping them within the tree structure.

## Deployment

You can deploy your own instance of this app using platforms like Netlify, Vercel, or GitHub Pages. Simply follow their deployment guides and provide your Firebase configuration as environment variables during the deployment process.

## Credits

This app was developed by [Your Name] and is provided under the [MIT License](LICENSE).

## Contact

If you have any questions, issues, or suggestions, please feel free to [open an issue](https://github.com/alihassn10/dynamic-menu/issues) on the GitHub repository.

---

Enjoy creating dynamic menus with ease!
