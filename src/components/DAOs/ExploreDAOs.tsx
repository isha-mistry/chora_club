"use client";
import Image from "next/image";
import React, { useState } from "react";
import search from "@/assets/images/daos/search.png";
import op_logo from "@/assets/images/daos/op.png";
import arb_logo from "@/assets/images/daos/arbitrum.jpg";

function ExploreDAOs() {
  const dao_info = [
    { name: "Optimism", value: "108.76k", img: op_logo },
    { name: "Arbitrum", value: "205k", img: arb_logo },
    // { name: "Aave", value: "1508", img: aave_logo },
    // { name: "Compound", value: "4002", img: comp_logo },
    // { name: "Uniswap", value: "80987", img: uni_logo },
  ];

  const [daoInfo, setDaoInfo] = useState(dao_info);

  return (
    <div>
      <div className="text-blue-shade-200 font-medium text-3xl font-quanty py-4">
        Explore DAOs
      </div>

      <div
        style={{ background: "rgba(238, 237, 237, 0.36)" }}
        className="flex border-[0.5px] border-black w-fit rounded-full my-3 font-poppins"
      >
        <input
          type="text"
          placeholder="Search DAOs"
          style={{ background: "rgba(238, 237, 237, 0.36)" }}
          className="pl-5 rounded-full outline-none"
        ></input>
        <span className="flex items-center bg-black rounded-full px-6 py-3">
          <Image src={search} alt="search" width={20} />
        </span>
      </div>

      <div className="grid min-[475px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 py-8 font-poppins">
        {daoInfo.map((daos, index) => (
          <div
            key={daos.name}
            style={{boxShadow: "0px 4px 50.8px 0px rgba(0, 0, 0, 0.11)"}}
            className="px-5 py-7 rounded-2xl cursor-pointer"
            // onClick={() => handleClick(daos.name)}
          >
            <div className="flex justify-center">
              <Image
                src={daos.img}
                alt="Image not found"
                width={80}
                className="rounded-full"
              ></Image>
            </div>
            <div className="text-center">
              <div className="py-3">
                <div className="font-semibold">{daos.name}</div>
                <div className="text-sm bg-[#F2F2F2] py-2 rounded-md mt-3">{daos.value} Participants</div>
              </div>

              {/* <button
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 w-full rounded"
              onClick={() => handleButtonClick(daos.name)}

              href={{
                pathname: `/all-daos/${daos.name}`,
                query:  `${daos}`,
              }}
            >
              View More
            </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreDAOs;
