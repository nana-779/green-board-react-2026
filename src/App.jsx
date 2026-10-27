import { Route, Routes } from "react-router-dom";

import { useContext, useState } from "react";
import BoardFooter from "./components/boardFooter";
import BoardHeader from "./components/boardHeader";
import PostList from "./components/postList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";

import "./style.css";
import { useAuthContext } from "./useAuthContext";

export default function App() {
  const { token } = useAuthContext();

  function savePost(post) {
    // setPosts((currentPosts) => [
    //   {
    //     id: Date.now(),
    //     ...post,
    //     authorNickname: "학생",
    //     createdDatetime: "2026-10-22",
    //   },
    //   ...currentPosts,
    // ]);
  }

  // App > TodoList > TodoItem > Item
  // 위와 같이 자식에게 값을 전달하기위해 해당값을 필요로 하지 않는 컴포넌트들을 거치는 문제를
  // props drilling < 이라고 함
  // Context
  // Auth(토큰 등) 정보를 Context에 저장하고
  // App에서 token를 자식에게 전해주던 방식에서
  // token이 필요한 컴포넌트가 Context해서 가져다 쓰는 방식으로 변경

  return (
    <>
      <BoardHeader />

      <Routes>
        <Route path="/" element={token ? <PostList /> : <Login />} />
        <Route path="/posts" element={token ? <PostList /> : <Login />} />
        <Route path="/posts/new" element={<PostForm onSave={savePost} />} />
        <Route
          path="/posts/:postId"
          element={token ? <PostDetail /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <BoardFooter />
    </>
  );
}
