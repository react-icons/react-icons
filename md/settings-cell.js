
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSettingsCell extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m11.7 40h3.3v-3.3h-3.3v3.3z m6.6 0h3.4v-3.3h-3.4v3.3z m6.7 0h3.3v-3.3h-3.3v3.3z m1.7-40l-13.4 0c-1.8 0-3.3 1.5-3.3 3.3v26.7c0 1.8 1.5 3.3 3.3 3.3h13.4c1.8 0 3.3-1.5 3.3-3.3v-26.7c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-13.4v-20h13.4v20z"/></g>
            </IconBase>
        );
    }
}
