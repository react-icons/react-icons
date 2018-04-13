import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../docs/components/App';
import marky from "marky-markdown";
import IconPack from '../docs/components/IconPack';
import icons from '../icons/info';

// because stateless function components
global.React = React;


// generate documents

var indexFile = path.join(__dirname, '..', 'docs', 'sample.html');
var indexHtml = fs.readFileSync(indexFile, 'utf-8');

function writeFile(pageName, content) {
    var page = indexHtml.replace("{{#content}}", content);
    var destFile = path.join(__dirname, '..', 'publish', pageName + '.html');
    fs.writeFileSync(destFile, page, 'utf-8')
}

var publishDir = path.join(__dirname, '..', 'publish');
if (!fs.existsSync(publishDir)) {
    fs.mkdirSync(publishDir);
}

Object.keys(icons).forEach(function(key, index) {
    const iconsList = require('../' + key);
    icons[key].icons = {
        ...iconsList
    };
    delete icons[key].icons.__esModule;
    var content = renderToStaticMarkup(<App active={key} icons={icons}>
            <IconPack pack={icons[key]} prefix={key} />
    </App>);
    writeFile(key, content);
});


var readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf-8');
readme = marky(readme);
readme = renderToStaticMarkup(<App active="index" icons={icons}>
                        <div className="readme-page" dangerouslySetInnerHTML={{__html:readme}}/>
                    </App>);

writeFile('index', readme);


// generate license file

var licenseHeaerFile = path.join(__dirname, '..', 'docs', 'license-header');
var licenseOutFile = path.join(__dirname, '..', 'LICENSE');
var licenseHeader = fs.readFileSync(licenseHeaerFile, 'utf-8');

var licenses = '';
Object.keys(icons).forEach(function(key, index) {
    var icon = icons[key];
    licenses += `${icon.attribution}\n`;
    licenses += `License: ${icon.license} ${icon.licenseUrl}\n\n`;
});

fs.writeFileSync(licenseOutFile, licenseHeader + licenses, 'utf-8');
