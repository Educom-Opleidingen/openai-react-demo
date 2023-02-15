const action = () => {
  return true
}
const defaults = {
  image: 'https://via.placeholder.com/512/512',
  error: {id: '10', message: 'Error 429'},
  types: {text: 'text', image: 'image'},
  action: action,
  buttonText: {image: "Image", text: "Text"},
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export { defaults }
