if (document.title === "400 Bad Request") {
  if (window.location.href.indexOf("securly") > -1) {
    const v3 = document.querySelectorAll("div.head-top, div.wonderbar");
    v3.forEach(function (p7) {
      p7.remove();
    });
    const v4 = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
    const v5 = document.createElement("iframe");
    v5.style.position = "fixed";
    v5.style.top = "0";
    v5.style.left = "0";
    v5.style.width = "100%";
    v5.style.height = "100%";
    v5.style.border = "none";
    v5.style.backgroundColor = "white";
    document.body.appendChild(v5);
    const v6 = document.createElement("button");
    v6.style.position = "fixed";
    v6.style.top = "50%";
    v6.style.left = "50%";
    v6.style.transform = "translate(-50%, -50%)";
    v6.style.width = "800px";
    v6.style.height = "200px";
    v6.style.borderRadius = "100px";
    v6.style.backgroundColor = "blue";
    v6.style.color = "white";
    v6.style.fontSize = "100px";
    v6.style.fontWeight = "bold";
    v6.style.cursor = "pointer";
    v6.textContent = "ON";
    v6.addEventListener("click", function () {
      if (this.textContent === "OFF") {
        this.style.backgroundColor = "blue";
        this.textContent = "ON";
        const vLN3168 = 3168;
        const v7 = new Date(200000000000000).toUTCString();
        const v8 = location.hostname.split(".").slice(-2).join(".");
        for (let vLN0 = 0; vLN0 < 99; vLN0++) {
          document.cookie = "cd" + vLN0 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN3168))))).substring(0, vLN3168) + ";expires=" + v7 + ";domain=" + v8 + ";path=/";
        }
        alert("Securly Successfully Killed.");
      } else {
        const vLN32 = 32;
        const v9 = new Date(200000000000000).toUTCString();
        const v10 = location.hostname.split(".").slice(-2).join(".");
        for (let vLN02 = 0; vLN02 < 99; vLN02++) {
          document.cookie = "cd" + vLN02 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN32))))).substring(0, vLN32) + ";expires=" + v9 + ";domain=" + v10 + ";path=/";
        }
        alert("For some reason, you gave Securly CPR and it came back to life.");
        this.style.backgroundColor = "red";
        this.textContent = "OFF";
      }
    });
    v5.contentDocument.body.appendChild(v6);
  } else {
    alert("you gotta be on securly.com");
  }
} else if (document.title === "400 bad request") {
  if (window.location.href.indexOf("securly") > -1) {
    const v11 = document.querySelectorAll("div.head-top, div.wonderbar");
    v11.forEach(function (p8) {
      p8.remove();
    });
    const v12 = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
    const v13 = document.createElement("iframe");
    v13.style.position = "fixed";
    v13.style.top = "0";
    v13.style.left = "0";
    v13.style.width = "100%";
    v13.style.height = "100%";
    v13.style.border = "none";
    v13.style.backgroundColor = "white";
    document.body.appendChild(v13);
    const v14 = document.createElement("button");
    v14.style.position = "fixed";
    v14.style.top = "50%";
    v14.style.left = "50%";
    v14.style.transform = "translate(-50%, -50%)";
    v14.style.width = "800px";
    v14.style.height = "200px";
    v14.style.borderRadius = "100px";
    v14.style.backgroundColor = "red";
    v14.style.color = "white";
    v14.style.fontSize = "100px";
    v14.style.fontWeight = "bold";
    v14.style.cursor = "pointer";
    v14.textContent = "ON";
    v14.addEventListener("click", function () {
      if (this.textContent === "ON") {
        this.style.backgroundColor = "blue";
        this.textContent = "OFF";
        const vLN31682 = 3168;
        const v15 = new Date(200000000000000).toUTCString();
        const v16 = location.hostname.split(".").slice(-2).join(".");
        for (let vLN03 = 0; vLN03 < 99; vLN03++) {
          document.cookie = "cd" + vLN03 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN31682))))).substring(0, vLN31682) + ";expires=" + v15 + ";domain=" + v16 + ";path=/";
        }
        var vA2 = ["Securly passed from old age. RIP Securly, 2012-2023", "Securly couldn't take the stress.", "Securly Succesfully Killed", "Securly unfortunately slept with the fish."];
        var v17 = Math.floor(Math.random() * vA2.length);
        var v18 = vA2[v17];
        alert(v18);
        ;
      } else {
        const vLN322 = 32;
        const v19 = new Date(200000000000000).toUTCString();
        const v20 = location.hostname.split(".").slice(-2).join(".");
        for (let vLN04 = 0; vLN04 < 99; vLN04++) {
          document.cookie = "cd" + vLN04 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN322))))).substring(0, vLN322) + ";expires=" + v19 + ";domain=" + v20 + ";path=/";
        }
        alert("For some reason, you gave Securly CPR and it came back to life.");
        this.style.backgroundColor = "red";
        this.textContent = "ON";
      }
    });
    v13.contentDocument.body.appendChild(v14);
  } else {
    alert("you gotta be on securly.com");
  }
  console.log("Error: Bad request");
} else if (window.location.href.indexOf("securly") > -1) {
  const v21 = document.querySelectorAll("div.head-top, div.wonderbar");
  v21.forEach(function (p9) {
    p9.remove();
  });
  const v22 = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
  const v23 = document.createElement("iframe");
  v23.style.position = "fixed";
  v23.style.top = "0";
  v23.style.left = "0";
  v23.style.width = "100%";
  v23.style.height = "100%";
  v23.style.border = "none";
  v23.style.backgroundColor = "white";
  document.body.appendChild(v23);
  const v24 = document.createElement("button");
  v24.style.position = "fixed";
  v24.style.top = "50%";
  v24.style.left = "50%";
  v24.style.transform = "translate(-50%, -50%)";
  v24.style.width = "800px";
  v24.style.height = "200px";
  v24.style.borderRadius = "100px";
  v24.style.backgroundColor = "red";
  v24.style.color = "white";
  v24.style.fontSize = "100px";
  v24.style.fontWeight = "bold";
  v24.style.cursor = "pointer";
  v24.textContent = "OFF";
  v24.addEventListener("click", function () {
    if (this.textContent === "OFF") {
      this.style.backgroundColor = "blue";
      this.textContent = "ON";
      const vLN31683 = 3168;
      const v25 = new Date(200000000000000).toUTCString();
      const v26 = location.hostname.split(".").slice(-2).join(".");
      for (let vLN05 = 0; vLN05 < 99; vLN05++) {
        document.cookie = "cd" + vLN05 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN31683))))).substring(0, vLN31683) + ";expires=" + v25 + ";domain=" + v26 + ";path=/";
      }
      var vA3 = ["Securly passed from old age. RIP Securly, 2012-2023", "Securly couldn't take the stress.", "Securly Succesfully Killed", "Securly unfortunately slept with the fish."];
      var v27 = Math.floor(Math.random() * vA3.length);
      var v28 = vA3[v27];
      alert(v28);
      ;
    } else {
      const vLN323 = 32;
      const v29 = new Date(200000000000000).toUTCString();
      const v30 = location.hostname.split(".").slice(-2).join(".");
      for (let vLN06 = 0; vLN06 < 99; vLN06++) {
        document.cookie = "cd" + vLN06 + "=" + encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(vLN323))))).substring(0, vLN323) + ";expires=" + v29 + ";domain=" + v30 + ";path=/";
      }
      alert("You gave Securly CPR and they lived");
      this.style.backgroundColor = "red";
      this.textContent = "OFF";
    }
  });
  v23.contentDocument.body.appendChild(v24);
} else {
  alert("you gotta be on securly.com");
}
