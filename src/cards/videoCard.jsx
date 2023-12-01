import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


const VideoCard = ({ data }) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item) => (

        <Link to={`/details/${item.id}`}>
        <div key={item.id} className="max-w-2xl mx-auto bg-white overflow-hidden shadow-md rounded-lg cursor-pointer"
       
        >

          {/* Video Thumbnail */}
          <img
            className="w-full h-48 object-cover rounded-md"
            src={item.thumbnail}
            alt="Video Thumbnail"
          />

          {/* Video Information */}
          <div className="p-2">
            <div className="flex items-center">
              <img
                src={item.thumbnail}
                className="rounded-full"
                alt="avatar"
              />
              <div className="ml-2 flex flex-col items-start">
                <strong className="overflow-hidden max-w-xs">{item.title}</strong>
                <span>{item.channel_name}</span>
              </div>
            </div>

            
            <div className="flex items-center text-gray-500 text-sm ml-10">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
              <span>{item.id} views</span>
              <span className="mx-2">•</span>
              <span>{moment(item.created_date).format('DD-MM-YYYY')}</span>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoCard;
