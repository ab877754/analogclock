setInterval(() => {
    d = new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    ms = d.getMilliseconds();

    h = ht * 30 + mt / 2;
    m = mt * 6 + st / 10;
    s = (st * 6) + (ms * 0.006);

    document.getElementById("hour").style.transform = `rotate(${h}deg)`;
    document.getElementById("minute").style.transform = `rotate(${m}deg)`;
    document.getElementById("second").style.transform = `rotate(${s}deg)`;
}, 1);
