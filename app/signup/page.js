"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase";

export default function SignupPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [diverLevel, setDiverLevel] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUp() {
    setMessage("");

    if (!nickname.trim()) {
      setMessage("닉네임을 입력해주세요.");
      return;
    }

    if (!email.trim()) {
      setMessage("이메일을 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      setMessage("비밀번호는 6자 이상 입력해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!diverLevel) {
      setMessage("다이버 레벨을 선택해주세요.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
          diver_level: diverLevel,
        },
      },
    });

    if (error) {
      setLoading(false);
      setMessage("회원가입 실패: " + error.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: data.user.id,
          nickname,
          diver_level: diverLevel,
        });

      if (profileError) {
        setLoading(false);
        setMessage("계정은 생성됐지만 프로필 저장에 실패했습니다.");
        return;
      }
    }

    setLoading(false);
    setMessage("회원가입 완료! 이메일 인증 후 로그인해주세요.");
  }

  return (
    <main className="signupPage">
      <div className="signupCard">
        <div className="loginLogo">BlueDive</div>

        <h1>BlueDive에 합류하세요.</h1>
        <p>포인트를 공유하고 다이버들과 연결되어 보세요.</p>

        <label>닉네임</label>
        <input
          type="text"
          placeholder="사이트에서 사용할 닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <label>이메일</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>비밀번호</label>
        <input
          type="password"
          placeholder="6자 이상"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호 다시 입력"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label>다이버 레벨</label>
        <select
          value={diverLevel}
          onChange={(e) => setDiverLevel(e.target.value)}
        >
          <option value="">선택해주세요</option>
          <option value="입문">입문</option>
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option>
          <option value="강사">강사</option>
          <option value="기타">기타</option>
        </select>

        <button
          className="signupPrimary"
          onClick={signUp}
          disabled={loading}
        >
          {loading ? "가입 중..." : "회원가입"}
        </button>

        {message && <div className="loginMessage">{message}</div>}

        <div className="authDivider">
          <span>이미 계정이 있으신가요?</span>
        </div>

        <a className="signupLinkButton" href="/login">
          로그인으로 돌아가기
        </a>
      </div>
    </main>
  );
}
