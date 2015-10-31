
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoLibrary extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.7 26.7v-20c0-1.9-1.5-3.4-3.4-3.4h-20c-1.8 0-3.3 1.5-3.3 3.4v20c0 1.8 1.5 3.3 3.3 3.3h20c1.9 0 3.4-1.5 3.4-3.3z m-18.4-6.7l3.4 4.5 5-6.2 6.6 8.4h-20l5-6.7z m-15-10v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3v-3.4h-23.3v-23.3h-3.4z"/></g>
            </IconBase>
        );
    }
}
