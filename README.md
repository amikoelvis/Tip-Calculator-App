# Frontend Mentor - Tip Calculator App Solution

This is a solution to the [Tip Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Calculate the correct tip and total cost of the bill per person.

### Screenshot

![Tip Calculator Screenshot](./images/screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/yourusername/tip-calculator) <!-- Replace with your repo URL -->
- Live Site URL: [Live Demo](https://yourusername.github.io/tip-calculator) <!-- Replace with your live site URL -->

## My Process

### Built With

- Semantic HTML5 markup
- Tailwind CSS for styling
- CSS Flexbox and Grid for layout
- Vanilla JavaScript for interactivity
- Mobile-first workflow
- Space Mono font from Google Fonts

### What I Learned

This project was a great opportunity to practice building a responsive, interactive web app with a clean user interface. Key learnings include:

- **Tailwind CSS Utility Classes**: I deepened my understanding of Tailwind’s utility-first approach, using classes like `flex`, `grid`, and responsive prefixes (`lg:`) to create a mobile-first layout that adapts to desktop screens. For example:

```html
<div class="flex flex-col lg:flex-row gap-6"></div>
```

- Dynamic JavaScript Validation: I implemented input validation to display a "Can't be zero" error message with a red border for the "Number of People" input when it’s 0 or empty. Managing CSS classes dynamically was a key challenge:

```javascript
if (people === 0 || isNaN(people)) {
  peopleInput.classList.add("border-red-500");
  peopleError.classList.remove("hidden");
}
```

- Positioning Error Messages: Positioning the error message above and right-aligned using Tailwind’s absolute positioning was a new technique:

```html
<span
  id="people-error"
  class="text-red-500 text-sm absolute top-[-1.5rem] right-0"
  >Can't be zero</span
>
```

- Event Handling: I used event listeners to handle real-time input updates and tip button selections, ensuring calculations update instantly without page reloads.

### Continued development

In future projects, I want to focus on:
Replacing the prompt for custom tip percentages with a dynamic input field for better user experience.

- Implementing debouncing for input events to optimize performance:

```javascript
let timeout;
billInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(calculateTip, 300);
});
```

- Enhancing accessibility with ARIA attributes and keyboard navigation for all interactive elements.
- Exploring CSS animations for smoother transitions when toggling error messages or button states.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - This helped me with the styling.
- [Using data attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes) - This is an amazing article which helped me understand using data attribute. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Amiko Elvis](https://time-tracking-dashboard-inky-chi.vercel.app/)
- Frontend Mentor - [@amikoelvis](https://www.frontendmentor.io/profile/amikoelvis)
- Twitter - [@ElvisAmiko](https://www.twitter.com/ElvisAmiko)

## Acknowledgments

Thank you to Frontend Mentor!
