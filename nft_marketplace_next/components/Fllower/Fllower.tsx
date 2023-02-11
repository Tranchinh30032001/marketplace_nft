import React, { useEffect, useState } from "react";
import { FllowerCard, TopList } from "../Common";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import images from "../../public/img";
import { Button } from "../rootindex";

const FollowingArray = [
  {
    background: images.creatorbackground3,
    user: images.user3,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground1,
    user: images.user1,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
];
const NewsArray = [
  {
    background: images.creatorbackground1,
    user: images.user1,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground3,
    user: images.user3,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground7,
    user: images.user7,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
  {
    background: images.creatorbackground8,
    user: images.user8,
    seller: "7200d8d8390d9993ujdc93900399djj277x",
  },
];
function Fllower() {
  const [optionAction, setOptionAction] = useState("popular");
  const [data, setData] = useState(FollowingArray);
  useEffect(() => {
    if (optionAction == "popular") {
      setData(NewsArray);
    } else if (optionAction == "following") {
      setData(FollowingArray);
    } else {
      setData(NewsArray);
    }
  }, [optionAction]);
  return (
    <div className="mt-10 ">
      <TopList
        heading="Top List Creator..."
        btn1="popular"
        btn2="following"
        btn3="news"
        icon1={<RiUserFollowFill />}
        icon2={<RiUserUnfollowFill />}
        icon3={<RiAwardLine />}
        setOptionAction={setOptionAction}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {data.map((item, index) => {
          return (
            <FllowerCard key={index} bg={item.background} user={item.user} />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-16 gap-10">
        <Button btnName="show me more" />
        <Button btnName="become, author" />
      </div>
    </div>
  );
}

export default Fllower;
