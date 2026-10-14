# React Native + TypeScript Learning Journey 🚀

Welcome to my React Native learning journey!

I am learning **React Native with TypeScript** step by step by building small projects and gradually increasing their complexity. This repository documents my progress, experiments, and practical experience while learning mobile application development.

My goal is to strengthen my understanding of React Native fundamentals, reusable components, state management, animations, navigation, API integration, and third-party libraries by building real projects.

## 📚 Table of Contents

- [What I'm Learning](#-what-im-learning)
- [Tech Stack](#️-tech-stack)
- [Projects](#-projects)
  - [Project 1 — React Native Fundamentals](#project-1--react-native-fundamentals)
  - [Project 2 — UI Components & Interactions](#project-2--ui-components--interactions)
  - [Project 3 — Password Generator](#project-3--password-generator-)
  - [Project 4 — Background Changer](#project-4--background-changer-)
  - [Project 5 — Roll The Dice](#project-5--roll-the-dice-)
  - [Project 6 — Currency Converter](#project-6--currency-converter-)
  - [Project 7 — Tic-Tac-Toe](#project-7--tic-tac-toe-️)
  - [Project 8 — Moodify Music Player](#project-8--moodify-music-player-)
- [Key Learnings](#-key-learnings)
- [Getting Started](#-getting-started)
- [Future Goals](#-future-goals)
- [Connect With Me](#-connect-with-me)

---

## 📖 What I'm Learning

- React Native fundamentals
- TypeScript with React Native
- Components and JSX
- Props and `PropsWithChildren`
- State management with `useState`
- Lifecycle and side effects with `useEffect`
- Event handling
- `Pressable`, `TouchableOpacity`, and buttons
- `TextInput`
- `StyleSheet`
- Flexbox layouts
- Conditional rendering
- User input and form handling
- Forms and validation
- `FlatList`
- Reusable components
- Random number generation
- Dynamic styling
- Animations
- React Native APIs
- Third-party library integration
- Navigation
- API integration
- Audio playback and controls

---

## 🛠️ Tech Stack

**Languages**
- TypeScript
- JavaScript

**Frameworks and Libraries**
- React Native
- React
- Formik
- Yup
- React Native Bouncy Checkbox
- React Native Community Slider
- React Native Track Player migration to `@rntp/player`

**Tools**
- Git
- GitHub
- Visual Studio Code
- Android Studio

---

# 🚀 Projects

## Project 1 — React Native Fundamentals

A basic project created to understand the fundamentals of React Native and mobile UI development.

### Concepts Learned
- Components
- JSX
- `View`
- `Text`
- `SafeAreaView`
- `StyleSheet`
- Flexbox
- Basic styling
- Layouts
- `StatusBar`

---

## Project 2 — UI Components & Interactions

A project focused on creating reusable UI elements and handling user interactions.

### Concepts Learned
- Components
- Props
- `useState`
- Buttons
- `Pressable`
- `TouchableOpacity`
- Event handling
- Conditional rendering
- Dynamic styling

---

## Project 3 — Password Generator 🔐

A password generator that allows users to generate random passwords based on selected options.

### Features
- Choose password length
- Include lowercase letters
- Include uppercase letters
- Include numbers
- Include symbols
- Generate random passwords
- Reset the form
- Input validation

### Concepts Learned
- `useState`
- Formik
- Yup
- Bouncy Checkbox
- Form validation
- Random string generation
- `Math.random()`
- `Math.floor()`
- Conditional rendering
- User input

---

## Project 4 — Background Changer 🎨

A simple application that generates a random background color whenever the user presses a button.

### Features
- Generate random colors
- Change the background dynamically
- Generate hexadecimal colors
- Handle button interactions

### Concepts Learned
- `useState`
- `TouchableOpacity`
- `onPress`
- Dynamic styling
- `backgroundColor`
- `Math.random()`
- `Math.floor()`
- Loops
- Hexadecimal colors
- Inline styles

---

## Project 5 — Roll The Dice 🎲

A dice rolling application where users can roll a dice and get a random result.

### Features
- Random dice number generation
- Dynamic dice image
- Dice rotation animation
- Dice scale animation
- Interactive `Pressable` button
- Display the rolled number

### Concepts Learned
- `useState`
- `useRef`
- `Animated`
- `Animated.timing`
- `Animated.parallel`
- `Animated.sequence`
- `Pressable`
- `onPress`
- `Math.random()`
- `Math.floor()`
- `switch` statements
- Dynamic image rendering
- Image props
- Rotation animation
- Scale animation

---

## Project 6 — Currency Converter 💱

A currency converter that converts Indian Rupees into different currencies.

### Features
- Enter an amount in INR
- Select a target currency
- Convert currency
- Display the converted amount
- Highlight the selected currency
- Input validation
- Error notifications

### Concepts Learned
- `useState`
- `FlatList`
- `Pressable`
- `TextInput`
- Props
- Reusable components
- Conditional styling
- Currency conversion logic
- `parseFloat()`
- `isNaN()`
- Template literals
- `toFixed()`
- Snackbar notifications

---

## Project 7 — Tic-Tac-Toe ❌⭕️

A two-player Tic-Tac-Toe game built with React Native.

### Features
- 3 × 3 game board
- Player X and Player O
- Alternating turns
- Winner detection
- Draw detection
- Prevent selecting an already-filled position
- Restart game functionality
- Display the current player's turn
- Display a winner message
- Dynamic X and O symbols

### Concepts Learned
- `useState`
- `FlatList`
- `Pressable`
- Props
- Reusable components
- Conditional rendering
- Array state
- Updating arrays without directly modifying state
- Game logic
- Winner detection
- Draw detection
- `includes()`
- Multiple `if / else if` conditions
- Dynamic component rendering
- Snackbar notifications

### Winning Combinations

The game checks all eight possible winning combinations:

```text
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

---

## Project 8 — Moodify Music Player 🎵

Moodify is a music player application built with React Native and TypeScript. It features a dark-themed interface and demonstrates audio playback, track navigation, album artwork, song metadata, and playback progress controls.

### Features
- Play and pause music
- Navigate to the next and previous tracks
- Display song titles and artist information
- Display album names
- Show album artwork for the current track
- Interactive playback progress slider
- Seek to a specific position in a song
- Display elapsed playback time
- Display remaining playback time
- Configure the player's volume programmatically

### Concepts Learned
- React Native with TypeScript
- Reusable components
- React Hooks: `useState` and `useEffect`
- Player-state hooks
- Third-party library integration
- Audio player initialization
- Playlist and track management
- Playback controls
- Dynamic rendering of song metadata
- Displaying remote images using `Image`
- Implementing a seekable progress slider
- Formatting time in minutes and seconds
- Asynchronous functions with `async/await`
- Error handling with `try/catch`
- Organizing code into screens, components, and services

### Technologies Used
- React Native
- TypeScript
- `@rntp/player`
- `@react-native-community/slider`

### Key Components
- `MusicPlayer.tsx` — Main music player screen
- `SongInfo.tsx` — Displays song metadata
- `SongSlider.tsx` — Displays playback progress and supports seeking
- `ControlCenter.tsx` — Handles playback controls
- `musicPlayerServices.js` — Handles player initialization and playlist loading
- `constants.ts` — Stores playlist data and track metadata

### What I Practiced

This project helped me understand how to integrate an audio playback library into a React Native application, connect player state to the UI, manage a playlist, and implement interactive playback controls.

---

## 💡 Key Learnings

Throughout these projects, I have been practicing:

- Building mobile interfaces using React Native
- Writing typed components with TypeScript
- Passing data through props
- Managing state and handling user interactions
- Creating reusable components
- Implementing forms and validation
- Working with arrays and dynamic lists
- Building animations and interactive UI elements
- Implementing game logic
- Performing basic currency conversion
- Integrating third-party libraries
- Managing audio playback and track metadata
- Debugging and improving application functionality
- Using Git and GitHub to maintain project history

---

## ⚙️ Getting Started

Follow these steps to run a React Native project from this repository.

### Prerequisites

Make sure you have installed:

- Node.js and npm
- React Native development dependencies
- Android Studio and an Android emulator, or a compatible Android device
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Anirudh0024/React-Projects.git
```

### 2. Navigate to the project directory

```bash
cd React-Projects
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Metro

```bash
npm start
```

### 5. Run the Android application

Open another terminal in the project directory and run:

```bash
npm run android
```

**Note:** This repository contains multiple learning projects. The current entry point determines which project launches. Some projects may require additional configuration or dependencies before running.

---

## 🔮 Future Goals

I plan to continue improving my React Native skills by exploring:

- React Navigation
- API integration and asynchronous data fetching
- Better state management
- Advanced animations
- Improved UI/UX design
- Local data storage
- Authentication
- More complex mobile applications
- Performance optimization
- Testing and debugging

---

## 👨‍💻 Connect With Me

**GitHub:** [Anirudh0024](https://github.com/Anirudh0024)

I'm continuously learning, experimenting, and building projects to improve my mobile development skills.

If you find this repository interesting, feel free to explore the projects and follow my learning journey!

⭐ If you find this repository useful, consider giving it a star.

---

*Learning by building, one project at a time.* 🚀
