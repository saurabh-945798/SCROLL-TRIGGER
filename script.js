function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  loco();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://i.postimg.cc/Y95H8BMB/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-000.jpg
    https://i.postimg.cc/SRcpv1x2/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-001.jpg
    https://i.postimg.cc/wTdzmzwh/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-002.jpg
    https://i.postimg.cc/GhJCPff6/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-003.jpg
    https://i.postimg.cc/nhFt3kbr/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-004.jpg
    https://i.postimg.cc/yN54YCJ3/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-005.jpg
    https://i.postimg.cc/WzLBgmw2/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-006.jpg
    https://i.postimg.cc/2S0NMZrw/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-007.jpg
    https://i.postimg.cc/50CcXKv7/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-008.jpg
    https://i.postimg.cc/VN5P8kNc/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-009.jpg
    https://i.postimg.cc/d32zB75G/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-010.jpg
    https://i.postimg.cc/c1fyZjd6/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-011.jpg
    https://i.postimg.cc/sDyF2c2m/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-012.jpg
    https://i.postimg.cc/xTPwNzJ2/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-013.jpg
    https://i.postimg.cc/QdxRQd1W/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-014.jpg
    https://i.postimg.cc/jjBmY69z/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-015.jpg
    https://i.postimg.cc/SKn3P1ZS/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-016.jpg
    https://i.postimg.cc/x1xBtV3p/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-017.jpg
    https://i.postimg.cc/gJR5zXF1/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-018.jpg
    https://i.postimg.cc/hvBYfDKv/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-019.jpg
    https://i.postimg.cc/QCJy72Mb/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-020.jpg
    https://i.postimg.cc/qBsYW3G3/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-021.jpg
    https://i.postimg.cc/Gm5SvJbZ/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-022.jpg
    https://i.postimg.cc/3J9qxQVr/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-023.jpg
    https://i.postimg.cc/Jzn2ydCN/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-024.jpg
    https://i.postimg.cc/xT97Q1sF/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-025.jpg
    https://i.postimg.cc/d0ZN6k1D/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-026.jpg
    https://i.postimg.cc/j5VgFxwc/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-027.jpg
    https://i.postimg.cc/d18HMbGY/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-028.jpg
    https://i.postimg.cc/wMgW9wks/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-029.jpg
    https://i.postimg.cc/Y0Rd0QXD/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-030.jpg
    https://i.postimg.cc/wTWWdcR7/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-031.jpg
    https://i.postimg.cc/L43CxMHk/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-032.jpg
    https://i.postimg.cc/kXMjZh40/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-033.jpg
    https://i.postimg.cc/zGVxDbTp/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-034.jpg
    https://i.postimg.cc/q7KQnPb3/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-035.jpg
    https://i.postimg.cc/JncqYbW7/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-036.jpg
    https://i.postimg.cc/3RH1ZtVb/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-037.jpg
    https://i.postimg.cc/VvfFxdYq/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-038.jpg
    https://i.postimg.cc/KcffnrNJ/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-039.jpg
    https://i.postimg.cc/CLKNJBrY/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-040.jpg
    https://i.postimg.cc/MKrYL6gB/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-041.jpg
    https://i.postimg.cc/7wXt7Dtw/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-042.jpg
    https://i.postimg.cc/L8c3Hy96/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-043.jpg
    https://i.postimg.cc/s2591pxP/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-044.jpg
    https://i.postimg.cc/qR0cKz6P/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-045.jpg
    https://i.postimg.cc/G2QFxdkH/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-046.jpg
    https://i.postimg.cc/J0zbTvqK/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-047.jpg
    https://i.postimg.cc/J0YjSxY8/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-048.jpg
    https://i.postimg.cc/tC73F074/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-049.jpg
    https://i.postimg.cc/v80718YK/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-050.jpg
    https://i.postimg.cc/fTFxKH0j/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-051.jpg
    https://i.postimg.cc/2SZnX4Qp/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-052.jpg
    https://i.postimg.cc/8CgL8j47/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-053.jpg
    https://i.postimg.cc/hG8TKcZp/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-054.jpg
    https://i.postimg.cc/50xv0TZ1/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-055.jpg
    https://i.postimg.cc/vB3n6Xsn/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-056.jpg
    https://i.postimg.cc/ZnndP3bM/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-057.jpg
    https://i.postimg.cc/v8YLHxs9/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-058.jpg
    https://i.postimg.cc/yYJRkFrJ/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-059.jpg
    https://i.postimg.cc/59Kv4Ppd/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-060.jpg
    https://i.postimg.cc/PrBwZPBS/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-061.jpg
    https://i.postimg.cc/qvyCGpr4/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-062.jpg
    https://i.postimg.cc/hGnQyN4x/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-063.jpg
    https://i.postimg.cc/jjhwGvC1/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-064.jpg
    https://i.postimg.cc/hjPzgxdt/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-065.jpg
    https://i.postimg.cc/SsTXKs67/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-066.jpg
    https://i.postimg.cc/gjxxLW49/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-067.jpg
    https://i.postimg.cc/WzxhMHfd/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-068.jpg
    https://i.postimg.cc/QNz9GFxj/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-069.jpg
    https://i.postimg.cc/02J689bD/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-070.jpg
    https://i.postimg.cc/jS0D2B79/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-071.jpg
    https://i.postimg.cc/nh4CDTKL/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-072.jpg
    https://i.postimg.cc/7LqbM7Xn/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-073.jpg
    https://i.postimg.cc/3w9NLRc5/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-074.jpg
    https://i.postimg.cc/MTTTgSCc/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-075.jpg
    https://i.postimg.cc/d1x1YfF5/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-076.jpg
    https://i.postimg.cc/yx3NYTYs/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-077.jpg
    https://i.postimg.cc/ZYX8P7NP/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-078.jpg
    https://i.postimg.cc/dQhRyPht/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-079.jpg
    https://i.postimg.cc/V5ykSbdM/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-080.jpg
    https://i.postimg.cc/9FTGLdP6/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-081.jpg
    https://i.postimg.cc/4xgpqYBm/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-082.jpg
    https://i.postimg.cc/cLBfSdbT/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-083.jpg
    https://i.postimg.cc/tgRWRL0b/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-084.jpg
    https://i.postimg.cc/d3CTSFC2/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-085.jpg
    https://i.postimg.cc/SKZ8nDqM/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-086.jpg
    https://i.postimg.cc/HxVMXXsP/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-087.jpg
    https://i.postimg.cc/3RVvBNkr/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-088.jpg
    https://i.postimg.cc/v8x9mrK4/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-089.jpg
    https://i.postimg.cc/ZKkNv9kV/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-090.jpg
    https://i.postimg.cc/2SrBTPSW-/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-091.jpg
    https://i.postimg.cc/5NwCBxb1/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-092.jpg
    https://i.postimg.cc/6pc4PY8m/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-093.jpg
    https://i.postimg.cc/W44qcgrb/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-094.jpg
    https://i.postimg.cc/1tngfSJk/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-095.jpg
    https://i.postimg.cc/YSyGr0fN/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-096.jpg
    https://i.postimg.cc/J0jG5qwK/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-097.jpg
    https://i.postimg.cc/XJRr5PPp/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-098.jpg
    https://i.postimg.cc/dQCkFq7d/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-099.jpg
    https://i.postimg.cc/8PVFPqWY/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-100.jpg
    https://i.postimg.cc/tCts12N4/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-101.jpg
    https://i.postimg.cc/Njs5Rmd7/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-102.jpg
    https://i.postimg.cc/FKqztqND/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-103.jpg
    https://i.postimg.cc/mrhk5RfP/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-104.jpg
    https://i.postimg.cc/t4B7kJf0/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-105.jpg
    https://i.postimg.cc/ydZd7PNB/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-106.jpg
    https://i.postimg.cc/Hn1LnyJM/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-107.jpg
    https://i.postimg.cc/QCgdTd5y/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-108.jpg
    https://i.postimg.cc/wxDvP0PQ/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-109.jpg
    https://i.postimg.cc/SNqspcbF/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-110.jpg
    https://i.postimg.cc/L6Ts4hmq/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-111.jpg
    https://i.postimg.cc/t444sygB/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-112.jpg
    https://i.postimg.cc/mgp2MqzB/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-113.jpg
    https://i.postimg.cc/VNSsFRnM/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-114.jpg
    https://i.postimg.cc/PqBXVwQ7/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-115.jpg
    https://i.postimg.cc/0QD8Tyty/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-116.jpg
    https://i.postimg.cc/fysw-DQFj/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-117.jpg
    https://i.postimg.cc/T1cTPHv8/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-118.jpg
    https://i.postimg.cc/MZ06tXMs/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-119.jpg
    https://i.postimg.cc/Wb22yj0s/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-120.jpg
    https://i.postimg.cc/13ds4q2z/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-121.jpg
    https://i.postimg.cc/85QGmV1Q/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-122.jpg
    https://i.postimg.cc/SNDyF5GC/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-123.jpg
    https://i.postimg.cc/BnbJqghy/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-124.jpg
    https://i.postimg.cc/hG7gmGR1/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-125.jpg
    https://i.postimg.cc/x89SByJ6/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-126.jpg
    https://i.postimg.cc/3RXTLbRy/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-127.jpg
    https://i.postimg.cc/1XMZSnDs/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-128.jpg
    https://i.postimg.cc/T2cxgSFF/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-129.jpg
    https://i.postimg.cc/ZK7hDNTL/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-130.jpg
    https://i.postimg.cc/Qxx3bmrt/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-131.jpg
    https://i.postimg.cc/3xzQ3H04/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-132.jpg
    https://i.postimg.cc/g0RFJB3M/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-133.jpg
    https://i.postimg.cc/50VcFq3f/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-134.jpg
    https://i.postimg.cc/fyz68zpF/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-135.jpg
    https://i.postimg.cc/XqstmM0v/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-136.jpg
    https://i.postimg.cc/dQnMLCTK/original-2ccb0d6873fd9a87ad5f64ad4ee0766a-137.jpg
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 118;
  
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `300% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `300% top`,
  });
  