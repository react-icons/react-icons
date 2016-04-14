
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSlowMotionVideo extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m36.6 20c0 8.6-6.5 15.7-14.9 16.6v-3.4c6.6-0.9 11.7-6.5 11.7-13.2s-5.1-12.3-11.7-13.2v-3.4c8.4 0.9 14.9 8 14.9 16.6z m-27.1 12.9l2.3-2.4c1.9 1.5 4.1 2.4 6.6 2.7v3.4c-3.4-0.3-6.4-1.7-8.9-3.7z m-2.7-11.3c0.3 2.5 1.2 4.7 2.7 6.5l-2.4 2.4c-2-2.5-3.3-5.5-3.7-8.9h3.4z m2.7-9.8c-1.5 1.9-2.4 4.1-2.7 6.6h-3.4c0.4-3.4 1.7-6.4 3.7-8.9z m8.9-5c-2.5 0.3-4.7 1.2-6.6 2.7l-2.3-2.4c2.5-2 5.5-3.3 8.9-3.7v3.4z m3.3 9.5l4.9 3.7c-3.3 2.5-6.6 5-10 7.5z"/></g>
            </IconBase>
        );
    }
}
