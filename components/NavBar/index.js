import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Container, List } from './nav-bar-styled';

const menus = [
    {
        id: 'home',
        value: 'Home',
        route: '/'
    },
    {
        id: 'search',
        value: 'Search',
        route: '/search'
    },
    {
        id: 'newsletter',
        value: 'Newsletter',
        route: '/newsletter'
    }
];

const NavBar = (props) => {
    const { router } = props;

    return (
        <Container>
            {menus.map((menu) => (
                <List key={menu.id} active={router.pathname === menu.route}>
                    <Link href={menu.route}>{menu.value}</Link>
                </List>
            ))}
        </Container>
    );
};

NavBar.propTypes = {
    router: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withRouter(NavBar);
