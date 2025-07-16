interface TimelineLineProps {
    position?: "left" | "right";
}

const TimelineLine = ({ position }: TimelineLineProps) => {
    return (
        <li className={`mx-auto inset-0 border-l-1 border-r-1 relative timeline-horizontal-${position}-after timeline-horizontal-dot`}></li>
    )
}

export default TimelineLine