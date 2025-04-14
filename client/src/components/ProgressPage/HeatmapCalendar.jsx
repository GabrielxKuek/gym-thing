import { ChevronLeft, ChevronRight } from "lucide-react";
import Heatmap from "./Heatmap"

const HeatmapCalendar = () => {
    const colorCodes = ["bg-heatmap-intensity-100", "bg-heatmap-intensity-200", "bg-heatmap-intensity-300", "bg-heatmap-intensity-400", "bg-heatmap-intensity-500"];

    return (
        <div className="bg-bg-primary rounded-md p-5 flex flex-col gap-6">
            {/* select month & year */}
            <section className="flex justify-between items-center">
                <ChevronLeft />
                <h1>April</h1>
                <ChevronRight />
            </section>

            {/* display month by month data */}
            <section className='flex flex-col justify-center items-center'> {/* parent container */}
                <Heatmap />
            </section>

            {/* display less - more color scale */}
            <section className='flex items-center justify-center gap-2'>
                Less
                {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className={`w-6 h-6 rounded border-white border-[2px] ${colorCodes[index]}`}></div>
                ))}
                More
            </section>
        </div>
    )
}

export default HeatmapCalendar;