import PropTypes from 'prop-types';

function ComponentBackground({ direction, children }) {
    return (
        <div className={`rounded-md bg-bg-secondary p-5 flex ${direction == 'col' ? 'flex-col' : ''} ${direction == 'row' ? 'flex-row' : ''} gap-4`}>
            { children }
        </div>
    )
}

ComponentBackground.propTypes = {
    direction: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ComponentBackground;