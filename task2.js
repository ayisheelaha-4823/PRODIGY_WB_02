let min = 0, sec = 0, msec = 0;
    let timer;
    let running = false;

    const minText = document.querySelector(".min");
    const secText = document.querySelector(".sec");
    const msecText = document.querySelector(".msec");
    const playBtn = document.querySelector(".Play");
    const resetBtn = document.querySelector(".Reset");
    const lapBtn = document.querySelector(".Lap");
    const lapsList = document.querySelector(".laps");

    function updateTime() {
      msec++;
      if (msec >= 100) {
        msec = 0;
        sec++;
      }
      if (sec >= 60) {
        sec = 0;
        min++;
      }

      minText.textContent = (min < 10 ? "0" + min : min) + " :";
      secText.textContent = (sec < 10 ? "0" + sec : sec) + " :";
      msecText.textContent = (msec < 10 ? "0" + msec : msec);
    }

    playBtn.addEventListener("click", () => {
      if (!running) {
        timer = setInterval(updateTime, 10);
        running = true;
        playBtn.textContent = "Pause";
      } else {
        clearInterval(timer);
        running = false;
        playBtn.textContent = "Start";
      }
    });

    resetBtn.addEventListener("click", () => {
      clearInterval(timer);
      running = false;
      min = sec = msec = 0;
      minText.textContent = "00 :";
      secText.textContent = "00 :";
      msecText.textContent = "00";
      playBtn.textContent = "Start";
      lapsList.innerHTML = "";
    });

    lapBtn.addEventListener("click", () => {
      if (running) {
        const li = document.createElement("li");
        li.classList.add("lap-item");
        li.innerHTML = `<span class="number">#${lapsList.children.length + 1}</span>
                        <span class="time-stamp">${(min < 10 ? "0"+min : min)} : ${(sec < 10 ? "0"+sec : sec)} : ${(msec < 10 ? "0"+msec : msec)}</span>`;
        lapsList.appendChild(li);
      }
    });