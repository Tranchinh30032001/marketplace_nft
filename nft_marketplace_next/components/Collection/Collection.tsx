import React, { useEffect, useState } from "react";
import { CollectionCard, Title, TopList } from "../Common";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import images from "../../public/img";

const MonthArray = [
  {
    background: images.creatorbackground1,
    user: images.user1,
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
  },
  {
    background: images.creatorbackground3,
    user: images.user3,
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
  },
  {
    background: images.creatorbackground7,
    user: images.user7,
  },
  {
    background: images.creatorbackground8,
    user: images.user8,
  },
];
const WeekArray = [
  {
    background: images.creatorbackground3,
    user: images.user3,
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
  },
  {
    background: images.creatorbackground1,
    user: images.user1,
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
  },
];
const DayArray = [
  {
    background: images.creatorbackground1,
    user: images.user1,
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
  },
  {
    background: images.creatorbackground3,
    user: images.user3,
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
  },
  {
    background: images.creatorbackground7,
    user: images.user7,
  },
];

function Collection() {
  const [optionAction, setOptionAction] = useState("days");
  const [data, setData] = useState(DayArray);
  useEffect(() => {
    if (optionAction == "weeks") {
      setData(WeekArray);
    } else if (optionAction == "months") {
      setData(MonthArray);
    } else {
      setData(DayArray);
    }
  }, [optionAction]);
  return (
    <div className="mt-10">
      <Title
        heading="New Collection"
        paragrap="Discover the mosting outstanding NFTs in all topics of life"
      />
      <div>
        <TopList
          heading="Top List Creator"
          icon1={<BsFillAlarmFill />}
          icon2={<BsFillCalendarDateFill />}
          icon3={<BsCalendar3 />}
          btn1="days"
          btn2="weeks"
          btn3="months"
          setOptionAction={setOptionAction}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((item, index) => {
          return (
            <CollectionCard
              key={index}
              image={item.background}
              user={item.user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
