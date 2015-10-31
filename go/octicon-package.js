
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoOcticonPackage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m0 10.7v18.6c0 1.2 0.7 2.1 1.9 2.5l16.2 4.3c0.4 0.1 0.9 0.1 1.3 0l16.2-4.3c1.2-0.4 1.9-1.3 1.9-2.5v-18.6c0-1.2-0.7-2.1-1.9-2.5l-16.2-4.3c-0.4-0.1-0.9-0.1-1.3 0l-16.2 4.3c-1.2 0.4-1.9 1.3-1.9 2.5z m17.5 22.7l-15-4v-16.9l15 4v16.9z m-15-23.4l6.3-1.7 16.2 4.4-6.2 1.6-16.3-4.3z m32.5 19.4l-15 4v-16.9l5-1.3v6l5-1.3v-6.1l5-1.3v16.9z m-5-18.1l-16.2-4.3 5-1.3 16.2 4.3-5 1.3z"/></g>
            </IconBase>
        );
    }
}
