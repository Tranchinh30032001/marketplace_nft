import React, { useState } from "react";
import { Button, Button2 } from "../rootindex";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function Filter({
  categoryActive,
  handleClick,
  btnName1,
  btnName2,
  btnName3,
  btnName4,
  btnName5,
  btnChoice,
}: any) {
  const [filter, setFilter] = useState(true);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <Button
            btnName={btnName1}
            categoryActive={categoryActive}
            handleClick={handleClick}
          />
          {btnName2 && (
            <Button
              btnName={btnName2}
              categoryActive={categoryActive}
              handleClick={handleClick}
            />
          )}
          {btnName3 && (
            <Button
              btnName={btnName3}
              categoryActive={categoryActive}
              handleClick={handleClick}
            />
          )}
          {btnName4 && (
            <Button
              btnName={btnName4}
              categoryActive={categoryActive}
              handleClick={handleClick}
            />
          )}
          {btnName5 && (
            <Button
              btnName={btnName5}
              categoryActive={categoryActive}
              handleClick={handleClick}
            />
          )}
        </div>
        <Button2
          heading={btnChoice}
          icon1={<FaFilter />}
          icon2={<FaAngleUp />}
          icon3={<FaAngleDown />}
          handleClick={handleFilter}
        />
      </div>
      <div>
        {filter ? (
          <div className="mt-6">
            <hr />
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button2
                heading="10ETH"
                icon1={<FaWallet />}
                icon2={<AiFillCloseCircle />}
              />
              <Button2
                heading="Images"
                icon1={<FaImages />}
                icon2={<AiFillCloseCircle />}
                icon3={<MdVerified />}
              />
              <Button2
                heading="Videos"
                icon1={<FaVideo />}
                icon2={<AiFillCloseCircle />}
                icon3={<MdVerified />}
              />
              <Button2
                heading="Musics"
                icon1={<FaMusic />}
                icon2={<AiFillCloseCircle />}
                icon3={<MdVerified />}
              />
              <Button2
                heading="Verified"
                icon1={<FaUserAlt />}
                icon2={<AiFillCloseCircle />}
                icon3={<MdVerified />}
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
