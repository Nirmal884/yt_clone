import moment from "moment/moment";
import React from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const SuggestedVideo = ({list}) => {
  return (
    <>
      <PerfectScrollbar>
        <div>
          {list?.map((item)=>{
            return(
              <div className="flex mb-3 mt-5 ml-5">
            <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={item?.thumbnail}
                alt="Video"
              />
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
                {item.channel_title}
              </span>
              <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-black/[0.7] flex items-center mt-3">
                {item?.title}
              </span>
              <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden mt-3">
                <span>23 views</span>
                <span className="flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">{moment(item.created_date).format("DD-MM-YYYY")}</span>
              </div>
            </div>
          </div>
            )
          })}
          


          {/* <div className="flex mb-3 mt-5">
            <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src=""
                alt="Video"
              />
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
                Title
              </span>
              <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-black/[0.7] flex items-center mt-3">
                Author
              </span>
              <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden mt-3">
                <span>23 views</span>
                <span className="flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">time</span>
              </div>
            </div>
          </div> */}
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default SuggestedVideo;
