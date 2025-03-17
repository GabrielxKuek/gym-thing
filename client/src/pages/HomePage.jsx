import { Flame } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
    const [streak, setStreak] = useState(1)

    return (
        <div>
            <h1>Track Gabriel's Gym Progress</h1>
            <h1>Other players wip</h1>

            <div>
                {streak > 0 ? (<><Flame></Flame>gabriel is on a 1 day streak! </>) : ("gabriel is not on a streak")}
            </div>
        </div>
    )
}

export default HomePage;