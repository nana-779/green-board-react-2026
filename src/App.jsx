import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import BoardFooter from "./components/boardFooter";
import BoardHeader from "./components/boardHeader";
import PostList from "./components/postList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";

import "./style.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "첫번째 게시글",
      authorNickname: "학생1",
      createdDatetime: "2026-10-21",
      content: "아아아아",
    },
    {
      id: 2,
      title: "두번째 게시글",
      authorNickname: "학생2",
      createdDatetime: "2026-10-21",
      content: "나나나나나나나",
    },
  ]);

  const [page, setPage] = useState("list");

  function addPracticePost() {
    const id = Date.now();
    setPosts((currentPosts) => [
      {
        id,
        title: `임시 게시글 ${currentPosts.length}`,
        authorNickname: "학생",
        createdDatetime: "2026-10-21",
      },
      ...currentPosts,
    ]);
  }

  function savePost(post) {
    setPosts((currentPosts) => [
      {
        id: Date.now(),
        ...post,
        authorNickname: "학생",
        createdDatetime: "2026-10-22",
      },
      ...currentPosts,
    ]);
  }

  return (
    <>
      <BoardHeader
        isLoggedIn={isLoggedIn}
        onLogout={() => setIsLoggedIn(false)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <PostList posts={posts} onAddPracticePost={addPracticePost} />
          }
        />
        <Route
          path="/posts"
          element={
            <PostList posts={posts} onAddPracticePost={addPracticePost} />
          }
        />
        <Route path="/posts/new" element={<PostForm onSave={savePost} />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
      </Routes>

      <BoardFooter />
    </>
  );
}
