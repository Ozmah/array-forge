# Multi-Theme Portfolio with React and Tailwind CSS

This project is a professional web portfolio with a multiple theme system, designed to showcase development skills and frontend adaptability.

## Main Features

-   **Complete multiple theme system**: Switch between different visual designs with a single click
-   **Light/dark mode**: Each theme includes day and night versions
-   **Fully responsive design**: Optimal experience on mobile, tablet, and desktop
-   **Modular components**: Well-organized and scalable architecture
-   **Preference persistence**: Saves the user's preferred theme

## Available Themes

1. **Tech Professional**: Modern style with blue and purple tones
2. **Minimalist**: Clean and elegant design in black and white
3. **Retro 90s**: Inspired by 90s aesthetics

## Technologies Used

-   **React**: Frontend library for creating interfaces
-   **Vite**: Fast build tool for development
-   **TailwindCSS**: Utility CSS framework
-   **Context API**: For global theme state management
-   **CSS Variables**: Dynamic implementation of theme-specific styles

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation with theme selector
│   ├── Hero.jsx           # Main presentation section
│   ├── Projects.jsx       # Project gallery
│   ├── Skills.jsx         # Technical skills visualization
│   ├── Experience.jsx     # Professional timeline
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Page footer
│   ├── Portfolio.jsx      # Main container
│   └── ThemeSwitcher.jsx  # Theme selector
├── context/
│   └── ThemeContext.jsx   # Context for theme management
├── App.jsx                # Main component
├── index.css              # Base styles and themes
└── main.jsx               # Entry point
```

## How the Theme System Works

The system uses CSS Variables combined with Tailwind utility classes and React Context API:

1. Each theme defines its CSS variables in `index.css`
2. When changing themes, classes are applied to the `body` element
3. Components use classes like `bg-theme-primary` that reference the current theme's variables
4. TailwindCSS is configured to use these variables
5. Theme state is maintained in a React context
6. Preferences are saved in localStorage

## Installation and Usage

1. Clone the repository

    ```bash
    git clone https://github.com/your-username/multi-theme-portfolio.git
    cd multi-theme-portfolio
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Start development server

    ```bash
    npm run dev
    ```

4. For production
    ```bash
    npm run build
    ```

## Customization

-   Modify theme colors in `index.css`
-   Add new themes by extending CSS variables and updating `ThemeContext.jsx`
-   Customize content by editing the corresponding components

## Future Improvements

-   AI Integration
-   API Integration examples
-   Backend with PHP

## License

MIT
