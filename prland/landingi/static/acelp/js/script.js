! function (i) {
    "use strict";
    var r = i.document,
        e = r.body,
        n = r.documentElement,
        o = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function (t) {
            i.setTimeout(t, 15)
        },
        c = "",
        s = 500,
        u = i,
        a = u.scrollTop || i.pageYOffset,
        f = 0,
        l = function (t, o, e, n) {
            return n < e ? o : t + (f - t) * ((l = e / n) < .5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1);
            var l
        },
        m = function () {
            var t = Date.now() - c;
            u === i ? i.scroll(0, l(a, f, t, s)) : u.scrollTop = l(a, f, t, s), t <= s && o(m)
        },
        t = function () {};
    t.prototype = {
        scrollTo: function (t, o, e) {
            var n, l;
            c = Date.now(), s = o || 500, a = (u = e || i).scrollTop || i.pageYOffset, l = {}, f = "number" == typeof (n = t) ? n : "string" == typeof n && !!(l = r.querySelector(n)) && l.getBoundingClientRect().top + i.pageYOffset, m()
        },
        scrollTop: function (t, o) {
            this.scrollTo(0, t, o)
        },
        scrollBottom: function (t, o) {
            this.scrollTo(Math.max.apply(null, [e.clientHeight, e.scrollHeight, n.scrollHeight, n.clientHeight]) - i.innerHeight, t, o)
        }
    }, i.smoothScroll = new t
}(window);
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    if (!anchor.classList.contains('preventsmooth')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll.scrollTo(this.getAttribute('href'), 1000);
        });
    }
});


function fadeOut(elem) {
    elem.style.opacity = '0';
    setTimeout(function () {
        elem.style.display = 'none';
    }, 15)
}

function fadeInElem(elem) {
    elem.style.display = 'block';
    setTimeout(function () {
        elem.style.opacity = '1';
    }, 15)
}

let confirm = document.querySelector('#confirm');
var flaggy = false;
document.addEventListener('mouseout', function (e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == 'HTML') {
        if (confirm.style.display != 'block' && flaggy == false) {
            fadeInElem(confirm);
            flaggy = true;
        }
    }
});
document.querySelectorAll('#confirm .close-popup, #overlay, #confirmbtn').forEach(function (elem) {
    elem.addEventListener('click', function () {
        fadeOut(confirm);
    });
});

function ipinfo(cb, ip) {
    var request;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {}
        }
    }
    request.open("GET", 'https://ipinfo.io/' + ((ip) ? ip : ''));
    request.setRequestHeader("Accept", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            document.querySelectorAll('.cityname').forEach(function (elem) {
                elem.innerHTML = request.responseText;
            })
        }
    };
    request.send(null);
}

var vanillaModal = new VanillaModal.default()