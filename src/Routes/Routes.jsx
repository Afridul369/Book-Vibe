import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {   index: true, 
        path: "/",
        loader: ()=> fetch('bookData.json'),
        Component: Home
    },
    {
        path: '/readlist',
        loader: ()=> fetch('bookData.json'),
        Component: ReadList
    },
    {
        path: '/bookdetails/:id',
        loader: ()=> fetch('bookData.json'),
        Component: BookDetails
    }   
    ]
  },
]);


