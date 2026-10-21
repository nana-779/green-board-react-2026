import { useState } from "react";
import BoardFooter from "./components/boardFooter";
import BoardHeader from "./components/boardHeader";
import PostList from "./components/postList";
import "./style.css";

export default function App() {
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

  return (
    <>
      <BoardHeader />

      <main>
        <h1>게시판</h1>
        <p id="list-message" role="status">
          게시글 목록
        </p>
        <button id="retry-list" type="button">
          목록 다시 시도
        </button>

        <PostList posts={posts} onSelect={(post) => window.alert(post.title)} />
        <button type="button" onClick={addPracticePost}>
          임시게시글 추가
        </button>

        <div className="pagination" aria-label="페이지 이동">
          <button id="previous-page" type="button" disabled>
            이전
          </button>
          <span id="page-number">1 페이지</span>
          <button id="next-page" type="button" disabled>
            다음
          </button>
        </div>
      </main>

      <BoardFooter />
    </>
  );
}
