
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdTimer extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 1.7h-10v3.3h10v-3.3z m-6.7 21.6h3.4v-10h-3.4v10z m13.4-11l2.4-2.3c-0.7-0.9-1.5-1.7-2.4-2.4l-2.3 2.4c-2.6-2.1-5.9-3.3-9.4-3.3-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15c0-3.6-1.2-6.8-3.3-9.4z m-11.7 21c-6.4 0-11.7-5.2-11.7-11.6s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.6-11.7 11.6z"/></g>
            </IconBase>
        );
    }
}
