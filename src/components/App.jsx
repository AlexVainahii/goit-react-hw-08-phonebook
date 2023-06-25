import { PhoneBook } from 'pages/PhoneBook.jsx/PhoneBook';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} draggable={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/contacts" element={<PhoneBook />}></Route>
        </Route>
      </Routes>
    </>
  );
};
