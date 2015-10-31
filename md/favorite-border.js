
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFavoriteBorder extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m27.5 5c-2.9 0-5.7 1.3-7.5 3.5-1.8-2.1-4.6-3.5-7.5-3.5-5.1 0-9.2 4-9.2 9.2 0 6.3 5.7 11.4 14.3 19.2l2.4 2.2 2.4-2.2c8.6-7.8 14.3-12.9 14.3-19.2 0-5.2-4.1-9.2-9.2-9.2z m-7.3 25.9l-0.2 0.2-0.2-0.2c-7.9-7.2-13.1-11.9-13.1-16.7 0-3.4 2.5-5.9 5.8-5.9 2.6 0 5.1 1.7 5.9 4h3.2c0.8-2.3 3.3-4 5.9-4 3.3 0 5.8 2.5 5.8 5.9 0 4.8-5.2 9.5-13.1 16.7z"/></g>
            </IconBase>
        );
    }
}
