const breakpoints = {
  sm: `@media (min-width: 576px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 992px)`,
};

export const lightTheme = {
  element: 'hsl(0, 0%, 100%)',
  background: 'hsl(0, 0%, 98%)',
  input: 'hsl(0, 0%, 52%)',
  text: 'hsl(200, 15%, 8%)',
  isDark: false,
  ...breakpoints,
};

export const darkTheme = {
  element: 'hsl(209, 23%, 22%)',
  background: 'hsl(207, 26%, 17%)',
  input: 'hsl(0, 0%, 52%)',
  text: 'hsl(0, 0%, 100%)',
  isDark: true,
  ...breakpoints,
};