import React from 'react';
import ReactDOM from 'react-dom'
import * as FontAwesome from '../fa';
import * as MaterialIcons from '../md';

let icons = [{
    icons: FontAwesome,
    title: "Font Awesome"
}, {
    icons: MaterialIcons,
    title: "Google Material Design Icons"
}]

let IconPack = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <ul>
                {Object.keys(props.icons).map((iconName, index) => {
                    let Icon = props.icons[iconName];
                    return (
                        <li key={index}>
                            <Icon style={{fill:"#666"}} size={50} />
                            <div>{iconName}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

let App = (props) => {
    return (
        <div>
            {props.packs.map(function(pack, index){
                return <IconPack key={index} {...pack} />
            })}
        </div>
    )
}

ReactDOM.render(<App packs={icons} />, document.getElementById('app'));
