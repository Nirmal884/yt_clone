import React, { useEffect, useState } from "react";
import VideoCard from "../cards/videoCard";
import { makeRequest } from "../axios";

const SideView = () => {

    const [data,setData] = useState();

    

    useEffect(() => {
      makeRequest.get("/feeds/get-videos").then((res)=>{
        const result = res?.data?.data?.results?.data
        setData(result)
      }).catch(error =>{
        console.log(error)
      })
    }, [])
    

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 64px)" }}
    >
      <div className="p-2">
        <VideoCard  data={data}/>
      </div>
    </div>
  );
};

export default SideView;
