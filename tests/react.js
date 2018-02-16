import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import Icon from '../../Icon';

class SideMenuLink extends Component {
    static propTypes = {
        fuzzyMatch: PropTypes.bool,
        icon: PropTypes.any,
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
    };

    static defaultProps = {
        fuzzyMatch: false,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    static foo = 'bar';
    foo = 'bar';

    onFoobar() {
        this.setState({ bar: 'bar' });
    }

    render() {
        const { to, label, fuzzyMatch } = this.props;
        const { bar } = this.state;
        const active = this.context.router.isActive(to, !fuzzyMatch);

        // Compute appropriate icon
        let icon = this.props.icon || label.toLowerCase();
        const iconActive =
            active && ['edit', 'matching', 'publish', 'visit'].includes(icon);
        icon = classnames({
            [icon]: !iconActive,
            [`${icon}-fill`]: iconActive,
        });

        return (
            <li
                ref={foo => (this.foo = foo)}
                className={classnames({ active })}
            >
                <Link to={to}>
                    {['foo', ' bar'].map((a, key) => (
                        <span key={key}>{a}</span>
                    ))}
                    <span
                        tabIndex="0"
                        role="button"
                        className="c-side-menu-icon"
                        onClick={this.onFoobar.bind(this)}
                    >
                        <Icon size={24} icon={icon} />
                    </span>
                    <span className="c-side-menu-label">
                        {label} {bar}
                    </span>
                </Link>
            </li>
        );
    }
}

const react = <SideMenuLink className="foo" children={<p>lol</p>} />;

const ToolbarSide = () => <div className="foo" />;

react.Foobar = ToolbarSide;

export default react;
