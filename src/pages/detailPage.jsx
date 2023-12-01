import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import ReactPlayer from "react-player/youtube";
import SuggestedVideo from "./suggestedVideo";
import { useParams } from "react-router-dom";
import { makeRequest } from "../axios";
import { AiOutlineLike } from "react-icons/ai";

const DetailPage = () => {
  const [data, setData] = useState();
  const [list, setList] = useState();
  const { id } = useParams();

  useEffect(() => {
    makeRequest
      .get(`/feeds/get-video-details?feed_id=${id}`)
      .then((res) => {
        const result = res?.data?.data;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    makeRequest.get("/feeds/get-videos").then((res)=>{
      const result = res?.data?.data?.results?.data
      setList(result)
    }).catch(error =>{
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3">
        {/* Section 1 */}
        <div className="col-span-2 p-2 mt-5 ml-5">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={data?.video}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={false}
            />
          </div>
          <div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {data?.channel_name}
          </div>

          <div className="flex justify-between">
            <div class="flex items-center mt-2">
              <img
                src={data?.thumbnail}
                alt="logo"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-2 flex flex-col items-start">
                <strong className="overflow-hidden max-w-xs">
                  Andrew Tate
                </strong>
                <span>55k subscribers</span>
              </div>
            </div>

            <div className="flex text-black mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/[0.15]">
                <AiOutlineLike className="text-xl text-black mr-2" />2 likes
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/[0.15] ml-4">
                5 views
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-1">
          <SuggestedVideo   list = {list}/>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
