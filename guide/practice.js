(() => {
  const synth = window.speechSynthesis;
  function speak(text, btn) {
    if (!('speechSynthesis' in window)) {
      alert('這個瀏覽器不支援語音播放，請改用本段上方的音檔播放器。');
      return;
    }
    synth.cancel();
    document.querySelectorAll('.play-btn.playing').forEach(b => { b.classList.remove('playing'); b.textContent = '▶ 播放這一句'; });
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.86;
    u.pitch = 1;
    btn.classList.add('playing');
    btn.textContent = '■ 停止';
    u.onend = u.onerror = () => { btn.classList.remove('playing'); btn.textContent = '▶ 播放這一句'; };
    synth.speak(u);
  }
  document.querySelectorAll('.practice-row').forEach((row) => {
    if (row.querySelector('.play-btn')) return;
    const en = row.querySelector('.practice-en');
    if (!en) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'play-btn';
    btn.textContent = '▶ 播放這一句';
    btn.addEventListener('click', () => {
      if (btn.classList.contains('playing')) {
        synth.cancel();
        btn.classList.remove('playing');
        btn.textContent = '▶ 播放這一句';
      } else {
        speak(en.textContent.trim(), btn);
      }
    });
    row.insertBefore(btn, en);
  });
})();
