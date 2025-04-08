import PropTypes from 'prop-types';

function Layout({ children }) {
    return (
        <div className="bg-bg-primary min-h-screen min-w-screen">
            { children }
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // test giving component PropTypes.element
}

export default Layout;