import PropTypes from "prop-types";

import ComponentBackground from "./ComponentBackground";

const ContentCard = ({ title, direction, width, children }) => {
    // get width of ContentCard component

    return (
        // parent div
        <div 
            style={{ width: `${width}%` }}
        >
            {/* header */}
            <div className="flex justify-between items-center mb-5">
                <h1 className="font-semibold">{title}</h1>
                {/* <div className="flex content-start gap-5">
                    <div>asdasd</div>
                    <div>sakd</div>
                </div> */}
            </div>

            {/* content */}
            <ComponentBackground direction={direction}>
                { children }
            </ComponentBackground>
        </div>
    )
}

ContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ContentCard;