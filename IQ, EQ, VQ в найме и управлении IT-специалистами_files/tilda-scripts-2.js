if (window.isSearchBot = !1, /Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0), window.isMobile = !1, window.$isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0, window.$isMobile = !0), window.isiOS = !1, /iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0), window.isiOSVersion = "", window.isiOS) {
    var version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    null !== version && (window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)])
}

function t_throttle(e, t, o) {
    var i, r;
    return t || (t = 250),
        function() {
            var n = o || this,
                a = +new Date,
                c = arguments;
            i && a < i + t ? (clearTimeout(r), r = setTimeout(function() { i = a, e.apply(n, c) }, t)) : (i = a, e.apply(n, c))
        }
}

function t_onFuncLoad(e, t, o) {
    if ("function" == typeof window[e]) t();
    else setTimeout(function i() { "function" != typeof window[e] ? setTimeout(i, o || 100) : t() })
}
window.browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.tildaBrowserLang = window.browserLang,
    function(e) {
        if (e(document).ready(function() {
                var t = window.navigator.userAgent,
                    o = -1 !== t.indexOf("Instagram"),
                    i = -1 !== t.indexOf("FBAV"),
                    r = -1 !== t.indexOf("YaSearchBrowser"),
                    n = -1 !== t.indexOf("SamsungBrowser");
                if (-1 !== t.indexOf("Android") && (i || o || r || n)) {
                    var a = document.createElement("p");
                    a.style.lineHeight = "100px", a.style.padding = "0", a.style.margin = "0", a.style.height = "auto", a.style.position = "absolute", a.style.opacity = "0.001", a.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", document.body.appendChild(a);
                    var c = 100 / a.getBoundingClientRect().height;
                    a.parentNode.removeChild(a), c < .98 && e("body").append('<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' + 100 * c + "%;}</style>")
                }
            }), 1 == window.isMobile) {
            var t = function() {
                for (var t = document.body.querySelectorAll(".t-cover__carrier"), o = e(window).height(), i = 0, r = 0, n = t.length; r < n; r++)(s = (c = t[r]).style).height.indexOf("vh") > -1 && (i = parseInt(s.height, 10) / 100, d = Math.round(o * i) + "px", (l = e(c).parent(".t-cover")) && (l = l[0]) && (u = l.querySelector(".t-cover__filter"), p = l.querySelector(".t-cover__wrapper"), u && (u.style.height = d), p && (p.style.height = d), s.height = l.style.height = d));
                var a = document.body.querySelectorAll("[data-height-correct-vh]");
                o = e(window).height(), i = 0;
                var c, s, d, l, u, p;
                for (r = 0, n = a.length; r < n; r++)(s = (c = a[r]).style).height.indexOf("vh") > -1 && (i = parseInt(s.height) / 100, d = o + "px", l = e(c).parent(".t-cover"), s.height = d)
            };
            e(document).ready(function() { setTimeout(function() { t() }, 400) }), e(window).load(function() { setTimeout(function() { t() }, 400) }), e(window).width() < 480 ? (e(document).ready(function() {
                var t;
                e("div[data-customstyle=yes]").each(function(t) { e(this).css("font-size").replace("px", "") > 26 && (e(this).css("font-size", ""), e(this).css("line-height", "")) }), e("[field]").find("span").each(function(t) { e(this).css("font-size").replace("px", "") > 26 && e(this).css("font-size", "") }), e(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom, [data-auto-correct-line-height=false]").each(function() {
                    if (void 0 !== (t = e(this).attr("style")) && "" != t && t.indexOf("font-size") > -1 && e(this).css("font-size").replace("px", "") > 26) {
                        var o = t.replace("font-size", "fontsize").replace("line-height", "lineheight");
                        e(this).attr("style", o)
                    }
                })
            }), e(window).load(function() {
                var t = e(window).width();
                e(".r:visible").each(function() {
                    var o = e(this);
                    e(this).find("div").not("[data-auto-correct-mobile-width=false], .tn-elem, .tn-atom, .tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__videoiframe, .tn-atom .t-form *, .tn-atom__sticky-wrapper, .t-store__relevants__container, .t-slds__items-wrapper, .js-product-controls-wrapper, .js-product-edition-option, .t-product__option-variants").each(function() {
                        var i = parseInt(e(this).outerWidth(!0));
                        if (i > t) {
                            if (e(this).is('[data-customstyle="yes"]') && e(this).parent().is("[data-auto-correct-mobile-width=false]")) return;
                            console.log("Block not optimized for mobile width. Block width:" + i + " Block id:" + o.attr("id")), console.log(e(this)), o.css("overflow", "auto"), i - 3 > t && o.css("word-break", "break-all")
                        }
                    })
                })
            })) : e(window).width() < 900 && e(document).ready(function() {
                var t;
                e("div[data-customstyle=yes]").each(function(t) { e(this).css("font-size").replace("px", "") > 30 && (e(this).css("font-size", ""), e(this).css("line-height", "")) }), e("[field]").find("span").each(function(t) { e(this).css("font-size").replace("px", "") > 30 && e(this).css("font-size", "") }), e(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function(o) {
                    if (void 0 !== (t = e(this).attr("style")) && "" != t && t.indexOf("font-size") > -1 && e(this).css("font-size").replace("px", "") > 30) {
                        var i = t.replace("font-size", "fontsize").replace("line-height", "lineheight");
                        e(this).attr("style", i)
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        function t() { this.setScrollListener() }
        t.prototype.videoTags = [], t.prototype.defaultConfig = { isNeedStop: !1 }, t.prototype.videoConfigs = [], t.prototype.registerNewVideo = function(e, t) { if (!(e instanceof HTMLVideoElement)) throw new Error("Wrong tag passed into registerNewVideo"); return -1 == this.videoTags.indexOf(e) && (this.videoTags.push(e), this.videoConfigs.push(void 0 === t ? this.defaultConfig : t), this.scrollCb("", !0), !0) }, t.prototype.unergisterVideo = function(e) { if (!(e instanceof HTMLVideoElement)) throw new Error("Wrong tag passed into unregisterNewVideo"); var t; return (t = this.videoTags.indexOf(e)) > -1 && ("function" == typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e), this.pauseVideo(e, this.videoConfigs[t]), this.videoTags.splice(t, 1), this.videoConfigs.splice(t, 1), !0) }, t.prototype.pauseVideo = function(e, t) {
            if (!t) throw new Error("Wrong config type!");
            e.pause(), t.isNeedStop && e.load()
        }, t.prototype.setScrollListener = function() { e(window).bind("scroll", t_throttle(jQuery.proxy(this.scrollCb, this), 200)) }, t.prototype.scrollCb = function(t, o) {
            for (var i = e(window).height(), r = null, n = 0, a = this.videoTags.length; n < a; n++) {
                if (r = this.videoTags[n], _vrect = this.getVideoBoundingRect(r, !1), Math.abs(_vrect.top) < i && Math.abs(_vrect.top) > i / 2) {
                    var c = 1 - (Math.abs(_vrect.top) - i / 2) / (i / 2) - .2;
                    c > 0 && c <= 1 && 0 != r.volume && (r.volume = c)
                }
                Math.abs(_vrect.top) > i || 0 == _vrect.height ? this.pauseVideo(r, this.videoConfigs[n]) : (o && r.play(), r.paused && r.loop && r.play())
            }
        }, t.prototype.getVideoObject = function(e) { for (var t = 0, o = this.videoTags.length; t > o; t++) { var i = this.videoTags[t]; if (i.v === e) return i } return null }, t.prototype.getVideoBoundingRect = function(t, o) { void 0 === o && (o = !0); var i = null; return o && (i = e(t).parents(".r")[0]) || (i = t), i.getBoundingClientRect() }, window.videoLoadProcessor = new t
    }(jQuery),
    function(e) {
        function t() {
            this.setScrollCb(), this.itemHeight = screen.availHeight;
            this.itemTransitionTop = .25 * this.itemHeight, this.activeItemIndex = null, this.windowHeight = document.documentElement.clientHeight || window.innerHeight || screen.availHeight, this.topOffsetShift = -150, e(window).resize(jQuery.proxy(this.recalculateAllSequencesOffsets, this)), this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500)
        }

        function o(t) {
            var o, i = e("#rec" + t),
                r = i.find(".t-cover").height();
            if ((o = i.find("div[data-hook-content]").outerHeight()) > 300 && r < o + 40 && ((o = o + 120) > 1e3 && (o += 100), console.log("auto correct cover height: " + o), i.find(".t-cover").height(o), i.find(".t-cover__filter").height(o), i.find(".t-cover__carrier").height(o), i.find(".t-cover__wrapper").height(o), 0 == window.isMobile && setTimeout(function() {
                    var e = i.find(".t-cover__carrier");
                    e.find("iframe").length > 0 && (console.log("correct video from cover_fixcontentheight"), c(e, o + "px")), e.find("video").length > 0 && console.log("correct html5video from cover_fixcontentheight")
                }, 2e3), "function" == typeof window.t_lazyload_updateResize_elem)) try { window.t_lazyload_updateResize_elem(i.find(".t-cover__carrier")) } catch (e) { console.log("error:" + e) }
        }

        function i(e) {
            var t = document.body.querySelector("#rec" + e);
            if (t) {
                var o, i, r, n = t.querySelector(".t-cover__carrier");
                null !== n && (o = n.getAttribute("data-content-video-url-youtube"), i = n.getAttribute("data-content-video-url-mp4"), r = n.getAttribute("data-content-video-url-webm"));
                var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                return !(window.isMobile || /Macintosh/.test(navigator.userAgent) && "ontouchend" in document || !a || o || i || r || !n || "fixed" !== n.getAttribute("data-content-cover-parallax") || window["cover" + e + "fixbackgroundstyles"])
            }
        }

        function r(e) {
            var t = document.body.querySelector("#rec" + e);
            if (i(e)) {
                console.log("new fix style background-position: fixed");
                var o = t.querySelector(".t-cover__container"),
                    r = t.querySelector(".t-cover"),
                    n = r.style.height;
                r.style.height = 0, o.style.height = n, window["cover" + e + "fixbackgroundstyles"] = !0
            }
        }

        function n(e, t, o, i) {
            var r, n, a, c, s;
            r = e.offset().top, n = e.height(), a = t.scrollTop(), c = t.height(), s = o.getPlayerState(), a + c > r && a <= r + n ? (1 !== s && o.playVideo(), "yes" == i && (a > r + n - 100 ? o.setVolume(30) : a > r + n - 200 ? o.setVolume(70) : a + c < r + 200 ? o.setVolume(30) : o.setVolume(100))) : a + c < r && a + c > r - 500 ? 2 !== s && (o.playVideo(), o.pauseVideo()) : 2 !== s && o.pauseVideo()
        }
        t.prototype.defaultConfig = { orientation: "vertical", speedFactor: 1, automated: !1 }, t.prototype.sequenceObjects = [], t.prototype.recalculateAllSequencesOffsets = function() { this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeInterval && clearInterval(this._resizeInterval), this._resizeTimeout = setTimeout(jQuery.proxy(function() { this.scrollCb(), this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500) }, this), 10) }, t.prototype.registerNewBlock = function(e) {
            if (!(e instanceof HTMLElement)) throw new Error("Wrong node type in registerNewBlock");
            for (var t = 0, o = this.sequenceObjects.length; t < o; t++)
                if (this.sequenceObjects[t].sequenceBlock === e) return !1;
            var i = e.querySelector('[data-hook="sequence-holder"]'),
                r = 0,
                n = this.getAbsoluteTopOffset(i),
                a = function() {
                    var t = [];
                    return Array.prototype.slice.call(e.querySelectorAll('[data-hook="sequence-item"]'), 0).forEach(jQuery.proxy(function(e, o, i) {
                        var n = this.getItemHeight(e),
                            a = e.querySelector('[data-hook="item-background"]');
                        e.style.height = n + "px", a.style.height = this.itemHeight + "px", o < i.length - 1 && (r += n), t.push({ node: e, height: n, topOffset: this.getAbsoluteTopOffset(e.querySelector(".txt-holder")) - (o == i.length - 1 ? 0 : this.topOffsetShift), backgroundHolder: a })
                    }, this)), t
                }.call(this),
                c = (this.itemHeight, { sequenceBlock: e, sequenceHolder: i, sequenceHolderTopOffset: n, sequenceHeight: r, items: a, started: !1, prevBackgroundColor: "" });
            return this.sequenceObjects.push(c), this.scrollCb(), !0
        }, t.prototype.getItemHeight = function(e) {
            var t = e.querySelector("[data-hook='item-text']");
            e.querySelector("[data-hook='item-background']");
            st = e.style;
            var o = parseFloat(getComputedStyle(t).top);
            return t.style.top = o + "px", Math.max(t.clientHeight + o, this.itemHeight)
        }, t.prototype.fixTextBlocksPosition = function(e) { txtBlocks = Array.prototype.slice.call(e.querySelectorAll('[data-hook="item-text"]'), 0), txtBlocks.forEach(function(e, t, o) { e.parentNode.querySelector("[data-hook='item-background']").style.top = "-" + e.clientHeight + "px" }) }, t.prototype.unergisterBlock = function(e) {
            for (var t = 0, o = this.sequenceObjects.length, i = null; t < o; t++)
                if (this.sequenceObjects[t].sequenceBlock === e) { i = t; break }
            return null !== i && (this.sequenceObjects.splice(i, 1), !0)
        }, t.prototype.getAbsoluteTopOffset = function(e) { var t = e.offsetTop; for (e = e.offsetParent; null != e;) t += e.offsetTop, e = e.offsetParent; return t }, t.prototype.processSequence = function(e) {
            0 == e.started && (e.prevBackgroundColor = document.body.style.backgroundColor, document.body.style.backgroundColor = "rgb(0, 0, 0)", e.started = !0);
            e.sequenceBlock, e.sequenceHolder;
            for (var t, o, i, r, n = e.items, a = null, c = 0, s = n.length; c < s; c++)
                if ((t = n[c].node).querySelector(".txt-holder"), (r = t.getBoundingClientRect()).top < this.itemTransitionTop && r.bottom < r.height + this.itemTransitionTop && r.bottom > this.itemTransitionTop) { a = c; break }
            if (null != a) {
                (i = r.top / this.itemTransitionTop) > 1 ? i = 1 : i < 0 && (i = 0);
                for (c = 0, s = n.length; c < s; c++) t = n[c].node, "fixed" != (o = n[c].backgroundHolder.style).position && (o.position = "fixed"), c == a ? (o.opacity = 1 - i, t.querySelector(".txt-holder").style.opacity = 1 - i) : c == a - 1 ? (o.opacity = i, t.querySelector(".txt-holder").style.opacity = i) : (o.opacity = 0, t.querySelector(".txt-holder").style.opacity = 0)
            }
        }, t.prototype.stopSequence = function(e) { 0 != e.started && (e.items.forEach(function(e, t, o) { e.backgroundHolder.style.position = "relative", e.backgroundHolder.style.display = "block", e.backgroundHolder.style.opacity = 1 }), document.body.style.backgroundColor = e.prevBackgroundColor, e.started = !1) }, t.prototype.scrollCb = function() {
            e(window).scrollTop();
            for (var t, o = 0, i = this.sequenceObjects.length; o < i; o++) {
                var r = (t = this.sequenceObjects[o]).sequenceHolder.getBoundingClientRect();
                r.top < 0 && r.bottom > 0 && r.bottom > r.height - t.sequenceHeight - 100 ? this.processSequence(t) : this.stopSequence(t)
            }
        }, t.prototype.setScrollCb = function() { this._scrollCb = jQuery.proxy(this.scrollCb, this), e(window).bind("scroll", t_throttle(this._scrollCb, 200)) }, window.sequenceController = new t, window.processVideo = function(t) {
            mp4Src = e(t).attr("data-content-video-url-mp4"), webmSrc = e(t).attr("data-content-video-url-webm"), e(t).css("background-color", "transparent"), e(t).css("background-image", "");
            var o = { mp4: mp4Src, webm: webmSrc, preload: "none", autoplay: !1, loop: !0, scale: !0, zIndex: 0, width: "100%" };
            vid = e(t).videoBG(o), videoLoadProcessor.registerNewVideo(vid, { isNeedStop: !1 })
        }, window.cover_init = function(t) {
            e(document).ready(function() {
                var n = document.body.querySelector("#coverCarry" + t),
                    a = e(n),
                    c = a.attr("data-content-cover-bg"),
                    s = a.attr("data-content-cover-height"),
                    d = a.attr("data-content-cover-parallax"),
                    l = a.attr("data-content-video-url-mp4"),
                    u = a.attr("data-content-video-url-webm"),
                    p = a.attr("data-content-video-url-youtube"),
                    h = a.attr("data-content-video-noloop"),
                    f = a.attr("data-content-video-nomute"),
                    m = a.attr("data-content-bg-base64"),
                    w = a.attr("data-content-video-nocover");
                c || (c = ""), s || (s = ""), d || (d = ""), l || (l = ""), u || (u = ""), p || (p = ""), h || (h = ""), f || (f = ""), p || (p = ""), m || (m = ""), w && "yes" == w && (l = "", u = "", p = ""), !window.isMobile || "" == u && "" == l && "" == p || a.css("background-image", "url('" + c + "')"), setTimeout(function() { o(t), r(t) }, 500),
                    function(e) {
                        if (i(e)) {
                            var t = document.body.querySelector("#rec" + e),
                                o = document.body.querySelector("#rec" + e + " .t-cover").parentNode;
                            if (console.log("new fix node background-position: fixed"), !window.cover_fixBackgroundStyles) {
                                var r = ".t-cover__container {position: relative;}.t-cover__container .t-cover {clip: rect(0, auto, auto, 0);position: absolute;top: 0;left: 0;width: 100%;height: 100% !important;}.t-cover__container .t-cover .t-cover__carrier {position: fixed;display: block;top: 0;left: 0;width: 100%;height: 100%!important;background-size: cover;background-position: center center;transform: translateZ(0);will-change: transform;}",
                                    n = document.head || document.getElementsByTagName("head")[0],
                                    a = document.createElement("style");
                                n.appendChild(a), a.type = "text/css", a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r)), window.cover_fixBackgroundStyles = !0
                            }
                            var c = document.createElement("div");
                            c.classList.add("t-cover__container"), o.prepend(c);
                            var s = t.querySelector(".t-cover"),
                                d = s.style.height;
                            c.style.height = d, c.append(s);
                            var l = { 275: ".t256__video-container", 286: ".t266__video-container", 337: ".t-container", 906: ".t906__video-container" }[t.getAttribute("data-record-type")];
                            if (void 0 !== l) {
                                var u = t.querySelector(l);
                                c.append(u)
                            }
                            window["cover" + e + "fixbackgroundnodes"] = !0
                        }
                    }(t);
                var v = e("#rec" + t).find("img[data-hook-clogo]");
                if (v.length && v.load(function() { setTimeout(function() { o(t), r(t) }, 500) }), window.isMobile && e(window).on("orientationchange", function() { o(t), r(t) }), ("" !== l || "" !== u || "" !== p) && 0 == window.isMobile)
                    if ("" != p || "" == l && "" == u) {
                        if ("" != p) {
                            a.css("background-color", "#000000"), a.css("background-image", ""), a.attr("data-content-cover-bg", "");
                            x = 0;
                            (k = e(window)).scroll(function() {
                                b && window.clearTimeout(b), b = window.setTimeout(function() {
                                    var e, t, o;
                                    (x = a.find("iframe").length) > 0 || (e = a.offset().top, t = a.height(), (o = k.scrollTop()) + k.height() > e - 500 && o <= e + t + 500 && processYoutubeVideo(n, s))
                                }, 100)
                            }), k.scroll()
                        }
                    } else {
                        a.css("background-color", "#000000"), a.css("background-image", "url('https://tilda.ws/img/spinner-white.gif')"), a.css("background-size", "auto"), a.attr("data-content-cover-bg", "");
                        var g = !1;
                        g = "" == h;
                        var y = !0;
                        y = "" == f;
                        var b, _ = "";
                        "fixed" == d && (s.indexOf("vh") > -1 && parseInt(s) > 100 && (a.css("height", "100vh"), _ = "yes"), s.indexOf("px") > -1 && parseInt(s) > e(window).height() && (a.css("height", "100vh"), _ = "yes"));
                        var x = "",
                            k = e(window),
                            T = a.parent();
                        k.scroll(function() {
                            var e, t, o;
                            (b && window.clearTimeout(b), b = window.setTimeout(function() {
                                var e, t, o;
                                if (!(x > 0) && (e = a.offset().top, t = a.height(), (o = k.scrollTop()) + k.height() > e - 500 && o <= e + t + 500)) {
                                    var i = a.videoBG({ mp4: l, webm: u, poster: "", preload: "none", autoplay: "true", loop: g, volume: 1, scale: !0, zIndex: 0, width: "100%" });
                                    i.setAttribute("muted", y), i.setAttribute("playsinline", ""), videoLoadProcessor.registerNewVideo(i), x = 1
                                }
                            }, 100), "fixed" == d && "yes" == _) && (e = T.offset().top, t = T.height(), (o = k.scrollTop()) >= e + t - k.height() ? (a.css("position", "absolute"), a.css("bottom", "0px"), a.css("top", "auto")) : o >= e ? (a.css("position", "fixed"), a.css("top", "0px")) : o < e && (a.css("position", "relative"), a.css("top", "auto")))
                        }), k.scroll()
                    }
                if ("dynamic" == d && 0 == window.isMobile) {
                    var C = a.offset().top - (a.offset().top - e(window).height());
                    a.height() < e(window).height() && a.height(a.height() + .2 * C), a.parallax(.2, !0)
                }
                if ("yes" == m && "" != c && "" == l && "" == u && "" == p) { e("<img/>").attr("src", c).load(function() { e(this).remove(), a.css("background-image", "url('" + c + "')"), a.css("opacity", "1") }), a.css("background-image", ""), a.css("opacity", "0"), a.css("transition", "opacity 25ms") }
                var S = e("#rec" + t).find(".t-cover__arrow-wrapper");
                S.length > 0 && S.click(function() {
                    var o = e("#rec" + t).height();
                    o > 0 && e("html, body").animate({ scrollTop: e("#rec" + t).offset().top + o }, 500)
                })
            })
        }, e(document).ready(function() {
            "edit" != e(".t-records").attr("data-tilda-mode") && e(".t-cover__carrier").each(function() {
                var t = e(this).attr("data-content-cover-id");
                t > 0 && cover_init(t)
            })
        });
        var a = e.Deferred();

        function c(t, o) {
            console.log("setWidthHeightYoutubeVideo:" + o);
            var i = t.find("iframe"),
                r = t.attr("data-content-video-nocover"),
                n = t.attr("data-content-video-noadcut-youtube"),
                a = t.attr("data-content-video-ratio"),
                c = .5625;
            if (a > 0 && (c = 1 * parseFloat(a)), "yes" != r) {
                if (o || (o = "100vh"), o.indexOf("vh") > -1) {
                    var s = window.innerHeight;
                    s || (s = e(window).height());
                    var d = Math.floor(s * (parseInt(o) / 100))
                } else d = parseInt(o);
                var l = Math.floor(parseInt(window.innerWidth));
                l || (l = e(window).width());
                var u = l,
                    p = y = l * c,
                    h = y,
                    f = 1;
                if ("yes" == n || (p = p + 110 + 110, h = y - 220), h < d)
                    if (y < d) f = d / y + .02;
                    else f = y / d + .02;
                var m = Math.floor(u * f),
                    w = Math.floor(p * f),
                    v = w - d,
                    g = m - l;
                i.height(w + "px"), i.width(m + "px"), v > 0 && i.css("margin-top", -Math.floor(v / 2) + "px"), g > 0 && i.css("margin-left", -Math.floor(g / 2) + "px")
            } else {
                var y;
                o || (y = Math.floor(t.width() * c)), o && o.indexOf("vh") > -1 ? y = Math.floor(window.innerHeight * (parseInt(o) / 100)) : o && (y = parseInt(o)), i.css("width", "100%"), i.height(y + "px")
            }
        }
        window.processYoutubeVideo = function(t, o) {
            ! function() {
                if ("yes" !== window.loadytapi_flag) {
                    window.loadytapi_flag = "yes";
                    var e = document.createElement("script");
                    e.src = "https://www.youtube.com/iframe_api";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }
            }();
            a.then(function() {
                var i, r = e(t),
                    a = r.attr("data-content-video-url-youtube"),
                    s = r.attr("data-content-video-nomute"),
                    d = r.attr("data-content-video-noloop"),
                    l = r.attr("data-content-video-nocover"),
                    u = document.createElement("iframe");
                u.src = function(e, t, o) {-1 == e.indexOf("https://www.youtube.com/embed") && (e = "https://www.youtube.com/embed" + ("/" == e[0] ? e : "/" + e)); var i = location.protocol + "//" + location.host; return "yes" != t ? (e[e.length - 1], e = e + "?autoplay=1&loop=1&enablejsapi=1&&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin=" + i + "&playlist=" + function(e) { for (var t = e.split("/"), o = null, i = 0, r = t.length; i < r; i++) "embed" == t[i] && (o = t[i + 1]); return o }(e)) : (e[e.length - 1], e = e + "?autoplay=0&loop=0&enablejsapi=1&&playerapiid=featuredytplayer&controls=1&modestbranding=1&rel=0&showinfo=0&color=black&iv_load_policy=3&theme=dark&wmode=transparent&origin=" + i), "yes" !== o && (e += "&mute=1"), e }(a, l, s), u.frameBorder = 0, u.allow = "autoplay", t.appendChild(u), 0 == window.isMobile && new YT.Player(u, {
                    events: {
                        onReady: function(o) {
                            ! function(t, o, i) {
                                var r, a = e(window),
                                    c = e(t),
                                    s = 0;
                                a.scroll(function() { r && (window.clearTimeout(r), s >= 15 && (n(c, a, o, i), s = 0), s++), r = window.setTimeout(function() { n(c, a, o, i), s = 0 }, 100) }), a.scroll()
                            }(t, o.target, s), o.target.setVolume && "yes" != s && o.target.setVolume(0), o.target.setLoop(!0)
                        },
                        onStateChange: function(t) {
                            if (t.target.setVolume && "yes" != s && t.target.setVolume(0), -1 === t.data) {
                                var o = window.fix_scrolltop_beforestop_youtube;
                                o >= 0 && (e("html, body").scrollTop(o), delete window.fix_scrolltop_beforestop_youtube)
                            }
                            t.data === YT.PlayerState.PLAYING ? i = window.setInterval(function() {
                                var e = t.target.getCurrentTime(),
                                    o = t.target.getDuration();
                                e + 1 > o && 0 !== o && (t.target.seekTo(0), "yes" === d && (t.target.stopVideo(), t.target.clearVideo()))
                            }, 1e3) : window.clearTimeout(i)
                        }
                    }
                });
                c(r, o)
            })
        }, window.onYouTubeIframeAPIReady = function() { a.resolve() }
    }(jQuery),
    function(e) {
        function t() { this.callbacks = {} }
        t.prototype.defaultConfig = { single: !1, context: null }, t.prototype.addEventListener = function(e, t, o) { evtCallbacks = this._getEventCallbacks(e), evtCallbacks || (evtCallbacks = this.callbacks[e] = []), evtCallbacks.push({ callback: t, config: "object" == typeof o ? o : this.defaultConfig }) }, t.prototype._getEventCallbacks = function(e) { return this.callbacks[e] }, t.prototype.removeEventListener = function(e, t) {
            var o = this._getEventCallbacks(e);
            if (!o) return !1;
            for (var i = 0, r = o.length; i < r; i++)
                if (t === o[i].callback) return o.splice(i, 1), !0;
            return !1
        }, t.prototype.emitEvent = function(e, t) {
            var o = [];
            extend(o, this._getEventCallbacks(e));
            for (var i, r, n, a = 0, c = o.length; a < c; a++) r = (i = o[a]).callback, (n = i.config).context ? r.call(n.context, t) : r(t), n.single && this.removeEventListener(e, r)
        }, window.observer = new t
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            if (0 == window.isMobile && "yes" !== e("#allrecords").attr("data-blocks-animationoff") && 0 == window.isSearchBot) {
                e(".r").each(function(t) { e(this).attr("style") && -1 !== e(this).attr("style").indexOf("background-color") && e(this).attr("data-animationappear", "off") });
                var t = e(".r").not("[data-animationappear=off], [data-screen-min], [data-screen-max]"),
                    o = e(window);

                function i() {
                    if (t.length)
                        for (var i, r = t.length - 1; r >= 0; r--)(i = e(t[r])).offset().top < (i.outerHeight() <= 100 ? o.scrollTop() + o.height() : o.scrollTop() + o.height() - 100) && (i.removeClass("r_hidden"), i.addClass("r_showed"), t.splice(r, 1))
                }
                t.each(function(t) { a = e(this).offset().top, b = o.scrollTop() + o.height() + 300, a > 1e3 && a > b ? e(this).addClass("r_hidden") : e(this).addClass("r_showed"), e(this).addClass("r_anim") }), o.bind("scroll", t_throttle(i, 200)), i()
            }
            "none" === e("html").css("display") && e("html").css("display", "block"), e("body").height() + 70 < e(window).height() ? e(".t-tildalabel").css("display", "none") : e(".t-tildalabel").attr("style", "display: block !important")
        })
    }(jQuery),
    function(e) {
        function t() {
            var t = e(window);
            window.winWidth = t.width(), window.winHeight = t.height()
        }

        function o() {
            var t, o, i, r = e(window).width();
            e("div.r[data-screen-max], div.r[data-screen-min]").each(function(n) { "yes" !== e(this).attr("data-connect-with-tab") && (i = e(this).css("display"), void 0 === (t = e(this).attr("data-screen-max")) && (t = 1e4), t = parseInt(t), void 0 === (o = e(this).attr("data-screen-min")) && (o = 0), (o = parseInt(o)) <= t && (r <= t && r > o ? "block" != i && e(this).css("display", "block") : "none" != i && e(this).css("display", "none"))) })
        }
        e(document).ready(function() { t(), o(), e(window).bind("resize", t_throttle(t, 200)), e(window).bind("resize", t_throttle(o, 200)) })
    }(jQuery),
    function(e) {
        e.fn.videoBG = function(t, o) {
            o = {};
            if ("object" == typeof t) o = e.extend({}, e.fn.videoBG.defaults, t);
            else {
                if (t) return e(t).videoBG(o);
                o = e.fn.videoBG.defaults
            }
            var i = e(this);
            if (i.length) {
                "static" != i.css("position") && i.css("position") || i.css("position", "relative"), 0 == o.width && (o.width = i.width()), 0 == o.height && (o.height = i.height()), o.textReplacement && (o.scale = !0, i.width(o.width).height(o.height).css("text-indent", "-9999px"));
                var r = e.fn.videoBG.video(o);
                return o.scale && r.height(o.height).width(o.width), i.append(r), void 0 === i.attr("data-content-video-nomute") && i.find("video").prop("muted", "true"),
                    function(t, o) {
                        var i = t.closest(".t-cover__carrier"),
                            r = o + "";
                        console.log("setWidthHeightHTMLVideo:" + r);
                        var n = i.find("video"),
                            a = i.attr("data-content-video-nocover"),
                            c = i.attr("data-content-video-ratio"),
                            s = .5625;
                        if (c > 0 && (s = 1 * parseFloat(c)), "yes" != a) {
                            if (r || (r = "100vh"), r.indexOf("vh") > -1) {
                                var d = window.innerHeight;
                                d || (d = e(window).height());
                                var l = Math.floor(d * (parseInt(r) / 100))
                            } else l = parseInt(r);
                            var u = Math.floor(parseInt(window.innerWidth));
                            u || (u = e(window).width());
                            var p = u,
                                h = y = u * s,
                                f = 1;
                            y < l && (f = y < l ? l / y + .02 : y / l + .02);
                            var m = Math.floor(p * f),
                                w = Math.floor(h * f),
                                v = w - l,
                                g = m - u;
                            n.height(w + "px"), n.width(m + "px"), v > 0 && n.css("margin-top", -Math.floor(v / 2) + "px"), g > 0 && n.css("margin-left", -Math.floor(g / 2) + "px")
                        } else {
                            var y;
                            r || (y = Math.floor(i.width() * s)), r && r.indexOf("vh") > -1 ? y = Math.floor(window.innerHeight * (parseInt(r) / 100)) : r && (y = parseInt(r)), n.css("width", "100%"), n.height(y + "px")
                        }
                    }(r, o.height), r.find("video")[0]
            }
        }, e.fn.videoBG.setFullscreen = function(t) {
            var o, i = e(window).width(),
                r = e(window).height();
            if (t.css("min-height", 0).css("min-width", 0), t.parent().width(i).height(r), i / r > t.aspectRatio) t.width(i).height("auto"), (o = (t.height() - r) / 2) < 0 && (o = 0), t.css("top", -o);
            else if (t.width("auto").height(r), (o = (t.width() - i) / 2) < 0 && (o = 0), t.css("left", -o), 0 === o) setTimeout(function() { e.fn.videoBG.setFullscreen(t) }, 500);
            e("body > .videoBG_wrapper").width(i).height(r)
        }, e.fn.videoBG.video = function(t) {
            var o = e("<div/>");
            o.addClass("videoBG").css("position", t.position).css("z-index", t.zIndex).css("top", 0).css("left", 0).css("height", t.height).css("width", t.width).css("opacity", t.opacity).css("overflow", "hidden");
            var i, r = e("<video/>");
            (r.css("position", "relative").css("z-index", t.zIndex).attr("poster", t.poster).css("top", 0).css("left", 0).css("min-width", "100%").css("min-height", "100%"), r.prop("autoplay", t.autoplay), r.prop("loop", t.loop), r.prop("muted", t.muted), t.volume > 0 ? r.prop("volume", t.volume) : r.prop("volume", 0), t.fullscreen) && (r.bind("canplay", function() { r.aspectRatio = r.width() / r.height(), e.fn.videoBG.setFullscreen(r) }), e(window).resize(function() { clearTimeout(i), i = setTimeout(function() { e.fn.videoBG.setFullscreen(r) }, 100) }), e.fn.videoBG.setFullscreen(r));
            var n = r[0];
            t.loop && (loops_left = t.loop, r.bind("ended", function() { loops_left && n.play(), !0 !== loops_left && loops_left-- })), r.bind("canplay", function() { t.autoplay && n.play() }), e.fn.videoBG.supportsVideo() && (e.fn.videoBG.supportType("webm") && "" != t.webm ? r.attr("src", t.webm) : e.fn.videoBG.supportType("mp4") && "" != t.mp4 ? r.attr("src", t.mp4) : r.attr("src", t.ogv));
            var a = e("<img/>");
            return a.attr("src", t.poster).css("position", "absolute").css("z-index", t.zIndex).css("top", 0).css("left", 0).css("min-width", "100%").css("min-height", "100%"), e.fn.videoBG.supportsVideo() ? o.html(r) : o.html(a), t.textReplacement && (o.css("min-height", 1).css("min-width", 1), r.css("min-height", 1).css("min-width", 1), a.css("min-height", 1).css("min-width", 1), o.height(t.height).width(t.width), r.height(t.height).width(t.width), a.height(t.height).width(t.width)), e.fn.videoBG.supportsVideo(), o
        }, e.fn.videoBG.supportsVideo = function() { return document.createElement("video").canPlayType }, e.fn.videoBG.supportType = function(t) {
            if (!e.fn.videoBG.supportsVideo()) return !1;
            var o = document.createElement("video");
            switch (t) {
                case "webm":
                    return o.canPlayType('video/webm; codecs="vp8, vorbis"');
                case "mp4":
                    return o.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
                case "ogv":
                    return o.canPlayType('video/ogg; codecs="theora, vorbis"')
            }
            return !1
        }, e.fn.videoBG.wrapper = function() { var t = e("<div/>"); return t.addClass("videoBG_wrapper").css("position", "absolute").css("top", 0).css("left", 0), t }, e.fn.videoBG.defaults = { mp4: "", ogv: "", webm: "", poster: "", autoplay: !0, loop: !0, scale: !1, position: "absolute", opacity: 1, textReplacement: !1, zIndex: 0, width: 0, height: 0, fullscreen: !1, imgFallback: !0 }
    }(jQuery),
    function(e) {
        var t = e(window),
            o = t.height();
        t.resize(function() { o = t.height() }), e.fn.parallax = function(i, r) {
            var n, a = e(this),
                c = void 0 !== document.body.style["-webkit-transform"];

            function s() {
                var r = t.scrollTop();
                a.each(function() {
                    var t = e(this),
                        a = t.offset().top,
                        s = n(t),
                        d = this.getBoundingClientRect();
                    if (!(a + s < r || a > r + o)) {
                        var l = -1 * Math.round(d.top * i);
                        c ? this.style["-webkit-transform"] = "translateY(" + l + "px)" : this.style.top = l + "px"
                    }
                })
            }
            c && a.css("position", "relative"), window.correctFirstTop4Parallax = function() { a.each(function() { a.offset().top }) }, window.correctFirstTop4Parallax(), n = r ? function(e) { return e.outerHeight(!0) } : function(e) { return e.height() }, (arguments.length < 1 || null === i) && (i = .1), (arguments.length < 2 || null === r) && (r = !0), s(), e(window).resize(window.correctFirstTop4Parallax), t.bind("scroll", s).resize(s), "complete" !== document.readyState && window.addEventListener("load", function() { s() })
        }
    }(jQuery), window.Tilda = window.Tilda || {},
    function(e) {
        Tilda.sendEcommerceEvent = function(t, o) {
            if (void 0 === o || 0 == o.length) return !1;
            if (void 0 === t || "add" != t && "remove" != t && "purchase" != t && "detail" != t) return !1;
            var i, r, n, a, c = "",
                s = 0,
                d = [],
                l = "",
                u = "",
                p = "";
            for (i = 0; i < o.length; i++) {
                a = o[i], c > "" && (c += ", "), c += a.name, s += a.price, n = "", void 0 !== a.options && a.options.length > 0 && e.each(a.options, function(e, t) { n += t.option + ": " + t.variant + "; " });
                var h = { name: a.name, price: a.price, variant: n, quantity: 1 };
                a.id && a.id > 0 && (id = a.id, h.id = a.id), a.uid && a.uid > 0 && (u = a.uid, h.uid = a.uid), a.recid && a.recid > 0 && (l = a.recid, h.recid = a.recid), a.lid && a.lid > 0 && (p = a.lid, h.lid = a.lid), a.sku && a.sku > 0 && (h.sku = a.sku), d[d.length] = h
            }
            "add" != t && "remove" != t || (r = "/tilda/cart/" + t + "/", l > 0 && (r += "" + l), u > 0 ? r += "-u" + u : p > 0 && (r += "-" + p)), "detail" == t && (r = "/tilda/product/detail/", u > 0 ? r += u + "/" : (l > 0 && (r += "r" + l), p > 0 && (r += "-l" + p))), "purchase" == t && (r = "/tilda/rec" + l + "/payment/"), (h = { ecommerce: {} }).ecommerce[t] = { products: d }, Tilda.sendEventToStatistics(r, c, h, s)
        }, Tilda.sendEventToStatistics = function(t, o, i, r) {
            var n = "/" == t.substring(0, 1),
                a = [],
                c = 0,
                s = e("#allrecords").data("fb-event");
            s = !(!s || "nosend" != s);
            var d = e("#allrecords").data("vk-event");
            d = !(!d || "nosend" != d);
            var l;
            if (l = e("#allrecords").data("tilda-currency") || e(".t706").data("project-currency-code") || "RUB", i || (i = window.location.href), (r = r ? parseFloat(r) : 0) > 0)
                if (window.dataLayer || (window.dataLayer = []), -1 != t.indexOf("/tilda/") && -1 != t.indexOf("/payment/") && window.tildaForm && window.tildaForm.orderIdForStat > "") i = { ecommerce: { purchase: { actionField: { id: window.tildaForm.orderIdForStat, revenue: window.tildaForm.amountForStat }, products: window.tildaForm.arProductsForStat } } }, window.tildaForm.tildapayment && window.tildaForm.tildapayment.promocode && (i.ecommerce.purchase.actionField.coupon = window.tildaForm.tildapayment.promocode), i.event = "purchase";
                else if (i && i.ecommerce && (i.ecommerce.add && i.ecommerce.add.products ? a = i.ecommerce.add.products : i.ecommerce.remove && i.ecommerce.remove.products ? a = i.ecommerce.remove.products : i.ecommerce.detail && i.ecommerce.detail.products && (a = i.ecommerce.detail.products), a && a.length > 0)) {
                for (c = 0; c < a.length; c++) a[c].id || (a[c].sku ? a[c].id = a[c].sku : a[c].uid ? a[c].id = a[c].uid : a[c].recid && a[c].lid && (a[c].id = a[c].recid + "_" + a[c].lid));
                i.ecommerce.add && i.ecommerce.add.products ? (i.ecommerce.add.products = a, i.event = "addToCart") : i.ecommerce.remove && i.ecommerce.remove.products ? (i.ecommerce.remove.products = a, i.event = "removeFromCart") : i.ecommerce.detail && i.ecommerce.detail.products ? (i.ecommerce.detail.products = a, i.event = "viewProduct") : (n ? (i.event = "pageView", i.eventAction = t) : i.event = t, i.title = o, i.value = r)
            }
            void 0 != window.dataLayer && (n ? r > 0 ? i && i.ecommerce ? window.dataLayer.push(i) : window.dataLayer.push({ event: "pageView", eventAction: t, title: o, value: r, product: i }) : window.dataLayer.push({ event: "pageView", eventAction: t, title: o, referer: i }) : i && i.ecommerce ? window.dataLayer.push(i) : window.dataLayer.push({ event: t, eventAction: o, value: r, referer: i }));
            try { window.gtagTrackerID && "gtag" == window.mainTracker && (n ? i && i.event ? "purchase" == i.event ? gtag("event", "purchase", { transaction_id: i.ecommerce.purchase.actionField.id, value: parseFloat(r).toFixed(2), currency: l, items: i.ecommerce.purchase.products }) : "addToCart" == i.event && i.ecommerce.add ? gtag("event", "add_to_cart", { items: i.ecommerce.add.products }) : "removeFromCart" == i.event && i.ecommerce.remove ? gtag("event", "remove_from_cart", { items: i.ecommerce.remove.products }) : "viewProduct" == i.event && i.ecommerce.detail && gtag("event", "view_item", { items: i.ecommerce.detail.products }) : gtag("config", window.gtagTrackerID, { page_title: o, page_path: t }) : gtag("event", t, { event_category: "tilda", event_label: o, value: r })) } catch (e) {}
            if (window.ga && "tilda" != window.mainTracker && "gtag" != window.mainTracker)
                if (n)
                    if (i && i.event) {
                        try {
                            if (window.Tilda.isLoadGAEcommerce || (window.Tilda.isLoadGAEcommerce = !0, ga("require", "ec")), ga("set", "currencyCode", l), "purchase" == i.event) {
                                var u = i.ecommerce.purchase.products.length;
                                for (g = 0; g < u; g++) v = i.ecommerce.purchase.products[g], ga("ec:addProduct", { id: v.id || g, name: v.name, price: parseFloat(v.price).toFixed(2), quantity: v.quantity });
                                ga("ec:setAction", "purchase", { id: i.ecommerce.purchase.actionField.id, revenue: parseFloat(r).toFixed(2) })
                            } else if ("addToCart" == i.event && i.ecommerce.add) {
                                u = i.ecommerce.add.products.length;
                                for (g = 0; g < u; g++) v = i.ecommerce.add.products[g], ga("ec:addProduct", { id: v.id || g, name: v.name, price: parseFloat(v.price).toFixed(2), quantity: v.quantity });
                                ga("ec:setAction", "add")
                            } else if ("removeFromCart" == i.event && i.ecommerce.remove) {
                                u = i.ecommerce.remove.products.length;
                                for (g = 0; g < u; g++) v = i.ecommerce.remove.products[g], ga("ec:addProduct", { id: v.id || g, name: v.name, price: parseFloat(v.price).toFixed(2), quantity: v.quantity });
                                ga("ec:setAction", "remove")
                            } else if ("viewProduct" == i.event && i.ecommerce.detail) {
                                u = i.ecommerce.detail.products.length;
                                for (g = 0; g < u; g++) v = i.ecommerce.detail.products[g], ga("ec:addProduct", { id: v.id || g, name: v.name, price: parseFloat(v.price).toFixed(2), quantity: v.quantity });
                                ga("ec:setAction", "detail")
                            }
                        } catch (e) {}
                        ga("send", { hitType: "pageview", page: t, title: o, params: i })
                    } else ga("send", { hitType: "pageview", page: t, title: o });
            else ga("send", { hitType: "event", eventCategory: "tilda", eventAction: t, eventLabel: o, eventValue: r });
            if (window.mainMetrikaId && window.mainMetrikaId > 0 && "function" == typeof ym)
                if (n) {
                    var p = { title: o };
                    r > 0 ? (p.params = { order_price: r }, l && (p.params.currency = l), ym(window.mainMetrikaId, "hit", t, p)) : ym(window.mainMetrikaId, "hit", t, p)
                } else r > 0 ? (p = { order_price: r }, l && (p.currency = l), ym(window.mainMetrikaId, "reachGoal", t, p)) : ym(window.mainMetrikaId, "reachGoal", t);
            if (window.mainMetrika > "" && window[window.mainMetrika] && (n ? r > 0 ? window[window.mainMetrika].hit(t, { title: o, order_price: r, params: i }) : window[window.mainMetrika].hit(t, { title: o }) : r > 0 ? window[window.mainMetrika].reachGoal(t, { title: o, params: i, order_price: r }) : window[window.mainMetrika].reachGoal(t, { title: o, referer: i })), void 0 != window.fbq && 0 == s) try {
                if (n)
                    if (-1 == t.indexOf("tilda/") || -1 == t.indexOf("/payment/") && -1 == t.indexOf("/submitted/"))
                        if (i && i.event && r > 0)
                            if ("addToCart" == i.event && i.ecommerce.add) {
                                u = i.ecommerce.add.products.length;
                                var h = [];
                                for (g = 0; g < u; g++) v = i.ecommerce.add.products[g], h.push(v.id || v.uid || v.name);
                                window.fbq("track", "AddToCart", { content_ids: h, content_type: "product", value: r, currency: l })
                            } else if ("viewProduct" == i.event && i.ecommerce.detail) {
                    u = i.ecommerce.detail.products.length, h = [];
                    for (g = 0; g < u; g++) v = i.ecommerce.detail.products[g], h.push(v.id || v.uid || v.name);
                    window.fbq("track", "ViewContent", { content_ids: h, content_type: "product", value: r, currency: l })
                } else t.indexOf("tilda/popup"), window.fbq("track", "ViewContent", { content_name: o, content_category: t });
                else t.indexOf("tilda/popup"), window.fbq("track", "ViewContent", { content_name: o, content_category: t });
                else r > 0 && l ? window.fbq("track", "InitiateCheckout", { content_name: o, content_category: t, value: r, currency: l }) : window.fbq("track", "Lead", { content_name: o, content_category: t });
                else window.fbq("track", t, { content_name: o, value: r })
            } catch (e) {}
            if (void 0 !== window.VK && void 0 !== window.VK.Retargeting && 0 == d) try {
                if (n) {
                    var f = e("#allrecords").data("vk-price-list-id") ? parseInt(e("#allrecords").data("vk-price-list-id")) : 0,
                        m = "",
                        w = !1;
                    if (i && i.event)
                        if (w = { products: [], currency_code: "", total_price: 0 }, "purchase" == i.event && i.ecommerce.purchase)
                            if (r > 0 && f > 0) {
                                w.currency_code = l;
                                u = i.ecommerce.purchase.products.length, h = [];
                                for (g = 0; g < u; g++) v = i.ecommerce.purchase.products[g], w.products.push({ id: v.id || v.uid || v.name, price: v.price ? v.price : 0 }), w.total_price = r;
                                m = "init_checkout"
                            } else m = "t-purchase";
                    else if ("addToCart" == i.event && i.ecommerce.add)
                        if (r > 0 && f > 0) {
                            w.currency_code = l;
                            u = i.ecommerce.add.products.length, h = [];
                            for (g = 0; g < u; g++) v = i.ecommerce.add.products[g], w.products.push({ id: v.id || v.uid || v.name, price: v.price ? v.price : 0 }), w.total_price = r;
                            m = "add_to_cart"
                        } else m = "t-add-to-cart", i.ecommerce.add[0] && i.ecommerce.add[0].uid && (m += "-" + i.ecommerce.add[0].uid);
                    else if ("viewProduct" == i.event && i.ecommerce.detail)
                        if (r > 0 && f > 0) {
                            w.currency_code = l;
                            u = i.ecommerce.detail.products.length, h = [];
                            for (g = 0; g < u; g++) v = i.ecommerce.detail.products[g], w.products.push({ id: v.id || v.uid || v.name, price: v.price ? v.price : 0 }), w.total_price = r;
                            m = "view_product"
                        } else m = "t-view-product", i.ecommerce.detail[0] && i.ecommerce.detail[0].uid && (m += "-" + i.ecommerce.detail[0].uid);
                    else if ("removeFromCart" == i.event && i.ecommerce.remmove)
                        if (r > 0 && f > 0) {
                            w.currency_code = l;
                            var v, g;
                            u = i.ecommerce.remove.products.length, h = [];
                            for (g = 0; g < u; g++) v = i.ecommerce.remove.products[g], w.products.push({ id: v.id || v.uid || v.name, price: v.price ? v.price : 0 }), w.total_price = r;
                            m = "remove_from_cart"
                        } else m = "t-remove-product", i.ecommerce.remove[0] && i.ecommerce.remove[0].uid && (m += "-" + i.ecommerce.remove[0].uid);
                    else m = i.event;
                    else if (-1 != t.indexOf("tilda/") && -1 != t.indexOf("/payment/")) m = "t-purchase-" + t.replace("tilda/", "").replace("/payment/", "");
                    else if (-1 != t.indexOf("tilda/") && -1 != t.indexOf("/submitted/")) m = "t-lead-" + t.replace("tilda/", "").replace("/submitted/", "");
                    else if (-1 != t.indexOf("tilda/popup")) m = "t-" + t.replace("tilda/", "").replace("/", "-");
                    else if (-1 != t.indexOf("tilda/click")) m = "t-" + t.replace("tilda/", "").replace("/", "-");
                    else m = "t-" + t.replace("/", "-");
                    f > 0 && w && w.currency_code ? (VK.Retargeting.Event("purchase"), VK.Retargeting.ProductEvent(f, m, w)) : VK.Retargeting.Event(m)
                } else VK.Retargeting.Event(t)
            } catch (e) {}
            if (window.mainMailruId > "0") {
                var y = window._tmr || (window._tmr = []);
                n ? r > 0 ? y.push({ id: "" + window.mainMailruId, type: "pageView", url: t, value: r, start: (new Date).getTime() }) : y.push({ id: "" + window.mainMailruId, type: "pageView", url: t, start: (new Date).getTime() }) : r > 0 ? y.push({ id: "" + window.mainMailruId, type: "reachGoal", goal: t, value: r }) : y.push({ id: "" + window.mainMailruId, type: "reachGoal", goal: t })
            }
            "function" == typeof window.tildastat && (n ? (t.indexOf("payment") > 0 && t.indexOf("tilda/form") > -1 && (t = t.replace("tilda/form", "tilda/rec")), window.tildastat("pageview", { page: t })) : window.tildastat("pageview", { page: "/tilda/event/" + t }))
        }, Tilda.saveUTM = function() {
            try {
                var e = window.location.href,
                    t = "",
                    o = "";
                if (-1 !== e.toLowerCase().indexOf("utm_") && "string" == typeof(t = (t = (e = e.toLowerCase()).split("?"))[1])) {
                    var i, r = t.split("&");
                    for (i in r) "utm_" == r[i].split("=")[0].substring(0, 4) && (o = o + r[i] + "|||");
                    if (o.length > 0) {
                        var n = new Date;
                        n.setDate(n.getDate() + 30), document.cookie = "TILDAUTM=" + encodeURIComponent(o) + "; path=/; expires=" + n.toUTCString()
                    }
                }
            } catch (e) {}
        }, e(document).ready(function() {
            var t = navigator.userAgent.toLowerCase(),
                o = -1 != t.indexOf("msie") && parseInt(t.split("msie")[1]);
            8 != o && 9 != o || e(".t-btn").each(function() {
                var t = e(this).attr("href");
                e(this).find("table").length > 0 && t > "" && -1 == t.indexOf("#popup:") && -1 == t.indexOf("#price:") && e(this).click(function(t) {
                    t.preventDefault();
                    var o = e(this).attr("href");
                    window.location.href = o
                })
            });
            try { 1 == e("#allrecords").length && "no" == e("#allrecords").data("tilda-cookie") || Tilda.saveUTM() } catch (e) {}
            e(".r").off("click", "a.js-click-stat"), e(".r").on("click", "a.js-click-stat", function(t) {
                var o = e(this).data("tilda-event-name"),
                    i = e(this).text(),
                    r = e(this).attr("href") || "",
                    n = e(this).attr("target");
                if (o || (o = "/tilda/click/".$(this).closest(".r").attr("id") + "/?url=" + r), Tilda.sendEventToStatistics(o, i), "http" == r.substring(0, 4)) return window.setTimeout(function() {
                    var t, o, i = "",
                        a = "";
                    if ("_blank" == n) {
                        if (-1 != r.indexOf("?") && (i = r.split("?"), r = i[0], -1 != (i = i[1]).indexOf("#") && (i = i.split("#"), r = r + "#" + i[1], i = i[0]), i = i.split("&")), 0 == e("#tildaredirectform").length ? e("body").append('<form id="tildaredirectform" target="_blank" method="GET" action="' + r + '" style="display:none;"></form>') : e("#tildaredirectform").attr("method", "GET").attr("action", r), a = "", i.length > 0)
                            for (t in i)(o = i[t].split("=")) && o.length > 0 && (a += '<input type="hidden" name="' + o[0] + '" value="' + (o[1] ? o[1] : "") + '">');
                        e("#tildaredirectform").html(a), e("#tildaredirectform").submit()
                    } else window.location.href = r
                }, 300), t.preventDefault(), !1
            }), e("input.js-amount").each(function() {
                var t = e(this).val();
                t = t.replace(/,/g, "."), t = parseFloat(t.replace(/[^0-9\.]/g, "")), e(this).val(t)
            }), Tilda.showFormError = function(e, t) {
                var o = e.find(".js-errorbox-all");
                o && 0 != o.length || (e.prepend('<div class="js-errorbox-all"></div>'), o = e.find(".js-errorbox-all"));
                var i = o.find(".js-rule-error-all");
                i && 0 != i.length || (o.append('<p class="js-rule-error-all"></p>'), i = o.find(".js-rule-error-all")), "string" == typeof t ? i.html(t) : t && t.responseText ? i.html(t.responseText + ". Later, plaese try again.") : t && t.statusText ? i.html("Error - " + t.statusText + ". Later, plaese try again.") : i.html("Unknown error. Later, plaese try again."), i.show(), o.show()
            }, Tilda.robokassaPayment = function(t, o, i) {
                return e.ajax({
                    type: "POST",
                    url: "#",
                    data: t.serialize(),
                    dataType: "text",
                    success: function(r) {
                        o.removeClass("t-btn_sending"), o.data("form-sending-status", "0"), o.data("submitform", "");
                        var n = o.closest(".r").attr("id");
                        if ("{" == r.substring(0, 1)) { if (window.JSON && window.JSON.parse ? json = window.JSON.parse(r) : json = e.parseJSON(r), !json) return void Tilda.showFormError(t, !1); if (json.error > "") return void Tilda.showFormError(t, json.error) } else if ("http" == r.substring(0, 4)) {
                            Tilda.sendEventToStatistics("/tilda/payment/" + n + "/click/", "Payment button: " + o.val(), "", i);
                            var a = r;
                            window.setTimeout(function() { window.location.href = a }, 500)
                        } else Tilda.showFormError(t, r)
                    },
                    fail: function(e) {
                        o.removeClass("t-btn_sending"), o.data("form-sending-status", "0"), o.data("submitform", "");
                        Tilda.showFormError(t, e)
                    },
                    timeout: 15e3
                })
            }
        })
    }(jQuery);
