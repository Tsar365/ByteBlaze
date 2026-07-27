// import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../pages/home/Home";
import Blogs from "../../pages/blogs/Blogs";
import Blog from "../../pages/blogs/blog";
import BookMarks from "../../pages/bookmarks/BookMarks";
import Content from "../../pages/blogs/Content";
import Author from "../../pages/blogs/Author";

 export const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayouts />,
			children: [
				{
					// index: true,  // ✅ matches parent path exactly, i.e. "/"
					path: '/',
					element: <Home />,
				},
				{
					path: '/blogs', // ✅ relative, not '/blogs'
					element: <Blogs />,
					loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`),
				},
				{
					path: '/blog/:id',
					element: <Blog />,
					loader: (data) => {
						console.log(data);

						return fetch(`https://dev.to/api/articles/${data.params.id}`);
					},
					children: [
						{
							index: true,
							element: <Content />,
							loader: ({ params }) =>
								fetch(`https://dev.to/api/articles/${params?.id}`),
						},
						{
							path: 'author',
							element: <Author />,
							loader: ({ params }) =>
								fetch(`https://dev.to/api/articles/${params?.id}`),
						},
					],
				},
				{
					path: '/bookmarks', // ✅ relative, not '/bookmarks'
					element: <BookMarks />,
				},
			],
		},
 ]);