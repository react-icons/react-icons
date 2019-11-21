import React from "react";
import Badges from "./badges";

function HomePage() {
  return (
    <article>
      <h1>React Icons</h1>
      <Badges />
      <p>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
      </p>

      <h2>Installation</h2>
      <code>
        <pre>npm install react-icons --save</pre>
      </code>

      <h2>Usage</h2>
      <code><pre>{`import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`}</pre></code>

      <h2>More info</h2>
      <p>
        <a href="https://github.com/react-icons/react-icons">GitHub &#8599;</a>
      </p>
    </article>
  );
}

export default HomePage;
