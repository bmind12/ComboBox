# Challenge

This project aims to showcase expertise in `TypeScript`, `React`, and the ability to integrate with libraries based on their documentation. The primary objective is to create a `ComboBox` component according to the given specifications.

## Technologies Required

- `TypeScript`: Proper typing is essential. The use of `any` should be avoided wherever possible.
- `React Hook Form` (or a similar library for form management).
- `Axios` for making `HTTP` requests.
- `TanStack Query` for fetching, caching, and updating data in an efficient manner.
- Additional libraries known to the developer can be used as long as the required ones are included.

## Component Functionality Overview

The `ComboBox` component should allow users to type in a text input field and dynamically fetch a list of universities from a specified endpoint based on the user's input. It should display these universities in a dropdown panel, where the user can select an option. The component must handle empty and erroneous inputs gracefully, offering a list of all Czech universities for empty inputs and displaying error states as required. It should also be integrable with React Hook Form or a similar form management library for validation purposes, and support disabled and error states. The design and functionality should adapt to different screen sizes and user interactions, ensuring a seamless and user-friendly experience.

### How to run

```bash
# Install dependencies
npm install

# Run the project
npm run dev
```
