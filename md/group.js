
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdGroup extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.7 18.3c2.7 0 5-2.2 5-5s-2.3-5-5-5c-2.8 0-5 2.3-5 5s2.2 5 5 5z m-13.4 0c2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.7 0-5 2.3-5 5s2.3 5 5 5z m0 3.4c-3.9 0-11.6 1.9-11.6 5.8v4.2h23.3v-4.2c0-3.9-7.8-5.8-11.7-5.8z m13.4 0c-0.5 0-1.1 0-1.6 0.1 1.9 1.3 3.2 3.2 3.2 5.7v4.2h10v-4.2c0-3.9-7.7-5.8-11.6-5.8z"/></g>
            </IconBase>
        );
    }
}
