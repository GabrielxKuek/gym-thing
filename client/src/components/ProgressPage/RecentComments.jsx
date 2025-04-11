import ContentCard from "../misc/ContentCard";
import Comment from "./Comment";

const RecentCommentsCard = () => {
    return (
        <>
            <ContentCard title="Recent Comments">
                <Comment></Comment>
                <Comment></Comment>
            </ContentCard>
        </>
    )
}

export default RecentCommentsCard;