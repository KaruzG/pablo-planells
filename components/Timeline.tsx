import { Fragment } from "react";
import TimelineBox from "./TimelineBox";
import TimelineLine from "./TimelineLine";
import { useTranslations } from "next-intl";

const sampleTimelineEvent = { date: "1/05/2024", title: "TFG", description: "Descripción del evento", image: "" }
const sampleTimelineEvent1 = { date: "1/05/2024", title: "TFG", description: "Descripción del evento", image: "" }
const sampleTimelineEvent2 = { date: "1/05/2024", title: "TFG", description: "Descripción del evento", image: "" }
const timelineEvents = [sampleTimelineEvent, sampleTimelineEvent1, sampleTimelineEvent2];

const Timeline = () => {
  const t = useTranslations('timeline');
  
  return (
    <section className="flex flex-col relative items-center justify-center mb-10 px-3 ">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <ol className="grid grid-cols-[1fr_100px_1fr] mt-8 relative">
        {timelineEvents.map((event, index) => {
          if (index % 2 === 0) {
            return (
              <Fragment key={index}>
                <li></li>
                <TimelineLine position="right" />
                <TimelineBox timelineEvent={event}/>
              </Fragment>
            );
          } else {
            return (
              <Fragment key={index}>
                <TimelineBox timelineEvent={event}/>
                <TimelineLine position="left" />
                <li></li>
              </Fragment>
            );
          }
        })}
      </ol>
    </section>
  )
};

export default Timeline;
