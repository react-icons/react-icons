
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdLocalAtm extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.3 28.3h3.4v-1.6h1.6c1 0 1.7-0.8 1.7-1.7v-5c0-0.9-0.7-1.7-1.7-1.7h-5v-1.6h6.7v-3.4h-3.3v-1.6h-3.4v1.6h-1.6c-0.9 0-1.7 0.8-1.7 1.7v5c0 0.9 0.8 1.7 1.7 1.7h5v1.6h-6.7v3.4h3.3v1.6z m15-21.6h-26.6c-1.9 0-3.3 1.5-3.3 3.3l-0.1 20c0 1.9 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.4 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z"/></g>
            </IconBase>
        );
    }
}
