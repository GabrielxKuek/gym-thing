import ContentCard from "../misc/ContentCard";
import HeatmapCalendar from "./HeatmapCalendar";

const ProgressCard = () => {
    return (
        <ContentCard title="Progress" direction="row" width="50">
            <HeatmapCalendar />
        </ContentCard>
    )
}

export default ProgressCard;