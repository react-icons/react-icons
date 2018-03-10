import React from 'react';
import cx from 'classnames';

class App extends React.Component {
    render() {
        const {icons, active} = this.props;
        const homepageClasses = cx({
            "mdl-navigation__link--current": active === 'homepage',
            "mdl-navigation__link": true
        });
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="mdl-layout__header" style={{backgroundColor: "#03A9F4"}}>
                    <div className="mdl-layout__header-row">
                        <div className="mdl-layout-spacer">
                            <h3>
                                <div className="logo-wrap">
                                    <img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="40" height="40" />
                                </div>
                                React Icons
                            </h3>
                        </div>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <nav className="mdl-navigation">
                        <a href="./index.html" className={homepageClasses}>Home</a>
                        {Object.keys(this.props.icons).map((key, index) => {
                            var pack = icons[key];
                            var name = pack.name;
                            var className = cx({
                                "mdl-navigation__link--current": active === key,
                                "mdl-navigation__link": true
                            });
                            var link = './' + key + '.html';
                            return (<a key={index} href={link} className={className}>{name}</a>)
                        })}
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
