import PropTypes from 'prop-types';

import { CardLayout, Grid } from './card-styled';

const Card = (props) => <CardLayout>{props.children}</CardLayout>;

Card.defaultProps = {
    children: null
};

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export { Card, Grid };
