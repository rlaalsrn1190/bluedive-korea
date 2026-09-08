"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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

        <h1>다시 바다로.</h1>
        <p>BlueDive 계정으로 로그인하세요.</p>

        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginPrimary" onClick={signIn}>
          로그인
        </button>

        {message && <div className="loginMessage">{message}</div>}

        <div className="authDivider">
          <span>아직 회원이 아니신가요?</span>
        </div>

        <a className="signupLinkButton" href="/signup">
          BlueDive 회원가입
        </a>

        <a className="backHome" href="/">
          ← 홈으로 돌아가기
        </a>
      </div>
    </main>
  );
}
