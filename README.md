# Recipe Finder 🍲

A beginner-friendly JavaScript project that searches for recipes in real time 
as you type, using a free public API — no page reload needed.

## Features
- Live search-as-you-type recipe lookup (via [TheMealDB](https://www.themealdb.com/api.php))
- Displays recipe cards with image, name, category, and cuisine area
- Handles empty search results gracefully
- Responsive card grid layout
- Built with vanilla JavaScript — no frameworks or libraries


🔗 **[Live Demo](https://vidhiparmar28.github.io/Recipe-Finder/)**

## Screenshot
<img width="957" height="447" alt="recipefinder" src="https://github.com/user-attachments/assets/5083c11b-bddd-4cf3-8305-718b089d6f90" />


## What I practiced
- `fetch()` and Promises
- `async`/`await`
- Template literals for building dynamic HTML
- `.map()` and `.join()` for rendering lists of data
- Reading and adapting to a new API's JSON response shape
- Handling "no results" (`null`) responses safely
- CSS Flexbox for a responsive card grid
- Hover effects and transitions

## Next steps / things I want to add
- Debounce search input (avoid firing a request on every keystroke)
- Loading state while fetching
- Click a card to view full recipe instructions
- Filter results by category (e.g. Vegetarian, Dessert)
