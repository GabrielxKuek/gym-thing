import { useState, useEffect } from 'react';

import { getUserExerciseProgress } from "../../services/api/ProgressPage";

const Heatmap = () => {
    const [exerciseData, setExerciseData] = useState([]);

    const currentReferenceDate = new Date();

    // get start and end date of current month
    const startDate = new Date(currentReferenceDate.getFullYear(), currentReferenceDate.getMonth(), 1);
    const startDateDay = startDate.getDay();
    const endDate = new Date(currentReferenceDate.getFullYear(), currentReferenceDate.getMonth() + 1, 0)
    const endDateDay = endDate.getDate();

    // get number of days in month
    const daysInMonth = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    // set heatmap
    const heatmapGrid = Array.from({ length: daysInMonth }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i)
        return date.toISOString().slice(0, 10);
    })

    // helper function
    const longestExerciseTime = exerciseData?.reduce((a, b) => Math.max(a, b.time), -Infinity);
    
    // calculate intensity based on other exercise timing
    const getIntensity = (exerciseTime) => {
        return longestExerciseTime !== 0 ? Number(exerciseTime / longestExerciseTime) : 0;
    }

    // assign color code based on intensity
    const getColorFromIntensity = (intensity) => {
        const colorCodes = ["bg-heatmap-intensity-100", "bg-heatmap-intensity-200", "bg-heatmap-intensity-300", "bg-heatmap-intensity-400", "bg-heatmap-intensity-500"];
        const colorIndex = Math.min(Math.floor(intensity * colorCodes.length), colorCodes.length - 1);

        return colorCodes[colorIndex];
    }

    // get exercise data
    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const data = await getUserExerciseProgress();
                setExerciseData(data);

            } catch (error) {
                console.error("Error fetching exercise data:", error);
            }
        }

        fetchExerciseData();
    }, [])

    return (
        <div className='grid grid-flow-row-dense grid-cols-7 gap-1'>
        {
            heatmapGrid.map((day, index) => {
                const exerciseTime = exerciseData.find(item => item.date === day)?.time || 0;
                const intensity = getIntensity(exerciseTime);
                const colorFromIntensity = getColorFromIntensity(intensity);

                return <div key={index} className={`w-6 h-6 rounded border-white border-[2px] cursor-pointer ${colorFromIntensity}`} title={`${exerciseTime} minutes on ${day}`}></div>
            })
        }
        </div>
    )
}

export default Heatmap;