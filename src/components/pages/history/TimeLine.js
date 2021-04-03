import React from "react";

const TimeLine = ({ timelineArray = [] }) => (
  <section className="timeline-section">
    <div className="timeline-items">
      {timelineArray.length > 0 &&
        timelineArray.map((t) => (
          <TimeLineItem
            key={t.id}
            timelineDate={FormatDate(t.event_date_unix)}
            timelineHead={t.title}
            timelineContent={t.details}
          />
        ))}
    </div>
  </section>
);

export default TimeLine;

const TimeLineItem = ({ timelineDate, timelineHead, timelineContent }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-date">{timelineDate}</div>
    <div className="timeline-content">
      <h3>{timelineHead}</h3>
      <p>{timelineContent}</p>
    </div>
  </div>
);

const FormatDate = (date) => {
  const dateInt = typeof date === "string" ? parseInt(date) : date;
  const givenDate = new Date(dateInt * 1000);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = givenDate.getDate();

  const monthIndex = givenDate.getMonth();
  const monthName = monthNames[monthIndex];

  const year = givenDate.getFullYear();

  return `${day}-${monthName}-${year}`;
};
