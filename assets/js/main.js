// 軽量な共通スクリプト：用語ツールチップのキーボード対応、目次ハイライト等
(function () {
  // タッチデバイス向け：.term をタップで data-tip を表示
  document.querySelectorAll('.term[data-tip]').forEach((el) => {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', el.getAttribute('data-tip'));
  });

  // スクロール時に現在地のセクションをハイライト（章ページのみ）
  const tocLinks = document.querySelectorAll('.section-toc a[href^="#"]');
  if (tocLinks.length) {
    const targets = Array.from(tocLinks).map((a) =>
      document.querySelector(a.getAttribute('href'))
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = targets.indexOf(entry.target);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove('active'));
            tocLinks[idx].classList.add('active');
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    targets.forEach((t) => t && observer.observe(t));
  }
})();
