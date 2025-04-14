import { ChevronLeft, ChevronRight } from "lucide-react";
import Heatmap from "./Heatmap"

const HeatmapCalendar = () => {
    return (
        <div className="bg-bg-primary rounded-md p-5 flex flex-col gap-6">
            {/* select month & year */}
            <div className="flex justify-between items-center">
                <ChevronLeft />
                <h1>April</h1>
                <ChevronRight />
            </div>

            {/* display month by month data */}
            <section className='flex flex-col justify-center items-center'> {/* parent container */}
                <Heatmap />
            </section>
        </div>
    )
}

export default HeatmapCalendar;