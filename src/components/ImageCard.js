import React from "react";

const ImageCard = ({image}) => {
    const tags= image.tags.split(',');

  return (
    <div className="overflow-hidden max-w-sm shadow-lg rounded-lg cursor-pointer m-auto">
      <img alt=''
        src={image.webformatURL}
        className="h-60 w-full object-cover"
      />
      <div className="bg-white dark:bg-gray-800 w-full p-4">
        <div className="font-bold text-lg text-blue-700 flex flex-wrap justify-starts items-center mb-2">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:      </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes:      </strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads:      </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-6 py-3">
        {tags.map( (tag,index)=> (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-2 my-1 mx-2 font-semibold text-gray-700 mr-2 text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
