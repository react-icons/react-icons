import React from 'react';
import decamelize from 'decamelize';
import capitalize from 'capitalize';
// Icon Pack
export default class IconPack extends React.Component {
    render() {
        const { pack, prefix } = this.props;
        const prefixUp = capitalize(prefix);
        const iconPackName = <strong>{prefixUp}IconPack</strong>
        return (
            <div className="icon-pack">
                <h1> {pack.name} </h1>
                <h4> {pack.attribution} </h4>
                <code>import {iconPackName} from 'react-icons/lib/{prefix}'</code>
                <div className="mdl-grid">
                    {Object.keys(pack.icons).map((iconName, index) => {
                        let Icon = pack.icons[iconName];
                        let realIconName = decamelize(iconName.replace(new RegExp('^'+prefixUp), ''), '-')
                        return (
                            <div className="icon-box mdl-cell mdl-cell--3-col" key={index}>
                                <Icon style={{fill:"#666"}} size={50} />
                                <div className="icon-name">{iconName}</div>
                                <div className="icon-location" style={{fontSize: 10}}>
                                    <code>{`react-icons/lib/${prefix}/${realIconName}`}</code>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
