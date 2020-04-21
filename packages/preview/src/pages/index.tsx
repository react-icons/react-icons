import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE, HOME_USAGE } from "@utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
      </p>

      <h2>Installation</h2>
      <CodeBlock code={`npm install react-icons --save`} />

      <h2>Usage</h2>
      <CodeBlock code={HOME_USAGE} />

      <h2>More info</h2>
      <p>
        <a href="https://github.com/react-icons/react-icons">GitHub &#8599;</a>
      </p>
    </Container>
  );
}
