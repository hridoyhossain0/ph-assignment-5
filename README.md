Name of the project :

  Dev Stack – Technology Stack Builder



Description about the project: 

  Dev Stack is an interactive web application that helps developers explore and build their ideal technology stack. Users can browse technologies by category, view technology details, and add their preferred tools to create a personalized development stack.



Technologies Used:

  React
  TypeScript
  Json
  Tailwind CSS
  Daisyui tailwindcss
  React-icons
  React-Toastify
  vite



Three Features:

  1. Technology Explorer – Browse a wide range of frontend, backend, database, programming, and development tools.

  2. Add to Stack – Select technologies and build your own personalized development stack.

  3. Technology Details – View each technology's category, difficulty level, experience level, and rating before adding it to your stack. 





There is short and simple Question & Answer:



i. What is JSX, and why is it used in React?

  Ans:  jsx like having multiple separated languages file like html,css and js combine in one which have html hypertext in js version. While JSX handles combining HTML + JS, React projects often bring CSS into the same ecosystem as well through several common patterns



ii. What is the difference between props and state?

  Ans:  When Component A passes props to Component B, Component B cannot change that main value.Other hand If Component B receives a value as an initial state (or creates its own state), Component B can change that value locally using a setter function (like setCount).



iii. What does the useState hook do, and where did you use it in this project?

  Ans:  When i update state using useState, React automatically re-renders the component to show the updated data on the screen. i don't need to manually refresh the page or manipulate the DOM directly.



iv. What does the useEffect hook do, and why did you need it to load the JSON data?

  Ans: I used useEffect to fetch the JSON data when the component loads, so the technology information can be displayed dynamically.I use it for fetching data, loading files, updating the document title, or interacting with APIs. In my project, I used useEffect to fetch the JSON data when the component first renders. 



v. Why does every item in a .map() list need a unique key prop?

  Ans: We use a unique key prop in .map() so React can uniquely identify each list item and efficiently update the UI when the list changes.if we remove in items on it key help to find a specific  item is remove.



vi. What is conditional rendering? Show one place you used it (example: the empty stack message)

  And: Conditional rendering means showing different UI based on a condition. In my project, I used it to show an empty stack message when there are no technologies added to the stack.



vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

  And: We pass data from the parent component to the child using props. And if the child needs to send some data back to the parent, we pass a function from the parent and call that function inside the child.