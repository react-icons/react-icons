import React from 'react';
// Icon Pack
export default class IconPack extends React.Component {
    render() {
        var pack = this.props.pack;
        return (
            <div className="icon-pack">
                <h1> {pack.name} </h1>
                <h4> {pack.attribution} </h4>
                <div className="mdl-grid">
                    {Object.keys(pack.icons).map((iconName, index) => {
                        let Icon = pack.icons[iconName];
                        return (
                            <div className="icon-box mdl-cell mdl-cell--3-col" key={index}>
                                <Icon style={{fill:"#666"}} size={50} />
                                <div className="icon-name">{iconName}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}