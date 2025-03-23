# Property Listings Grid

This project implements an adaptive grid for displaying property listings with custom pagination and an image slider, built using React.

## Features

- **Responsive Property Grid**: Displays property listings in a responsive grid layout that adapts to different screen sizes
- **Custom Image Slider**: Allows users to navigate through property images without using any external libraries
- **Custom Pagination**: Implements pagination functionality from scratch using React hooks
- **API Integration**: Fetches property data from a remote API
- **Error Handling**: Provides appropriate error messages and retry functionality
- **Loading States**: Shows loading indicators while fetching data

## Implementation Details

The project is built using React and hooks, with a focus on clean, maintainable code. All components are custom-built without relying on external libraries for core functionality like the image slider or pagination.

### Project Structure

- `src/api/`: Contains the API client for fetching properties
- `src/components/`: Contains all React components
- `src/hooks/`: Contains custom hooks for pagination and image slider functionality

### Key Components

- `PropertyGrid`: Main component that manages data fetching and displays the property grid
- `PropertyCard`: Displays a single property with its details and image slider
- `Pagination`: Custom pagination component
- `ImageSlider`: Implemented within each card for navigating through property images

## Installation and Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Building for Production

To create a production build:

```
npm run build
```

The build output will be in the `dist` directory.

## Technologies Used

- React
- React Hooks (useState, useEffect)
- Tailwind CSS for styling
- Vite for build tooling

## API Information

The property data is fetched from:

```
https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects
```

## Future Enhancements

- Filtering and searching properties
- Enhanced property details page
- Favoriting/saving properties
- Additional pagination options
# card-grid
