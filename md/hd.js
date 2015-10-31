
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdHd extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-13.4 20h-2.5v-3.3h-3.3v3.3h-2.5v-10h2.5v4.2h3.3v-4.2h2.5v10z m3.4-10h6.6c1 0 1.7 0.8 1.7 1.7v6.6c0 1-0.7 1.7-1.7 1.7h-6.6v-10z m2.5 7.5h3.3v-5h-3.3v5z"/></g>
            </IconBase>
        );
    }
}
