import ContentCard from "../misc/ContentCard";
import HeatmapCalendar from "./HeatmapCalendar";

const ProgressCard = () => {
    return (
        <>
        <ContentCard title="Progress" direction="row">
            <HeatmapCalendar />
        </ContentCard>
        </>
    )
}

export default ProgressCard;