
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdZoomOutMap extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 25v10h-10l3.8-3.8-4.8-4.8 2.4-2.4 4.8 4.8z m-20 10h-10v-10l3.8 3.8 4.8-4.8 2.4 2.4-4.8 4.8z m-10-20v-10h10l-3.8 3.8 4.8 4.8-2.4 2.4-4.8-4.8z m20-10h10v10l-3.8-3.8-4.8 4.8-2.4-2.4 4.8-4.8z"/></g>
            </IconBase>
        );
    }
}
