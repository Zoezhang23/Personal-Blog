import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Main from './Component/Main/index'
import Archives from './Component/Archive/index'
import Categories from './Component/Categories/index'
import CategDetail from './Component/Categories/Detail/index'
import CategoryItems from './Component/Categories/CategoryItems/index'
import Tags from './Component/Tag/index'
import TagCloud from './Component/Tag/TagCloud'
import TagDetail from './Component/Tag/Detail/index'
import About from './Component/About'
import Articles from './Component/Article/index'
import Article from './Component/Article/Article'
import ArticleDetail from './Component/Article/Detail/index'
import { Register, RegisterSuccess } from './Component/Register/index'
import { LoginFailed, LoginSuccess } from './Component/Login/index'
import PersonalInfo from './Component/PersonalInfo/index'
import PageNotFound from './Component/PageNotFound'

export const LoginContext = React.createContext({ isLogin: false });
export const UserLoginContext = LoginContext.Consumer

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/*" element={<Home />} >
            <Route path="home/*" element={<Main />} >
              <Route path="register" element={<Register />} />
              <Route path="registerSuccess" element={<RegisterSuccess />} />
              <Route path="loginSuccess" element={<LoginSuccess />} />
              <Route path="loginFailed" element={<LoginFailed />} />
            </Route>
            <Route path="archive" element={<Archives />} />
            <Route path="categories/*" element={<Categories />}>
              <Route path="" element={<CategoryItems />} />
              <Route path="detail/:name" element={<CategDetail />} />
            </Route>
            <Route path="tag/*" element={<Tags />}>
              <Route path="" element={<TagCloud />} />
              <Route path="detail/:name" element={<TagDetail />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='article/*' element={<Articles />}>
              <Route path='' element={< Article />} />
              <Route path='detail/:id' element={< ArticleDetail />} />
            </Route>
            <Route path='personalInfo' element={<PersonalInfo />} > </Route>
            <Route path='logout' element={<Navigate replace to="/home" />} />
          </Route>
          <Route path="/:pageName" element={<PageNotFound />} />
        </Routes>
      </div >
    </LoginContext.Provider>
  )
}


