
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdVignette extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 5h-30c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-15 25c-7.4 0-13.3-4.5-13.3-10s5.9-10 13.3-10 13.3 4.5 13.3 10-5.9 10-13.3 10z"/></g>
            </IconBase>
        );
    }
}
