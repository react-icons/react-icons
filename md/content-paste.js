
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdContentPaste extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 3.3h-7c-0.7-1.9-2.5-3.3-4.7-3.3-2.2 0-4 1.4-4.7 3.3h-7c-1.8 0-3.3 1.5-3.3 3.4v26.6c0 1.9 1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4v-26.6c0-1.9-1.5-3.4-3.3-3.4z m-11.7 0c0.9 0 1.7 0.8 1.7 1.7s-0.8 1.7-1.7 1.7-1.7-0.8-1.7-1.7 0.8-1.7 1.7-1.7z m11.7 30h-23.4v-26.6h3.4v5h16.6v-5h3.4v26.6z"/></g>
            </IconBase>
        );
    }
}
