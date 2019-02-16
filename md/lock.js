
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdLock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.2 13.4v-3.4c0-2.8-2.4-5.2-5.2-5.2s-5.2 2.4-5.2 5.2v3.4h10.4z m-5.2 15c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m10-15c1.8 0 3.4 1.4 3.4 3.2v16.8c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.8 1.6-3.2 3.4-3.2h1.6v-3.4c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4v3.4h1.6z"/></g>
            </IconBase>
        );
    }
}
