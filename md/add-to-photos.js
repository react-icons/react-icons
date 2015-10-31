
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAddToPhotos extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m6.7 10h-3.4v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3v-3.4h-23.3v-23.3z m26.6-6.7h-20c-1.8 0-3.3 1.5-3.3 3.4v20c0 1.8 1.5 3.3 3.3 3.3h20c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.9-1.5-3.4-3.4-3.4z m-1.6 15h-6.7v6.7h-3.3v-6.7h-6.7v-3.3h6.7v-6.7h3.3v6.7h6.7v3.3z"/></g>
            </IconBase>
        );
    }
}
