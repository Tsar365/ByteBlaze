// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import BookMarks from './pages/bookmarks/BookMarks.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';

const router = createBrowserRouter([
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
       loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
			},
			{
				path: '/bookmarks', // ✅ relative, not '/bookmarks'
				element: <BookMarks />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
