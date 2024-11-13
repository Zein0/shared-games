# GamesList Component - Xbox & PlayStation Game Library

This **GamesList** component is a React-based user interface that provides a unified game library for Xbox Ultimate Game Pass and PlayStation Plus Deluxe users. It displays available games, allowing users to filter games that are present on both platforms, manage game display settings, and navigate through paginated lists of games.

## Features

- **Unified Game Library**: Displays games from both Xbox Ultimate Game Pass and PlayStation Plus Deluxe subscriptions.
- **Image Visibility Toggle**: Users can toggle between showing and hiding game images for a simpler or quicker browsing experience.
- **Pagination**: Displays games in a paginated manner, with navigation buttons and an input field for jumping to a specific page.
- **Game Details**: Shows game titles, images, availability on platforms, and tags.

## Technologies Used

- **React**: Framework for building the user interface.
- **TailwindCSS**: For styling the UI, including buttons, badges, and layout.
- **Lucide Icons**: Used for enhancing the UI with icons like Gamepad, Eye, and EyeOff.
- **Local Storage**: Stores image display preferences, allowing the user's choice to persist between sessions.

## Component Structure

- **useEffect Hook**: Fetches data from the backend API for Xbox and PlayStation games when the component mounts.
- **useState Hook**: Manages state variables such as game data, image visibility, pagination, and user page input.
- **Fetch Logic**: Retrieves game data from the provided backend API (`/api/games/ps` and `/api/games/xbox`). Merges games from both platforms and handles common games between Xbox and PlayStation.
- **UI Components**: Uses buttons, cards, and badges to create an engaging and responsive layout for users.

## Usage Instructions

### Prerequisites

- **Node.js**: Make sure Node.js is installed to run the development server.
- **Backend API**: The GamesList component expects a backend API to be running, providing data on PlayStation and Xbox games.
- **Environment Variables**: The base URL for the API should be provided as `REACT_APP_API_URL` in your environment.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Zein0/shared-games
   cd shared-games
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of your project and add the base URL for the backend API:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```

### Running the Project

To start the project in development mode, run:

```bash
npm start
```

This will start the React development server, and the GamesList component will be available on `http://localhost:3000`.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

This will create a `build` folder containing the production-ready version of your app. You can serve this build using any static server, such as `serve`:

```bash
npx serve -s build
```

## Key Functionalities

### 1. Fetching Game Data

- Fetches game lists from the backend APIs for both PlayStation and Xbox.
- Uses `Promise.all()` to perform parallel requests, ensuring faster data retrieval.
- Merges data from both platforms, highlighting games available on both subscriptions.

### 2. Image Toggle

- A button to show or hide images of the games.
- Uses `localStorage` to persist the user's choice even after refreshing the page.

### 3. Pagination

- Displays 50 games per page.
- Allows users to navigate using "Previous" and "Next" buttons.
- Supports inputting a page number to directly jump to a specific page.

### 4. Game Cards

- Each game is displayed in a card layout.
- Shows game title, an image (if enabled), tags, and the platforms the game is available on.
- Uses badges to denote which platforms the game supports.

## Dependencies

- **React**: Used for building the main UI.
- **TailwindCSS**: Provides modern and responsive styling.
- **Lucide-react**: For icons used in the UI, enhancing visual elements.

### Environment Variables

Ensure that the following environment variables are set in your `.env` file for development and production:

- **REACT\_APP\_API\_URL**: The base URL for the backend API endpoint.

## Deployment

The application is deployed on **Netlify** and can be accessed via the following link: [Games Library on Netlify](https://cross-platform-games.netlify.app)

To deploy this component as part of your web application, follow the standard React deployment steps:

1. **Build the Production Version**: Run `npm run build`.
2. **Deploy the Build Folder**: Use any web hosting platform like Vercel, Netlify, or any server to host the build.

Make sure to also deploy the backend API that provides the game data and configure the `REACT_APP_API_URL` accordingly to point to your deployed backend API.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the **MIT License**.

## Contact

If you have any questions, suggestions, or feedback, please contact me at [ahmadalzein06@gmail.com](mailto\:ahmadalzein06@gmail.com).

