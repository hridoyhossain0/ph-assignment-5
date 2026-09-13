# Dev Stack – Technology Stack Builder

## Project Description

**Dev Stack** is an interactive web application that helps developers explore and build their ideal technology stack. Users can browse technologies by category, view technology details, and add their preferred tools to create a personalized development stack.

## Technologies Used

* React
* TypeScript
* JSON
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* Vite

## Three Features

### 1. Technology Explorer

Browse a wide range of frontend, backend, database, programming, and development tools.

### 2. Add to Stack

Select technologies and build your own personalized development stack.

### 3. Technology Details

View each technology's category, difficulty level, experience level, and rating before adding it to your stack.

---

## Short & Simple Questions and Answers

### i. What is JSX, and why is it used in React?

**Answer:**
JSX is like having HTML and JavaScript combined in one file. It allows us to write HTML-like syntax inside JavaScript. This makes it easier to create and manage the UI in React.

### ii. What is the difference between props and state?

**Answer:**
When Component A passes props to Component B, Component B cannot directly change the original value. On the other hand, if Component B receives a value as its own state, it can change that value locally using a setter function such as `setCount`.

### iii. What does the useState hook do, and where did you use it in this project?

**Answer:**
`useState` is used to store and manage data that can change in a component. When I update the state using `useState`, React automatically re-renders the component and shows the updated data on the screen. I don't need to manually refresh the page or manipulate the DOM directly.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:**
I used `useEffect` to fetch the JSON data when the component first renders, so the technology information can be displayed dynamically. I use it for fetching data, loading files, updating the document title, or interacting with APIs.

### v. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**
We use a unique `key` prop in `.map()` so React can uniquely identify each list item and efficiently update the UI when the list changes. If an item is removed, the key helps React identify which specific item was removed.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:**
Conditional rendering means showing different UI based on a condition. In my project, I used it to show an empty stack message when there are no technologies added to the stack.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**
We pass data from the parent component to the child using **props**. If the child needs to send some data back to the parent, we pass a function from the parent and call that function inside the child.
