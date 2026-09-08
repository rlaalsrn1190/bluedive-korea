"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signUp() {
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("회원가입 완료! 이메일 인증 후 로그인해주세요.");
  }

  async function signIn() {
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("로그인 실패: " + error.message);
      return;
    }

    window.location.href = "/";
  }

  return (
    <main className="loginPage">
      <div className="loginCard">
        <div className="loginLogo">BlueDive</div>

        <h1>바다로 들어갈 준비가 됐나요?</h1>
        <p>프리다이버들과 포인트를 공유해보세요.</p>

        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="비밀번호 (6자 이상)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginPrimary" onClick={signIn}>
          로그인
        </button>

        <button className="loginSecondary" onClick={signUp}>
          회원가입
        </button>

        {message && <div className="loginMessage">{message}</div>}

        <a href="/">← 홈으로 돌아가기</a>
      </div>
    </main>
  );
}
