// import React from 'react';
import { Link } from 'react-router';
import placeholderImg from '/images/404.jpg';

const Blogcard = ({ blog }) => {
	const { cover_image, title, description, published_at } = blog;
	return (
		<div>
			<Link
				to={`/blog/${blog.id}`}
				className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white shadow-sm rounded">
				<img
					role="presentation"
					className="object-cover w-full rounded h-44 bg-gray-200"
					src={cover_image || placeholderImg}
				/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
						{title}
					</h3>
					<span className="text-xs text-gray-500">
						
						{new Date(published_at).toLocaleDateString()}
					</span>
					<p className="text-gray-700">{description}</p>
				</div>
			</Link>
		</div>
	);
};

export default Blogcard;
