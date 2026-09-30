# RJS-P14 – useEffect Hook

## Practical No. 14

### Aim

To create a React application using the `useEffect` Hook to display a message after the page/component loads.

---

## Problem Statement

Create a React application that uses the `useEffect` Hook to display the following message after the page loads:

"Welcome! The page has loaded successfully."

The application should use `useState` to store the message and `useEffect` to update the message when the component is loaded.

---

## Learning Objectives

After completing this practical, students will be able to:

1. Use the `useState` Hook.
2. Use the `useEffect` Hook.
3. Understand the component lifecycle.
4. Execute code after a component loads.
5. Display dynamic data using state.

---

## Requirements

The application must:

- Use `useState`.
- Use `useEffect`.
- Create a message state variable.
- Set the message inside `useEffect`.
- Use an empty dependency array `[]`.
- Display the message on the webpage.

---

## Expected Message

After the page loads, display:

Welcome! The page has loaded successfully.

---

## Project Structure

```text
RJS-P14/
│
├── .github/
│   └── workflows/
│       ├── autograding.yml
│       └── deploy.yml
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   └── index.js
│
├── tests/
│   └── test.js
│
├── .babelrc
├── package.json
├── package-lock.json
├── webpack.config.js
└── README.md
