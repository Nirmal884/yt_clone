import React, { useEffect, useState } from "react";
import VideoCard from "../cards/videoCard";
import { makeRequest } from "../axios";
import LoadingBar from "react-top-loading-bar";

const SideView = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(80);
    makeRequest
      .get("/feeds/get-videos")
      .then((res) => {
        const result = res?.data?.data?.results?.data;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 64px)" }}
    >
      <div className="p-2">
        {loading ? (
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={5}
            onLoaderFinished={() => setProgress(progress)}
          />
        ) : (
          <VideoCard data={data} />
        )}
      </div>
    </div>
  );
};

export default SideView;
