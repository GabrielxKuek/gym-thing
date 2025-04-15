import { useRef, useEffect, useState } from "react";

import ContentCard from "../misc/ContentCard";
import Comment from "./Comment";

const RecentCommentsCard = () => {
    const scrollRef = useRef(null);
    const [showTopBlur, setShowTopBlur] = useState(false);
    const [showBottomBlur, setShowBottomBlur] = useState(false);

    const setBlurToScroll = () => {
        const element = scrollRef.current;
        if (element) {
            setShowTopBlur(element.scrollTop > 10)

            const isScrollable = element.scrollHeight > element.clientHeight;
            const isScrolledToBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 10;
            setShowBottomBlur(isScrollable && !isScrolledToBottom);
        }
    }

    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            element.addEventListener('scroll', setBlurToScroll);

            setBlurToScroll();
        }

        // cleanup function to prevent memory leak
        return () => {
            if (element) {
                element.removeEventListener('scroll', setBlurToScroll)
            }
        }
    }, [])

    return (
        <ContentCard title="Recent Comments" direction="col" width="50">
            <div className='relative'>
                {/* creates blur effect */}
                {showTopBlur && (
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-bg-secondary to-transparent z-10 pointer-events-none" />
                )}

                {/* comment content */}
                <div
                    ref={scrollRef}
                    className='overflow-auto max-h-100 relative grid grid-cols-1 gap-8 [&>*]:mx-6'
                    onScroll={setBlurToScroll}
                >
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                </div>

                {showBottomBlur && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-secondary to-transparent z-10 pointer-events-none" />
                )}

            </div>
        </ContentCard>
    )
}

export default RecentCommentsCard;