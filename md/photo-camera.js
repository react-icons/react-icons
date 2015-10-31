
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><circle cx="20" cy="20" r="5.333333333333334"/><path d="m15 3.3l-3 3.4h-5.3c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3h-5.2l-3.1-3.4h-10z m5 25c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3 8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z"/></g>
            </IconBase>
        );
    }
}
