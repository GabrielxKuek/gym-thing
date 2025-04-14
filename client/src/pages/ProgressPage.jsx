import RecentCommentsCard from "../components/ProgressPage/RecentCommentsCard";
import ProgressCard from  "../components/ProgressPage/ProgressCard";

const ProgressPage = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-row gap-4' >
                <RecentCommentsCard />
                <ProgressCard />
            </div>
        </div>
    )
}

export default ProgressPage;