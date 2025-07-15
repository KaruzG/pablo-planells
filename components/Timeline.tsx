import TimelineBox from "./TimelineBox";

const sampleTimelineEvent = { date: "1/05/2024", title: "TFG", description: "Descripción del evento", image: "" }

const Timeline = () => {
  return (
    <section className="flex flex-col relative items-center justify-center mb-10 px-3 ">
      <h1 className="text-4xl font-bold">Mi historia</h1>
      <ol className="grid grid-cols-[1fr_100px_1fr] mt-8 relative">
        <li> { /* for testing purposes */}
        </li>
        <li className="mx-auto inset-0 border-l-1 border-r-1 relative timeline-horizontal-right-after timeline-horizontal-dot">
        </li>
        <li>
          <TimelineBox timelineEvent={sampleTimelineEvent} />
        </li>
        <li>
          <TimelineBox timelineEvent={sampleTimelineEvent} />
        </li>
        <li className="mx-auto inset-0 border-l-2 relative timeline-horizontal-left-after timeline-horizontal-dot">
        </li>
        <li>
        </li>
        <li>
        </li>
        <li className="mx-auto inset-0 border-l-1 border-r-1 relative timeline-horizontal-right-after timeline-horizontal-dot">
        </li>
        <li>
          <TimelineBox timelineEvent={sampleTimelineEvent} />
        </li>
      </ol>
    </section>
  );
};

export default Timeline;
