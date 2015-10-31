
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCheckBox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-15 23.3l-8.4-8.3 2.4-2.4 6 6 12.6-12.6 2.4 2.3-15 15z"/></g>
            </IconBase>
        );
    }
}
