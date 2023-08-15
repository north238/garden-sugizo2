import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <div>
            <div>
              <h6>Garden-sugizo</h6>
              <h2>庭屋すぎ蔵</h2>
              <h5>「地元を愛する造園家」</h5>
            </div>
          </div>
          <div>
            <div>
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <h6>About</h6>
                    <h2>私たちについて</h2>
                    <p>私たちは個人でお庭まわりの工事を施工しています。</p>
                    <div>
                      <div>大切にしていること</div>①
                      お施主様とのこれまでと、これからの出会いに感謝し、お一人おひとりに最高のご提案をしたい
                      ② お施主様と友人のような関係になりたい
                    </div>
                    <p>
                      私たちにとって大きな利益が生まれそうでも、将来的に問題のありそうな工事、商品は売りません。
                      友人のような関係だからこそできるアドバイスがあります。
                    </p>
                    <a href="/about">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div>
              <h6>Services</h6>
              <h2>できること</h2>
              <p>
                庭木の剪定・植栽から造園デザインまで
                外構・エクステリア工事なども施工しております。
                お庭のことならお任せください。
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>施工実績</span>
              </div>
              <div>
                <div>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div>
                  <div>
                    <img src="/images/doma.jpg" alt="picture-1"></img>
                  </div>
                  <div>
                    <img src="/images/image_1.jpg" alt="picture-2"></img>
                  </div>
                  <div>
                    <img src="/images/image_2.jpg" alt="picture-3"></img>
                  </div>
                </div>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true"></span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <span>よくある質問</span>
                  </div>
                  <div>
                    <details>
                      <summary>どのような依頼できるのですか？</summary>
                      <p>
                        お庭・外構工事、デザイン、植栽、庭木の剪定・伐採・抜根、草刈りなどです。
                      </p>
                      <a href="/service">詳細ページへ</a>
                    </details>
                    <details>
                      <summary>見積だけでもできますか？</summary>
                      <p>
                        もちろんです。無料でお見積りさせていただきます。どんなことでもご気軽にご相談下さい。
                      </p>
                    </details>
                    <details>
                      <summary>対応しているエリアはどこですか？</summary>
                      <p>
                        春日井市を中心に活動しています。隣接している市でも対応可能です。
                      </p>
                      <a href="/map">詳細ページへ</a>
                    </details>
                    <details>
                      <summary>どれくらいの期間で施工できますか？</summary>
                      <p>
                        施工内容、環境より異なります。お客様のお庭を拝見させていただきお伝えいたします。
                      </p>
                    </details>
                  </div>
                  <div>
                    <a href="/service">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div>
              <div>
                <h6>Contact</h6>
                <h2>お問い合わせ</h2>
                <div>
                  <p>
                    お庭まわりでお困りの方...
                    あなたに寄りそったご提案をさせていただきます。
                    もちろん、庭木１本からでも大丈夫です。
                    お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>WEBからのお問い合わせ</div>
                <div>
                  <a href="/forms">お問い合わせ</a>
                </div>
              </div>

              <div>
                <div>お電話でのお問い合わせ</div>
                <div>
                  <p>
                    <a href="tel:+0568-50-2621">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <span> </span>0568-50-2621
                    </a>
                  </p>
                  <p>受付時間 8:00～18:00 (お盆、年末年始除く)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
