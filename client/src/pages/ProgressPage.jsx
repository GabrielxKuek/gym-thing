import RecentCommentsCard from "../components/ProgressPage/RecentCommentsCard";
import ProgressCard from  "../components/ProgressPage/ProgressCard";

const ProgressPage = () => {
    return (
        <div>
            <h1 className="font-kodchasan">Progress Page</h1>
            <RecentCommentsCard />
            <ProgressCard />
        </div>
    )
}

export default ProgressPage;