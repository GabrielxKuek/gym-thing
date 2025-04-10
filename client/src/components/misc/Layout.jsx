import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <div className="bg-bg-primary min-h-screen min-w-screen">
            <Navbar />
            <div className="px-15 py-10">
                { children }
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // test giving component PropTypes.element
}

export default Layout;