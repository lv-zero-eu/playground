<div class="container">
  <svg
    class="wave wave-1"
    width="1421"
    height="424"
    viewBox="0 0 1421 424"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-499 58.1667L-419 119.139C-339 180.111 -179 302.056 -19 277.667C141 253.278 301 82.5556 461 70.3611C621 58.1667 781 204.5 941 216.694C1101 228.889 1261 106.944 1341 45.9722L1421 -15V424H1341C1261 424 1101 424 941 424C781 424 621 424 461 424C301 424 141 424 -19 424C-179 424 -339 424 -419 424H-499V58.1667Z"
    />
  </svg>
  <svg
    class="wave wave-2"
    width="1005"
    height="426"
    viewBox="0 0 1005 426"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1001.18 369.102L941.416 309.385C881.65 249.668 762.119 130.233 641.178 152.68C520.236 175.127 397.885 339.457 277.061 350.08C156.237 360.704 36.9408 217.622 -83.648 204.599C-204.237 191.576 -326.118 308.611 -387.059 367.129L-448 425.646L-443.769 0L-383.416 0.599882C-323.063 1.19976 -202.357 2.39953 -81.6502 3.59929C39.0562 4.79905 159.763 5.99882 280.469 7.19858C401.175 8.39834 521.882 9.59811 642.588 10.7979C763.294 11.9976 884.001 13.1974 944.354 13.7973L1004.71 14.3972L1001.18 369.102Z"
    />
  </svg>

  <svg
    class="wave wave-3"
    width="832"
    height="211"
    viewBox="0 0 832 211"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 29.9377L19.9943 20.0713C41.3629 12.6715 79.3514 -4.5948 119.714 2.80502C160.077 12.6715 198.066 47.2039 238.429 59.537C278.791 71.87 316.78 64.4702 357.143 47.2039C397.506 29.9377 435.494 2.80502 475.857 7.73824C516.22 12.6715 554.209 47.2039 594.571 84.203C634.934 123.669 672.923 168.068 713.286 187.801C753.649 210 791.637 210 813.006 210C791.637 210 753.649 210 713.286 210C672.923 210 634.934 210 594.571 210C554.209 210 516.22 210 475.857 210C435.494 210 397.506 210 357.143 210C316.78 210 278.791 210 238.429 210C198.066 210 160.077 210 119.714 210C79.3514 210 41.3629 210 19.9943 210H1V29.9377Z"
    />
  </svg>
  <div class="circle" />
</div>

<style>
  .container {
    height: 370px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    animation: rotation 4s normal forwards;
  }
  .circle {
    border: 5px solid white;
    border-radius: 50%;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  .wave {
    position: absolute;
  }
  .wave-1 {
    bottom: -130px;
    left: -250px;
    fill: rgba(255, 255, 255, 0.15);
    animation: wave1 4s normal;
    animation-fill-mode: forwards;
  }
  .wave-2 {
    fill: rgba(196, 201, 250, 0.5);
    top: -75px;
    left: -300px;
    animation: wave2 4s normal;
    animation-fill-mode: forwards;
    transform: translate(-130px, -130px);
  }
  .wave-3 {
    bottom: -20px;
    left: -60px;
    fill: white;
    animation: wave3 4s normal;
    animation-fill-mode: forwards;
  }

  @keyframes rotation {
    from {
      rotate: 1turn;
    }
    to {
      rotate: 0;
    }
  }

  @keyframes wave1 {
    from {
      transform: translate(250px, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes wave3 {
    from {
      transform: translate(-140px, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes wave2 {
    from {
      transform: translate(-130px, -130px);
    }
    to {
      transform: translate(0, 0);
    }
  }
</style>