//  function(e) {
//      e(document).ready(function() {
//          setTimeout(function() {
/*  (e("#tildacopy").length || e(".t-tildalabel").length) && e(".t-tildalabel div").length ? e("body").height() + 70 < e(window).height() || e(".t-tildalabel").attr("style", "display: block !important") : e("body").contents().filter(function() { return 8 == this.nodeType }).each(function(t, o) {-1 !== o.nodeValue.indexOf("'t remove this l") && e("#allrecords").after('<div class="t-tildalabel t-tildalabel-free"><div class="t-tildalabel-free__main"><a href="#" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="#"></a > < div style = "padding-bottom: 15px;" > This site was made on < a href = "#"
target = "_blank"
style = "text-decoration: none; color:inherit;" > Tilda— a website builder < /a> that helps to&nbsp;create a&nbsp;website without any code</div > < a href = "#"
target = "_blank"
style = "display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;" > Create a website < /a></div > < div class = "t-tildalabel-free__links-wr" > < a class = "t-tildalabel-free__txt-link"
href = "http://help' + ("
RU " === window.browserLang ? " - ru " : "
") + '.tilda.ws/white-label"
target = "_blank" > ' + ("RU" === window.browserLang ? "Как удалить этот лейбл" : "How to remove this block") + "?</a></div></div>") })*/
//          }, 500)
//      })
//  }(jQuery);