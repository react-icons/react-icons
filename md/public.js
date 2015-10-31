
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPublic extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m-1.7 29.9c-6.6-0.8-11.6-6.4-11.6-13.2 0-1 0.1-2 0.3-3l8 8v1.7c0 1.8 1.5 3.3 3.3 3.3v3.2z m11.5-4.2c-0.4-1.4-1.6-2.3-3.1-2.3h-1.7v-5c0-0.9-0.7-1.7-1.7-1.7h-10v-3.3h3.4c0.9 0 1.6-0.8 1.6-1.7v-3.3h3.4c1.8 0 3.3-1.5 3.3-3.4v-0.6c4.9 1.9 8.3 6.7 8.3 12.3 0 3.5-1.3 6.6-3.5 9z"/></g>
            </IconBase>
        );
    }
}
