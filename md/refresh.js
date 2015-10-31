
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRefresh extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m29.4 10.6c-2.4-2.4-5.7-3.9-9.4-3.9-7.4 0-13.3 5.9-13.3 13.3s5.9 13.3 13.3 13.3c6.2 0 11.4-4.2 12.9-10h-3.5c-1.4 3.9-5.1 6.7-9.4 6.7-5.5 0-10-4.5-10-10s4.5-10 10-10c2.8 0 5.2 1.2 7 3l-5.3 5.3h11.6v-11.6l-3.9 3.9z"/></g>
            </IconBase>
        );
    }
}
