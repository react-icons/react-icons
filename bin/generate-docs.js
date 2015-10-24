import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../docs/components/App';
import marky from "marky-markdown";
import IconPack from '../docs/components/IconPack';
import icons from '../icons/info';
import * as FontAwesome from '../fa';
import * as MaterialIcons from '../md';
import * as Typicons from '../ti';
icons.fa.icons = FontAwesome;
icons.md.icons = MaterialIcons;
icons.ti.icons = Typicons;

// because stateless function components
global.React = React;

var indexFile = path.join(__dirname, '..', 'docs', 'sample.html');
var indexHtml = fs.readFileSync(indexFile, 'utf-8');

function writeFile(pageName, content) {
    var page = indexHtml.replace("{{#content}}", content);
    var destFile = path.join(__dirname, '..', 'dist', pageName + '.html');
    fs.writeFileSync(destFile, page, 'utf-8')
}

Object.keys(icons).forEach(function(key, index) {
    var content = renderToString(<App active={key} icons={icons}><IconPack pack={icons[key]} /></App>);
    writeFile(key, content);
});


var readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf-8');
readme = marky(readme).html();
readme = renderToString(<App active="index" icons={icons}>
                        <div className="readme-page" dangerouslySetInnerHTML={{__html:readme}}/>
                    </App>);

writeFile('index', readme);