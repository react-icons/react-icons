
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdExtension extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.2 18.3h-2.5v-6.6c0-1.9-1.5-3.4-3.4-3.4h-6.6v-2.5c0-2.3-1.9-4.1-4.2-4.1s-4.2 1.8-4.2 4.1v2.5h-6.6c-1.9 0-3.3 1.5-3.3 3.4v6.3h2.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-2.5v6.3c0 1.9 1.5 3.4 3.4 3.4h6.3v-2.5c0-2.5 2-4.5 4.5-4.5 2.5 0 4.5 2 4.5 4.5v2.5h6.3c1.9 0 3.4-1.5 3.4-3.4v-6.6h2.5c2.3 0 4.1-1.9 4.1-4.2s-1.8-4.2-4.1-4.2z"/></g>
            </IconBase>
        );
    }
}
