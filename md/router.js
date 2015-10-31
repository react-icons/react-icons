
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRouter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.7 9.8l1.3-1.3c-2.3-2.3-5.3-3.5-8.3-3.5s-6 1.2-8.4 3.5l1.4 1.3c2-1.8 4.5-2.8 7-2.8s5 1 7 2.8z m-1.5 1.4c-1.5-1.5-3.5-2.4-5.5-2.4s-4 0.9-5.5 2.4l1.3 1.3c1.2-1.2 2.7-1.7 4.2-1.7 1.5 0 3 0.5 4.1 1.7l1.4-1.3z m-0.5 10.5h-3.4v-6.7h-3.3v6.7h-16.7c-1.8 0-3.3 1.5-3.3 3.3v6.7c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-6.7c0-1.8-1.5-3.3-3.3-3.3z m-18.4 8.3h-3.3v-3.3h3.3v3.3z m5.9 0h-3.4v-3.3h3.4v3.3z m5.8 0h-3.3v-3.3h3.3v3.3z"/></g>
            </IconBase>
        );
    }
}
