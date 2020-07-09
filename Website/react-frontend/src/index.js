
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // <- calls in the App conponent

/* Example of ReactDOM's render function / JSX (Javascript XML). the 'root' 
   refers to the placeholder in index.HTML */
ReactDOM.render(<App />, document.getElementById('root'));

// <div></div> refers to text section
// <h1></h1< refers to header
// <p></p> refers to paragraph
// <ul></ul> refers to an unordered list
// <ol></ul> refers to an ordered list
// <li></li> refers to points in said list (above)
