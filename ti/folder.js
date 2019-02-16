
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiFolder extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 10h-10c0-1.8-1.5-3.3-3.3-3.3h-6.7c-2.8 0-5 2.2-5 5v16.6c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-13.3c0-2.8-2.2-5-5-5z m-20 0h6.7c0 1.8 1.5 3.3 3.3 3.3h10c0.9 0 1.7 0.8 1.7 1.7h-23.4v-3.3c0-1 0.8-1.7 1.7-1.7z m20 20h-20c-0.9 0-1.7-0.7-1.7-1.7v-11.6h23.4v11.6c0 1-0.8 1.7-1.7 1.7z"/></g>
            </IconBase>
        );
    }
}
