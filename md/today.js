
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdToday extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 5h-1.7v-3.3h-3.3v3.3h-13.4v-3.3h-3.3v3.3h-1.7c-1.8 0-3.3 1.5-3.3 3.3l0 23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-23.4v-18.4h23.4v18.4z m-20-15h8.3v8.3h-8.3z"/></g>
            </IconBase>
        );
    }
}
