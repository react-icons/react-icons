
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSwitchCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.3 6.7h-5.2l-3.1-3.4h-10l-3 3.4h-5.3c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m-8.3 19.1v-4.1h-10v4.1l-5.8-5.8 5.8-5.8v4.1h10v-4.1l5.8 5.8-5.8 5.8z"/></g>
            </IconBase>
        );
    }
}
