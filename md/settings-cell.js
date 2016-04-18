
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSettingsCell extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.6 26.6v-20h-13.2v20h13.2z m0-26.6c1.8 0 3.4 1.6 3.4 3.4v26.6c0 1.8-1.6 3.4-3.4 3.4h-13.2c-1.8 0-3.4-1.6-3.4-3.4v-26.6c0-1.8 1.6-3.4 3.4-3.4h13.2z m-1.6 40v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.2v3.4h-3.2z m-6.8 0v-3.4h3.4v3.4h-3.4z"/></g>
            </IconBase>
        );
    }
}
