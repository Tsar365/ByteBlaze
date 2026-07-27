// import React from 'react';
import { Link } from 'react-router';

const Blogcard = () => {
  return (
		<div>
			<Link
				to='/'
				className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white shadow-sm rounded">
				<img
					role="presentation"
					className="object-cover w-full rounded h-44 bg-gray-200"
					src="https://source.unsplash.com/random/480x360?1"
				/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
						In usu laoreet repudiare legendos
					</h3>
					<span className="text-xs text-gray-500">January 21, 2021</span>
					<p className="text-gray-700">
						Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
						neglegentur, ex has tantas percipit perfecto. At per tempor albucius
						perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
						indoctum pri.
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Blogcard;