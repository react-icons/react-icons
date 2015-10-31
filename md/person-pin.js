
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPersonPin extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 3.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4v23.3c0 1.8 1.5 3.3 3.3 3.3h6.7l5 5 5-5h6.7c1.8 0 3.3-1.5 3.3-3.3v-23.3c0-1.9-1.5-3.4-3.3-3.4z m-11.7 5.5c2.5 0 4.5 2.1 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.4 2-4.5 4.5-4.5z m10 17.9h-20v-1.5c0-3.4 6.7-5.2 10-5.2s10 1.8 10 5.2v1.5z"/></g>
            </IconBase>
        );
    }
}
