import PropTypes from 'prop-types';

function Layout({ children }) {
    return (
        <div className="bg-bgprimary">
            { children }
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // test giving component PropTypes.element
}

export default Layout;