
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdWallpaper extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m6.7 6.7h11.6v-3.4h-11.6c-1.9 0-3.4 1.5-3.4 3.4v11.6h3.4v-11.6z m10 15l-6.7 8.3h20l-5-6.7-3.4 4.5-4.9-6.1z m11.6-7.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.2 2.5 2.5 2.5 2.5-1.1 2.5-2.5z m5-10.9h-11.6v3.4h11.6v11.6h3.4v-11.6c0-1.9-1.5-3.4-3.4-3.4z m0 30h-11.6v3.4h11.6c1.9 0 3.4-1.5 3.4-3.4v-11.6h-3.4v11.6z m-26.6-11.6h-3.4v11.6c0 1.9 1.5 3.4 3.4 3.4h11.6v-3.4h-11.6v-11.6z"/></g>
            </IconBase>
        );
    }
}
