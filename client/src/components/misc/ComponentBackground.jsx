import PropTypes from 'prop-types';

function ComponentBackground({ children }) {
    return (
        <div className="rounded-md bg-bg-secondary p-5">
            { children }
        </div>
    )
}

ComponentBackground.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ComponentBackground;