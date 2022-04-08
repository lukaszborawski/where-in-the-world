const breakpoints = {
  tablet: `@media (min-width: 768px)`,
  laptop: `@media (min-width: 1024px)`,
};

export const lightTheme = {
  element: 'hsl(0, 0%, 100%)',
  background: 'hsl(0, 0%, 98%)',
  input: 'hsl(0, 0%, 52%)',
  text: 'hsl(200, 15%, 8%)',
  ...breakpoints,
};

export const darkTheme = {
  element: 'hsl(209, 23%, 22%)',
  background: 'hsl(207, 26%, 17%)',
  input: 'hsl(0, 0%, 52%)',
  text: 'hsl(0, 0%, 100%)',
  ...breakpoints,
};