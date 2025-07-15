import Image from "next/image";
import Link from "next/link";
import placeHolder from "@/public/images/placeholder.jpg";

interface TimelineEvent {
    title: string;
    date: string;
    description: string;
    image?: string;
    url?: string;
}

interface TimelineBoxProps {
  timelineEvent: TimelineEvent;
}

const TimelineBox: React.FC<TimelineBoxProps> = ({ timelineEvent }) => {
  return (
    <Link href={timelineEvent.url || "/proyects"} className="block hover:scale-[101%] transition-transform duration-200">
        <div className="p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-2xl font-bold">{timelineEvent.title} - {timelineEvent.date}</h2>
            <p className="text-xl text-text font-semibold">{timelineEvent.description}</p>
            <Image
                src={timelineEvent.image || placeHolder}
                alt="Descripción de la imagen"
                width={400}
                height={400}
                className="mt-4 rounded-lg"
            />
        </div>
    </Link>
  );
};

export default TimelineBox;
    