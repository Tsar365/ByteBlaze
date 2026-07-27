// import React from 'react';

import { useLoaderData } from "react-router";
import placeholderImg from '/images/404.jpg';

const Content = () => {
  const blog = useLoaderData();
  	const { cover_image, tags } = blog;
 
  return (
		<div
			to={`/blog/${blog.id}`}
			className=" mx-auto group hover:no-underline focus:no-underline bg-white shadow-sm rounded">
			<img
				role="presentation"
				className="object-cover w-full rounded h-44 bg-gray-200"
				src={cover_image || placeholderImg}
			/>

			<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
				{tags.map((tag) => (
					<a
						key={tag}
						rel="noopener noreferrer"
						href="#"
						className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
						#{tag}
					</a>
				))}
			</div>

			
		</div>
	);
};

export default Content;