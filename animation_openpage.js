function agrandir(nomdiv, thread) {
    let img = document.querySelector(nomdiv + ' img');

    img.classList.add('agrandie');

    setTimeout(function() {
      window.location.href = 'histoire/thread_1/' + thread;
    }, 2000);
}
