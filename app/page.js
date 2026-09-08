export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">BlueDive</div>

        <nav>
          <a href="#">포인트</a>
          <a href="#">커뮤니티</a>
          <a href="#">다이빙샵</a>
          <a href="#">랭킹</a>
          <a href="#">마이페이지</a>
        </nav>

        <button className="loginBtn">로그인</button>
      </header>

      <section className="hero">
        <div className="heroOverlay">
          <p className="smallText">대한민국 프리다이버들의 바다 지도</p>
          <h1>
            더 깊은 오늘,
            <br />
            더 푸른 내일.
          </h1>

          <p>
            다이버들이 직접 발견한 포인트와 사진,
            <br />
            운영진이 직접 검증한 프리다이빙 정보를 만나보세요.
          </p>

          <div className="heroButtons">
            <button className="primaryBtn">포인트 둘러보기</button>
            <button className="secondaryBtn">포인트 제보하기</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <span>📍</span>
          <strong>포인트 지도</strong>
          <p>전국 프리다이빙 포인트</p>
        </div>

        <div>
          <span>📷</span>
          <strong>사진 & 후기</strong>
          <p>다이버들의 실제 기록</p>
        </div>

        <div>
          <span>✓</span>
          <strong>운영진 검증</strong>
          <p>직접 방문한 포인트</p>
        </div>

        <div>
          <span>⭐</span>
          <strong>포인트 랭킹</strong>
          <p>회원 평점 기반 순위</p>
        </div>
      </section>

      <section className="content">
        <div className="sectionTitle">
          <div>
            <span>DISCOVER</span>
            <h2>이번 주 인기 포인트</h2>
          </div>

          <button>전체보기 →</button>
        </div>

        <div className="cards">
          <article>
            <div className="cardImage ocean1"></div>
            <div className="cardContent">
              <p>제주</p>
              <h3>서귀포 문섬</h3>
              <span>⭐ 4.9 · 운영진 검증</span>
            </div>
          </article>

          <article>
            <div className="cardImage ocean2"></div>
            <div className="cardContent">
              <p>강원</p>
              <h3>고성 아야진</h3>
              <span>⭐ 4.8 · 회원 추천</span>
            </div>
          </article>

          <article>
            <div className="cardImage ocean3"></div>
            <div className="cardContent">
              <p>경남</p>
              <h3>통영 욕지도</h3>
              <span>⭐ 4.7 · 운영진 검증</span>
            </div>
          </article>
        </div>
      </section>

      <section className="cta">
        <p>좋은 바다를 알고 계신가요?</p>
        <h2>당신의 포인트를 공유해주세요.</h2>
        <button>새 포인트 등록하기</button>
      </section>
    </main>
  );
}
