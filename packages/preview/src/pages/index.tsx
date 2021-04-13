import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE, HOME_USAGE, HOME_USAGE_ALL } from "@utils/constants";
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

      <h2>Installation (for standard modern project)</h2>
      <CodeBlock code={`npm install react-icons --save`} />

      <h3>Usage</h3>
      <CodeBlock code={HOME_USAGE} />

      <h2>Installation (for meteorjs, gatsbyjs, etc)</h2>
      <p>
        If your project grows in size, this option is available.
        This method has the trade-off that it takes a long time to install the package.
        Suitable for MeteorJS, Gatsbyjs etc.
      </p>
      <CodeBlock code={`npm install @react-icons/all-files --save`} />
      
      <h3>Usage</h3>
      <CodeBlock code={HOME_USAGE_ALL} />

      <h2>More info</h2>
      <p>
        <a href="https://github.com/react-icons/react-icons">GitHub &#8599;</a>
      </p>
    </Container>
  );
}
