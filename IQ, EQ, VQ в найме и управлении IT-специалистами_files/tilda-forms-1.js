(function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery) })(function(t) {
    var e, r = navigator.userAgent,
        a = /iphone/i.test(r),
        o = /chrome/i.test(r),
        i = /android/i.test(r);
    t.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "а": "[А-Яа-яЁё]", "*": "[A-Za-zА-Яа-яЁё0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, t.fn.extend({
        caret: function(t, e) { var r; if (0 !== this.length && !this.is(":hidden") && this.get(0) === document.activeElement) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function() { this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && (r = this.createTextRange(), r.collapse(!0), r.moveEnd("character", e), r.moveStart("character", t), r.select()) })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (r = document.selection.createRange(), t = 0 - r.duplicate().moveStart("character", -1e5), e = t + r.text.length), { begin: t, end: e }) },
        unmask: function() { return this.trigger("unmask") },
        mask: function(r, n) {
            var s, d, l, c, m, u, p, f;
            if (!r && this.length > 0) { s = t(this[0]); var w = s.data(t.mask.dataName); return w ? w() : void 0 }
            return n = t.extend({ autoclear: t.mask.autoclear, placeholder: t.mask.placeholder, completed: null }, n), d = t.mask.definitions, l = [], c = p = r.length, m = null, r = String(r), t.each(r.split(""), function(t, e) { "?" == e ? (p--, c = t) : d[e] ? (l.push(new RegExp(d[e])), null === m && (m = l.length - 1), t < c && (u = l.length - 1)) : l.push(null) }), this.trigger("unmask").each(function() {
                function s() {
                    if (n.completed) {
                        for (var t = m; t <= u; t++)
                            if (l[t] && P[t] === w(t)) return;
                        n.completed.call(T)
                    }
                }

                function w(t) { return t < n.placeholder.length ? n.placeholder.charAt(t) : n.placeholder.charAt(0) }

                function h(t) { for (; ++t < p && !l[t];); return t }

                function y(t) { for (; --t >= 0 && !l[t];); return t }

                function g(t, e) {
                    var r, a;
                    if (!(t < 0)) {
                        for (r = t, a = h(e); r < p; r++)
                            if (l[r]) {
                                if (!(a < p && l[r].test(P[a]))) break;
                                P[r] = P[a], P[a] = w(a), a = h(a)
                            }
                        k(), T.caret(Math.max(m, t))
                    }
                }

                function v(t) {
                    var e, r, a, o;
                    for (e = t, r = w(t); e < p; e++)
                        if (l[e]) {
                            if (a = h(e), o = P[e], P[e] = r, !(a < p && l[a].test(o))) break;
                            r = o
                        }
                }

                function j(e) {
                    var r = T.val(),
                        a = T.caret(),
                        o = function() { t.proxy(t.fn.caret, T, a.begin, a.begin)() };
                    if (f && f.length && f.length > r.length) {
                        for (var i = _(!0), n = a.end; n > 0 && !l[n - 1];) n--;
                        0 === n && (n = i), a.begin = n, setTimeout(function() { o(), s() }, 0)
                    } else a.begin = _(!0), setTimeout(function() { o(), s() }, 0)
                }

                function b(t) { _(), T.val() != S && T.change() }

                function $(t) {
                    if (!T.prop("readonly")) {
                        var e, r, o, i = t.which || t.keyCode;
                        f = T.val(), 8 === i || 46 === i || a && 127 === i ? (e = T.caret(), r = e.begin, o = e.end, o - r == 0 && (r = 46 !== i ? y(r) : o = h(r - 1), o = 46 === i ? h(o) : o), F(r, o), g(r, o - 1), t.preventDefault()) : 13 === i ? b.call(this, t) : 27 === i && (T.val(S), T.caret(0, _()), t.preventDefault())
                    }
                }

                function x(e) {
                    if (!T.prop("readonly")) {
                        var r, a, o, n = e.which || e.keyCode,
                            d = T.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || n < 32) && n && 13 !== n) {
                            if (d.end - d.begin != 0 && (F(d.begin, d.end), g(d.begin, d.end - 1)), r = h(d.begin - 1), r < p && (a = String.fromCharCode(n), l[r].test(a))) {
                                if (v(r), P[r] = a, k(), o = h(r), i) {
                                    var c = function() { t.proxy(t.fn.caret, T, o)() };
                                    setTimeout(c, 0)
                                } else T.caret(o);
                                d.begin <= u && s()
                            }
                            e.preventDefault()
                        }
                    }
                }

                function F(t, e) { var r; for (r = t; r < e && r < p; r++) l[r] && (P[r] = w(r)) }

                function k() { T.val(P.join("")) }

                function _(t) {
                    var e, r, a, o = T.val(),
                        i = -1;
                    for (e = 0, a = 0; e < p; e++)
                        if (l[e]) {
                            for (P[e] = w(e); a++ < o.length;)
                                if (r = o.charAt(a - 1), l[e].test(r)) { P[e] = r, i = e; break }
                            if (a > o.length) { F(e + 1, p); break }
                        } else P[e] === o.charAt(a) && a++, e < c && (i = e);
                    return t ? k() : i + 1 < c ? n.autoclear || P.join("") === E ? (T.val() && T.val(""), F(0, p)) : k() : (k(), T.val(T.val().substring(0, i + 1))), c ? e : m
                }
                var T = t(this),
                    P = t.map(r.split(""), function(t, e) { if ("?" != t) return d[t] ? w(e) : t }),
                    E = P.join(""),
                    S = T.val();
                T.data(t.mask.dataName, function() { return t.map(P, function(t, e) { return l[e] && t != w(e) ? t : null }).join("") }), T.one("unmask", function() { T.off(".mask").removeData(t.mask.dataName) }).on("focus.mask", function() {
                    var t;
                    T.prop("readonly") || (clearTimeout(e), S = T.val(), t = _(), e = setTimeout(function() { T.get(0) === document.activeElement && (k(), t == r.replace("?", "").length ? T.caret(0, t) : T.caret(t)) }, 10))
                }).on("blur.mask", b).on("keydown.mask", $).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    T.prop("readonly") || setTimeout(function() {
                        var t = _(!0);
                        T.caret(t), s()
                    }, 0)
                }), o && i && T.off("input.mask").on("input.mask", j), _()
            })
        }
    })
}),
function($) {
    window.tildaBrowserLang = window.navigator.userLanguage || window.navigator.language, window.tildaBrowserLang = window.tildaBrowserLang.toUpperCase(), -1 != window.tildaBrowserLang.indexOf("RU") ? window.tildaBrowserLang = "RU" : window.tildaBrowserLang = "EN", window.scriptSysPayment = {}, window.handlerSysPayment = {}, window.tildaForm = { versionLib: "01.001", endpoint: "forms.tildacdn.com", isRecaptchaScriptInit: !1, currentFormProccessing: !1, arMessages: { EN: { success: "Thank you! Your data has been submitted.", successorder: "Thank you! Order created. Please wait. We are going to the payment..." }, RU: { success: "Спасибо! Данные успешно отправлены.", successorder: "Спасибо! Заказ оформлен. Пожалуйста, подождите. Идет переход к оплате...." } }, arValidateErrors: { EN: { email: "Please put a correct e-mail", url: "Please put a correct URL", phone: "Please put a correct phone number", number: "Please put a correct number", date: "Please put a correct date", time: "Please put a correct time (HH:mm)", name: "Please put a name", namerus: "Please put a correct name (only cyrillic letters)", nameeng: "Please put a correct name (only latin letters)", string: "You put incorrect symbols. Only letters, numbers and punctuation symbols are allowed", req: "Please fill out all required fields", reqfield: "Required field", minlength: "Value is too short", maxlength: "Value too big", emptyfill: "None of the fields are filled in", chosevalue: "Please select an address from the options", deliveryreq: "It is not possible to place an order without delivery. Please refresh the page and try again" }, RU: { email: "Укажите, пожалуйста, корректный email", url: "Укажите, пожалуйста, корректный URL", phone: "Укажите, пожалуйста, корректный номер телефона", number: "Укажите, пожалуйста, корректный номер", date: "Укажите, пожалуйста, корректную дату", time: "Укажите, пожалуйста, корректное время (ЧЧ:ММ)", name: "Укажите, пожалуйста, имя", namerus: "Укажите, пожалуйста, имя (только кириллица)", nameeng: "Укажите, пожалуйста, имя (только латиница)", string: "Вы написали некорректные символы. Разрешены только буквы, числа и знаки пунктуации", req: "Пожалуйста, заполните все обязательные поля", minlength: "Слишком короткое значение", maxlength: "Слишком длинное", reqfield: "Обязательное поле", emptyfill: "Ни одно поле не заполнено", chosevalue: "Пожалуйста, выберите адрес из предложенных вариантов", deliveryreq: "Невозможно оформить заказ без доставки. Пожалуйста, перезагрузите страницу и попробуйте еще раз." } } }, $(document).ready(function() {
        window.tildaForm.captchaCallback = function(t) {
            if (!window.tildaForm.currentFormProccessing || !window.tildaForm.currentFormProccessing.form) return !1;
            window.tildaForm.send(window.tildaForm.currentFormProccessing.form, window.tildaForm.currentFormProccessing.btn, window.tildaForm.currentFormProccessing.formtype, window.tildaForm.currentFormProccessing.formskey), window.tildaForm.currentFormProccessing = !1
        }, window.tildaForm.validate = function(t) {
            var e = [],
                r = !0;
            if (t.find(".js-tilda-rule").each(function() {
                    var t, a, o = $(this).data("tilda-req") || 0,
                        i = $(this).data("tilda-rule") || "none",
                        n = $(this).data("tilda-rule-minlength") || 0,
                        s = $(this).data("tilda-rule-maxlength") || 0,
                        d = {},
                        l = $(this).val(),
                        c = "";
                    if (d.obj = $(this), d.type = [], l && l.length > 0) {
                        try { c = l.replace(/[\s\u0000—\u001F\u2000-\u200F\uFEFF\u2028-\u202F\u205F-\u206F]/gi, "") } catch (t) {}
                        l = l.trim()
                    }
                    if (l.length > 0 && (r = !1), n && (n = parseInt(n)), s && (s = parseInt(s)), 1 == o && (0 == l.length && 0 == c.length || ("checkbox" == $(this).attr("type") || "radio" == $(this).attr("type")) && 0 == $(this).closest("form").find('[name="' + $(this).attr("name") + '"]:checked').length)) d.type.push("req");
                    else {
                        switch (i) {
                            case "email":
                                t = /^[a-zA-Zёа-яЁА-Я0-9_\.\-\+]{1,64}@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}$/gi, l.length > 0 && !l.match(t) && d.type.push("email");
                                break;
                            case "url":
                                t = /^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}\/?$/gi, l.length > 0 && (a = l.split("//"), a = a && a.length > 1 ? a[1] : a[0], a = a.split("/"), a && a.length > 0 && a[0] > "" ? (a = a[0], a.match(t) || d.type.push("url")) : (a && "" != a[0] || d.type.push("url"), a = ""));
                                break;
                            case "phone":
                                t = /^[0-9\(\)\-\+]+$/gi, c.length > 0 && !c.match(t) ? d.type.push("phone") : (a = c.replace(/[^0-9]+/g, ""), (1 == a.indexOf("000") || 1 == a.indexOf("111") || 1 == a.indexOf("222") && "5" != a.substring(0, 1) || 1 == a.indexOf("333") || 1 == a.indexOf("444") || 1 == a.indexOf("555") && "0" != a.substring(0, 1) || 1 == a.indexOf("666") && "0" != a.substring(0, 1) || 1 == a.indexOf("8888") && "4" != a.substring(0, 1)) && d.type.push("phone"));
                                break;
                            case "number":
                                t = /^[0-9]+$/gi, c.length > 0 && !c.match(t) && d.type.push("number");
                                break;
                            case "date":
                                t = /^[0-9]{1,4}[\-\.\/][0-9]{1,2}[\-\.\/][0-9]{1,4}$/gi, c.length > 0 && !c.match(t) && d.type.push("date");
                                break;
                            case "time":
                                t = /^[0-9]{2}[:\.][0-9]{2}$/gi, c.length > 0 && !c.match(t) && d.type.push("time");
                                break;
                            case "name":
                                t = /^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\-\'\s\.]{0,})$/gi, l.length > 0 && !l.match(t) && d.type.push("name");
                                break;
                            case "nameeng":
                                t = /^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i, l.length > 0 && !l.match(t) && d.type.push("nameeng");
                                break;
                            case "namerus":
                                t = /^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i, l.length > 0 && !l.match(t) && d.type.push("namerus");
                                break;
                            case "string":
                                t = /^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F,\.:;\"\'\`\-\_\+\?\!\%\$\@\*\&\^\s]$/i, l.length > 0 && !l.match(t) && d.type.push("string");
                                break;
                            case "chosevalue":
                                var m = "true" === $(this).attr("data-option-selected");
                                m || d.type.push("chosevalue");
                                break;
                            case "deliveryreq":
                                d.type.push("deliveryreq")
                        }
                        n > 0 && l.length > 0 && l.length < n && d.type.push("minlength"), s > 0 && l.length > 0 && l.length > s && d.type.push("maxlength")
                    }
                    d.type && d.type.length > 0 && (e[e.length] = d)
                }), "y" === t.attr("data-formcart")) {
                var a = void 0 !== window.tcart_minorder && window.tcart_minorder > 0,
                    o = void 0 !== window.tcart_mincntorder && window.tcart_mincntorder > 0;
                if (a)
                    if (window.tcart.prodamount >= window.tcart_minorder);
                    else {
                        var i = {};
                        i.obj = $({}), i.type = [], i.type.push("minorder"), e.push(i)
                    }
                if (o)
                    if (window.tcart.total >= window.tcart_mincntorder);
                    else {
                        i = {};
                        i.obj = $({}), i.type = [], i.type.push("minquantity"), e.push(i)
                    }
            }
            return r && 0 == e.length && (e = [{ obj: "none", type: ["emptyfill"] }]), e
        }, window.tildaForm.hideErrors = function(t) {
            t.find(".js-errorbox-all").hide(), t.find(".js-rule-error").hide(), t.find(".js-error-rule-all").html(""), t.find(".js-successbox").hide(), t.find(".js-error-control-box .t-input-error").html(""), t.find(".js-error-control-box").removeClass("js-error-control-box"), t.removeClass("js-send-form-error"), t.removeClass("js-send-form-success");
            var e = $("#tilda-popup-for-error");
            e.length > 0 && e.fadeOut()
        }, window.tildaForm.showErrorInPopup = function(t, e) {
            if (!e || 0 == e.length) return !1;
            var r = t.data("inputbox");
            r || (r = ".blockinput");
            var a, o, i, n, s = window.tildaForm.arValidateErrors[window.tildaBrowserLang] || {},
                d = "",
                l = "",
                c = $("#tilda-popup-for-error");
            0 == c.length && ($("body").append('<div id="tilda-popup-for-error" class="js-form-popup-errorbox tn-form__errorbox-popup" style="display: none;"> <div class="t-form__errorbox-text t-text t-text_xs"> error </div> <div class="tn-form__errorbox-close js-errorbox-close"> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div> </div> </div>'), c = $("#tilda-popup-for-error"), $("#tilda-popup-for-error").on("click", ".js-errorbox-close", function(t) { return t.preventDefault(), $("#tilda-popup-for-error").fadeOut(), !1 })), l = "";
            for (var m = 0; m < e.length; m++)
                if (e[m] && e[m].obj) { if (0 == m && "none" == e[m].obj) { l = '<p class="t-form__errorbox-item">' + s.emptyfill + "</p>"; break } for (a = e[m].obj.closest(r).addClass("js-error-control-box"), o = 0, i = 1, a.find(".t-input-error").length > 0 && (o = 1), j = 0; j < e[m].type.length; j++) error = e[m].type[j], d = "", 1 == i && (n = t.find(".js-rule-error-" + error), n.length > 0 ? "" == n.text() && s[error] > "" ? -1 == l.indexOf(s[error]) && (l = l + '<p class="t-form__errorbox-item">' + s[error] + "</p>") : (d = n.eq(0).text(), -1 == l.indexOf(s[error]) && (l = l + '<p class="t-form__errorbox-item">' + n.eq(0).text() + "</p>")) : s[error] > "" && -1 == l.indexOf(s[error]) && (l = l + '<p class="t-form__errorbox-item">' + s[error] + "</p>")), o && ("" == d && (s[error + "field"] > "" ? d = s[error + "field"] : s[error] > "" && (d = s[error])), d > "" && (a.find(".t-input-error").html(d), a.find(".t-input-error").fadeIn())) }
            return l > "" && (c.find(".t-form__errorbox-text").html(l), c.css("display", "block").fadeIn(), c.find(".t-form__errorbox-item").fadeIn()), window.errorTimerID && window.clearTimeout(window.errorTimerID), window.errorTimerID = window.setTimeout(function() { $("#tilda-popup-for-error").fadeOut(), t.find(".t-input-error").html("").fadeOut(), window.errorTimerID = 0 }, 1e4), t.off("focus change", ".js-tilda-rule"), t.on("focus change", ".js-tilda-rule", function() { $("#tilda-popup-for-error").fadeOut(), $(this).closest("form").find(".t-input-error").html("").fadeOut(), window.errorTimerID && (window.clearTimeout(window.errorTimerID), window.errorTimerID = 0) }), t.trigger("tildaform:aftererror"), !0
        }, window.tildaForm.showErrors = function(t, e) {
            if (!e || 0 == e.length) return !1;
            if ("y" == t.data("error-popup")) return tildaForm.showErrorInPopup(t, e);
            var r = t.data("inputbox");
            r || (r = ".blockinput");
            for (var a, o, i, n, s = window.tildaForm.arValidateErrors[window.tildaBrowserLang] || {}, d = "", l = 0; l < e.length; l++)
                if (e[l] && e[l].obj) { if (0 == l && "none" == e[l].obj) { n = t.find(".js-rule-error-all"), n.html(s.emptyfill), n.css("display", "block").show(); break } for (a = e[l].obj.closest(r).addClass("js-error-control-box"), o = 0, i = 1, a.find(".t-input-error").length > 0 && (o = 1), j = 0; j < e[l].type.length; j++) error = e[l].type[j], d = "", 1 == i && (n = t.find(".js-rule-error-" + error), n.attr("data-rule-filled") ? n.css("display", "block").show() : n.length > 0 ? ("" == n.text() && s[error] > "" ? n.html(s[error]) : d = n.eq(0).text(), n.css("display", "block").show()) : s[error] > "" && (n = t.find(".js-rule-error-all"), n && n.length > 0 && (n.html(s[error]), n.css("display", "block").show()))), o && ("" == d && (s[error + "field"] > "" ? d = s[error + "field"] : s[error] > "" && (d = s[error])), d > "" && a.find(".t-input-error").html(d)) }
            return t.find(".js-errorbox-all").css("display", "block").show(), t.trigger("tildaform:aftererror"), !0
        }, checkVerifyTildaCaptcha = function(t) {
            if (-1 == t.origin.indexOf(window.tildaForm.endpoint));
            else {
                if ("closeiframe" == t.data) return $("#tildaformcaptchabox").remove(), void $("#js-tildaspec-captcha").remove();
                var e = t.data,
                    r = $("#js-tildaspec-captcha");
                r && r.length > 0 && (r.val(e), $("#tildaformcaptchabox").remove(), r.closest("form").trigger("submit"))
            }
        }, window.tildaForm.addTildaCaptcha = function(t, e) {
            var r;
            $("#tildaformcaptchabox").remove(), $("#js-tildaspec-captcha").remove(), t.append('<input type="hidden" name="tildaspec-tildacaptcha" id="js-tildaspec-captcha">');
            try { r = (new Date).getTime() + "=" + parseInt(8 * Math.random()) } catch (t) { r = "rnd=" + parseInt(8 * Math.random()) }
            $("body").append('<div id="tildaformcaptchabox" style="z-index:10000000;position:fixed; text-align: center; vertical-align: middle; top: 0px; left:0px; bottom: 0px; right: 0px; background: rgba(255,255,255,0.97);"><iframe id="captchaIframeBox" src="//' + window.tildaForm.endpoint + "/procces/captcha/?tildaspec-formid=" + t.attr("id") + "&tildaspec-formskey=" + e + "&" + r + '" frameborder="0" width="100%" height="100%"></iframe></div>'), window.removeEventListener("message", checkVerifyTildaCaptcha), window.addEventListener("message", checkVerifyTildaCaptcha)
        }, window.tildaForm.addPaymentInfoToForm = function(t) {
            t.find(".js-tilda-payment").remove();
            var e, r, a, o = "",
                i = 0;
            window.tildaForm.tildapayment = {}, window.tildaForm.arProductsForStat = [], window.tildaForm.orderIdForStat = "", window.tildaForm.amountForStat = 0, window.tildaForm.currencyForStat = "";
            var n = $("#allrecords").data("tilda-currency") || $(".t706").data("project-currency-code") || "";
            if (n ? (window.tildaForm.currencyForStat = n, window.tildaForm.tildapayment.currency = n) : window.tcart.currency && window.tcart.currency > "" && (window.tildaForm.currencyForStat = window.tcart.currency, window.tildaForm.tildapayment.currency = window.tcart.currency), !window.tcart.delivery && $(".t-radio_delivery:checked").length && $(".t-radio_delivery:checked").data("delivery-price") > 0) try { return window.tildaForm.tildapayment = !1, window.location.reload(), !1 } catch (t) {}
            window.tildaForm.amountForStat = window.tcart.amount, window.tildaForm.tildapayment.amount = window.tcart.amount, window.tcart.system && window.tcart.system > "" ? window.tildaForm.tildapayment.system = window.tcart.system : window.tildaForm.tildapayment.system = "auto", window.tcart.promocode && window.tcart.promocode.promocode > "" && (window.tildaForm.tildapayment.promocode = window.tcart.promocode.promocode, window.tcart.prodamount_discountsum && parseFloat(window.tcart.prodamount_discountsum) > 0 ? (window.tildaForm.tildapayment.discount = window.tcart.prodamount_discountsum, i = window.tcart.prodamount_discountsum) : window.tcart.amount_discountsum && parseFloat(window.tcart.amount_discountsum) > 0 && (i = window.tcart.amount_discountsum, window.tildaForm.tildapayment.discount = window.tcart.amount_discountsum), window.tcart.prodamount_withdiscount && parseFloat(window.tcart.prodamount_withdiscount) > 0 && (window.tildaForm.tildapayment.prodamount_withdiscount = window.tcart.prodamount_withdiscount), window.tcart.amount_withoutdiscount && parseFloat(window.tcart.amount_withoutdiscount) > 0 && (window.tildaForm.tildapayment.amount_withoutdiscount = window.tcart.amount_withoutdiscount)), window.tcart.prodamount && parseFloat(window.tcart.prodamount) > 0 && (window.tildaForm.tildapayment.prodamount = window.tcart.prodamount);
            var s = [];
            $.each(window.tcart.products, function(t, e) { $.isEmptyObject(e) || "yes" === e.deleted || s.push(e) }), window.tcart.products = s;
            var d = new Date,
                l = d.getTimezoneOffset();
            window.tildaForm.tildapayment.timezoneoffset = l;
            var c, m, u = 0;
            for (window.tcart.products && window.tcart.products.length > 0 && (u = window.tcart.products.length), window.tildaForm.tildapayment.products = [], r = 0; r < u; r += 1) {
                for (a in e = window.tcart.products[r], c = {}, m = "", window.tildaForm.tildapayment.products[r] = {}, e)
                    if ("function" != typeof e[a])
                        if ("options" == a)
                            for (var p in window.tildaForm.tildapayment.products[r][a] = {}, e[a]) void 0 === window.tildaForm.tildapayment.products[r][a][p] && (window.tildaForm.tildapayment.products[r][a][p] = {}), e[a][p].option && (window.tildaForm.tildapayment.products[r][a][p].option = e[a][p].option), e[a][p].price && e[a][p].price > 0 && (window.tildaForm.tildapayment.products[r][a][p].price = e[a][p].price), e[a][p].variant && (window.tildaForm.tildapayment.products[r][a][p].variant = e[a][p].variant), e[a][p].option && e[a][p].variant && (m > "" && (m += ", "), m = m + e[a][p].option + ":" + e[a][p].variant);
                        else window.tildaForm.tildapayment.products[r][a] = e[a];
                e.sku ? c.id = e.sku : e.uid && (c.id = e.uid), c.name = e.name, e.price ? (c.price = e.price, c.quantity = parseInt(e.amount / e.price)) : e.quantity && e.quantity > 1 ? (c.price = e.amount / e.quantity, c.quantity = e.quantity) : (c.price = e.amount, c.quantity = 1), c.name = e.name, m > "" && (c.name = c.name + "(" + m + ")"), e.sku && (c.sku = e.sku), e.uid && (c.uid = e.uid), window.tildaForm.arProductsForStat.push(c)
            }
            window.tcart.delivery && window.tcart.delivery.name && (window.tildaForm.tildapayment.delivery = { name: window.tcart.delivery.name }, window.tcart.delivery && window.tcart.delivery.price && (pricedelivery = window.tcart.delivery.price, window.tildaForm.tildapayment.delivery.price = window.tcart.delivery.price, window.tcart.prodamount > 0 && void 0 !== window.tcart.delivery.freedl && window.tcart.delivery.freedl > 0 && (window.tildaForm.tildapayment.delivery.freedl = window.tcart.delivery.freedl, window.tcart.prodamount - i >= window.tcart.delivery.freedl && (pricedelivery = 0)), c = { name: window.tcart.delivery.name, price: pricedelivery, quantity: 1, id: "delivery" }, window.tildaForm.arProductsForStat.push(c)));
            try {
                var f = ["city", "street", "pickup-name", "pickup-address", "pickup-id", "house", "entrance", "floor", "aptoffice", "phone", "entrancecode", "comment", "service-id", "hash", "postalcode", "country", "userinitials", "onelineaddress"];
                f.forEach(function(t) { window.tcart.delivery && window.tcart.delivery[t] && (window.tildaForm.tildapayment.delivery[t] = window.tcart.delivery[t]) })
            } catch (t) { console.log(t) }
            t.append(o)
        }, window.tildaForm.clearTCart = function(t) {
            if ("y" == t.data("formcart")) {
                if (window.clearTCart = !0, window.tcart = { amount: 0, currency: "", system: "", products: [] }, window.tcart.system = "none", "object" == typeof localStorage) try { localStorage.removeItem("tcart") } catch (t) { console.log("Your web browser does not support localStorage.") }
                try { delete window.tcart, tcart__loadLocalObj() } catch (t) {}
                window.tcart_success = "yes"
            }
        }, window.tildaForm.payment = function($jform, arNext) {
            var html = "";
            if ("y" != $jform.data("formpaymentoff")) {
                if ($jform.find(".js-successbox").length > 0) {
                    $jform.find(".js-successbox").text() > "" && $jform.data("successmessage", $jform.find(".js-successbox").text());
                    var arMessage = window.tildaForm.arMessages[window.tildaBrowserLang] || {};
                    arMessage.successorder && $jform.find(".js-successbox").html(arMessage.successorder), $jform.find(".js-successbox").show()
                }
                if ($jform.addClass("js-send-form-success"), "link" == arNext.type) return tildaForm.clearTCart($jform), arNext.message && arNext.message > "" && $jform.find(".js-successbox").length > 0 && ($jform.find(".js-successbox").html(arNext.message), $jform.find(".js-successbox").show()), window.location.href = arNext.value, !0;
                if ("form" == arNext.type) {
                    $("#js-tilda-payment-formid").remove();
                    var key = "",
                        val = "";
                    for (key in html = '<form id="js-tilda-payment-formid" action="' + arNext.value.action + '" method="post"  style="position:absolue;opacity:0;width: 1px; height: 1px; left: -5000px;">', arNext.value.action = "", arNext.value) val = arNext.value[key], "function" != typeof val && val > "" && (html += "<input type='hidden' name='" + key + "' value='" + val + "' >");
                    html += "</form>", $("body").append(html), tildaForm.clearTCart($jform), $("#js-tilda-payment-formid").attr("action") > "" ? $("#js-tilda-payment-formid").trigger("submit") : setTimeout(function() { $("#js-tilda-payment-formid").trigger("submit") }, 200)
                } else {
                    if ("function" == arNext.type) { var arArgs = arNext.value.args; return arNext.value.functioncode ? tildaForm.paysystemRun(arNext.value.script, arNext.value.sysname, $jform, arNext.value.functioncode, arArgs) : eval(arNext.value.name + "($jform, arArgs);"), !1 }
                    tildaForm.clearTCart($jform), "text" == arNext.type && arNext.message && arNext.message > "" && $jform.find(".js-successbox").length > 0 && ($jform.find(".js-successbox").html(arNext.message), $jform.find(".js-successbox").show())
                }
            } else tildaForm.clearTCart($jform)
        }, window.tildaForm.paysystemScriptLoad = function(t, e) {
            if (!e || !t || "http" != t.substring(0, 4)) return console.log("Wrong script parameters."), !1;
            if (window.scriptSysPayment || (window.scriptSysPayment = {}), !window.scriptSysPayment[e] || !0 !== window.scriptSysPayment[e]) {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = t, document.body.appendChild(r), window.scriptSysPayment[e] = !0
            }
        }, window.tildaForm.paysystemRun = function(script, sysname, $jform, functioncode, arArgs) {
            if (window.scriptSysPayment || (window.scriptSysPayment = {}), !window.scriptSysPayment[sysname] || !0 !== window.scriptSysPayment[sysname]) return window.tildaForm.paysystemScriptLoad(script, sysname), window.setTimeout(function() { window.tildaForm.paysystemRun(script, sysname, $jform, functioncode, arArgs) }, 200), !1;
            eval(functioncode)
        }, window.tildaForm.paysystemSuccess = function(t, e) {
            window.tildaForm.clearTCart(t);
            var r = "/tilda/" + t.attr("id") + "/payment/",
                a = "Pay order in form " + t.attr("id"),
                o = e.amount,
                i = e.description;
            if (window.Tilda && "function" == typeof Tilda.sendEventToStatistics) {
                var n = $("#allrecords").data("tilda-currency") || $(".t706").data("project-currency-code");
                n || $("#allrecords").data("tilda-currency", e.currency), Tilda.sendEventToStatistics(r, a, i, o)
            }
            e.successurl > "" && window.setTimeout(function() { window.location.href = e.successurl }, 300), t.data("successmessage") > "" ? t.find(".js-successbox").html(t.data("successmessage")) : t.find(".js-successbox").html(""), t.data("successmessage", "");
            var s = t.data("success-callback");
            window.tildaForm.successEnd(t, e.successurl, s), t.trigger("tildaform:aftersuccess")
        }, window.tildaForm.stripeLoad = function() {
            if (!0 !== window.stripeapiiscalled) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://checkout.stripe.com/checkout.js", document.body.appendChild(t), window.stripeapiiscalled = !0
            }
        }, window.tildaForm.stripePay = function(t, e) {
            if (!0 !== window.stripeapiiscalled) return window.tildaForm.stripeLoad(), window.setTimeout(function() { window.tildaForm.stripePay(t, e) }, 200), !1;
            var r = e.companyname,
                a = e.companylogo;
            if (r || (r = window.location.host), !window.stripehandler) {
                if ("object" != typeof window.StripeCheckout) return window.setTimeout(function() { window.tildaForm.stripePay(t, e) }, 200), !1;
                var o = { key: e.accountid, image: a, name: r, locale: "auto" };
                e.zipCode && 1 == e.zipCode && (o.zipCode = !0), e.billingAddress && 1 == e.billingAddress && (o.billingAddress = !0), e.shipping && 1 == e.shipping && (o.shippingAddress = !0), window.stripehandler = window.StripeCheckout.configure(o), $(window).on("popstate", function() { window.stripehandler.close() })
            }
            window.tildaForm.orderIdForStat = e.invoiceid;
            var i = 100;
            try { e.multiple && e.multiple > 0 && (i = parseInt(e.multiple)) } catch (t) {}
            window.stripehandler.open({
                name: r,
                image: a,
                description: e.description,
                amount: parseInt((parseFloat(e.amount) * i).toFixed()),
                currency: e.currency,
                shippingAddress: "1" == e.shipping,
                email: e.email > "" ? e.email : "",
                token: function(r, a) {
                    r && r.id && $.ajax({
                        type: "POST",
                        url: "https://" + window.tildaForm.endpoint + "/payment/stripe/",
                        data: { projectid: e.projectid, invoiceid: e.invoiceid, token: r.id, email: r.email, currency: e.currency, amount: parseInt((parseFloat(e.amount) * i).toFixed()) },
                        dataType: "json",
                        xhrFields: { withCredentials: !1 },
                        success: function(r) {
                            window.tildaForm.clearTCart(t);
                            var a = "/tilda/" + t.attr("id") + "/payment/",
                                o = "Pay order in form " + t.attr("id"),
                                i = e.amount,
                                n = e.description;
                            if (window.Tilda && "function" == typeof Tilda.sendEventToStatistics) {
                                var s = $("#allrecords").data("tilda-currency") || $(".t706").data("project-currency-code");
                                s || $("#allrecords").data("tilda-currency", e.currency), Tilda.sendEventToStatistics(a, o, n, i)
                            }
                            e.successurl > "" && window.setTimeout(function() { window.location.href = e.successurl }, 300), t.data("successmessage") > "" ? t.find(".js-successbox").html(t.data("successmessage")) : t.find(".js-successbox").html(""), t.data("successmessage", "");
                            var d = t.data("success-callback");
                            window.tildaForm.successEnd(t, e.successurl, d), t.trigger("tildaform:aftersuccess")
                        },
                        fail: function() {},
                        timeout: 15e3
                    })
                }
            })
        }, window.tildaForm.cloudpaymentLoad = function() {
            if (!0 !== window.cloudpaymentsapiiscalled) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://widget.cloudpayments.ru/bundles/cloudpayments", document.body.appendChild(t), window.cloudpaymentsapiiscalled = !0
            }
        }, window.tildaForm.cloudpaymentPay = function(t, e) {
            if (!0 !== window.cloudpaymentsapiiscalled) return window.tildaForm.cloudpaymentLoad(), window.setTimeout(function() { window.tildaForm.cloudpaymentPay(t, e) }, 200), !1;
            var r = e.currency,
                a = e.language,
                o = {};
            if (a || (a = "RUB" == r || "BYR" == r || "BYN" == r || "RUR" == r ? "ru-RU" : "UAH" == r ? "uk" : "en-US"), !window.cloudpaymentshandler) {
                if ("object" != typeof window.cp) return window.setTimeout(function() { window.tildaForm.cloudpaymentPay(t, e) }, 200), !1;
                o = { language: a }, e.applePaySupport && "off" == e.applePaySupport && (o.applePaySupport = !1), e.googlePaySupport && "off" == e.googlePaySupport && (o.googlePaySupport = !1), window.cloudpaymentshandler = new cp.CloudPayments(o)
            }
            var i = {};
            i.projectid = e.projectid, e.cloudPayments && (e.cloudPayments.recurrent || e.cloudPayments.customerReceipt) && (i.cloudPayments = e.cloudPayments);
            var n = t.closest(".t-popup_show");
            return n && 0 != n.length || (n = t.closest(".t706__cartwin_showed")), n.data("old-style", n.attr("style")), n.attr("style", "z-index:100"), window.tildaForm.orderIdForStat = e.invoiceId, e.skin || (e.skin = "classic"), window.cloudpaymentshandler.charge({ publicId: e.publicId, description: e.description, amount: parseFloat(e.amount), currency: r, accountId: e.accountId, invoiceId: e.invoiceId, requireEmail: 1 == e.requireEmail, email: e.email, skin: e.skin, data: i }, function(a) {
                window.cloudpaymentshandler = !1, n.attr("style", n.data("old-style"));
                var o = "/tilda/" + t.attr("id") + "/payment/",
                    i = "Pay order in form " + t.attr("id"),
                    s = e.amount,
                    d = e.description;
                $("#allrecords").data("tilda-currency", r), window.Tilda && "function" == typeof Tilda.sendEventToStatistics && Tilda.sendEventToStatistics(o, i, d, s), window.tildaForm.clearTCart(t), e.successurl > "" && window.setTimeout(function() { window.location.href = e.successurl }, 300), t.data("successmessage") > "" ? t.find(".js-successbox").html(t.data("successmessage")) : t.find(".js-successbox").html(""), t.data("successmessage", "");
                var l = t.data("success-callback");
                window.tildaForm.successEnd(t, e.successurl, l), t.trigger("tildaform:aftersuccess")
            }, function(r, a) {
                if (n.attr("style", n.data("old-style")), t.find(".js-successbox").hide(), t.data("successmessage") > "" ? t.find(".js-successbox").html(t.data("successmessage")) : t.find(".js-successbox").html(""), t.data("successmessage", ""), window.cloudpaymentshandler = !1, e.failureurl > "") window.location.href = e.failureurl;
                else { n.find(".t706__cartwin-products").show(), n.find(".t706__cartwin-prodamount-wrap").show(), n.find(".t706__form-bottom-text").show(), t.find(".t-form__inputsbox").show(); try { tcart__lockScroll() } catch (t) {} }
            }), !1
        }, window.tildaForm.sendStatAndShowMessage = function($jform, arArgs, sendStat) {
            if (sendStat) {
                var virtPage = "/tilda/" + $jform.attr("id") + "/payment/",
                    virtTitle = "Pay order in form " + $jform.attr("id"),
                    virtPrice = arArgs.amount,
                    virtProduct = arArgs.description;
                if (window.Tilda && "function" == typeof Tilda.sendEventToStatistics) {
                    var currency = $("#allrecords").data("tilda-currency") || $(".t706").data("project-currency-code");
                    currency || $("#allrecords").data("tilda-currency", arArgs.currency), Tilda.sendEventToStatistics(virtPage, virtTitle, virtProduct, virtPrice)
                }
            }
            if ($jform.find(".js-successbox").length > 0) {
                if ("y" == $jform.data("success-popup") && $jform.find(".js-successbox").hide(), arArgs.successmessage && arArgs.successmessage > "") $jform.find(".js-successbox").html(arArgs.successmessage);
                else if ($jform.data("successmessage") > "") $jform.find(".js-successbox").html($jform.data("successmessage"));
                else {
                    var arMessage = window.tildaForm.arMessages[window.tildaBrowserLang] || {};
                    arMessage.success ? $jform.find(".js-successbox").html(arMessage.success) : $jform.find(".js-successbox").html("")
                }
                $jform.data("successmessage", ""), "y" == $jform.data("success-popup") ? window.tildaForm.showSuccessPopup($jform.find(".js-successbox").html()) : $jform.find(".js-successbox").show()
            }
            $jform.addClass("js-send-form-success"), window.tildaForm.clearTCart($jform), arArgs.successurl > "" && window.setTimeout(function() { window.location.href = arArgs.successurl }, 300);
            var successcallback = $jform.data("success-callback");
            successcallback && successcallback.length > 0 && eval(successcallback + "($jform)"), $jform.find(".t-upwidget-container__data_table_actions_remove svg").click(), $jform.find("input[type=text]:visible").val(""), $jform.find("textarea:visible").html(""), $jform.find("textarea:visible").val(""), $jform.data("tildaformresult", { tranid: "0", orderid: "0" }), $jform.trigger("tildaform:aftersuccess")
        }, window.tildaForm.banktransferPay = function(t, e) {
            if (e && "fast" == e.condition) window.tildaForm.sendStatAndShowMessage(t, e, !0);
            else if (e && e.html > "") {
                $("#allrecords").append(e.html), $(".t-banktransfer .t-popup__close").off("click"), $(".t-banktransfer .t-popup__close").click(function() { $("body").removeClass("t-body_popupshowed"), $(".t-banktransfer").remove(); try { "function" == typeof tcart__closeCart && tcart__closeCart() } catch (t) {} return !1 }), $("body").addClass("t-body_popupshowed");
                var r, a = $("#formbanktransfer");
                a.length > 0 && (a.off("submit"), a.find(".t-submit").off("click"), a.find(".t-submit").off("dblclick"), a.submit(function(o) {
                    if (o.preventDefault(), r = window.tildaForm.validate(a), r && r.length > 0) return window.tildaForm.showErrors(a, r), !1;
                    $.ajax({
                        type: "POST",
                        url: "https://" + window.tildaForm.endpoint + "/payment/banktransfer/",
                        data: a.serialize(),
                        dataType: "json",
                        xhrFields: { withCredentials: !1 },
                        success: function(r) {
                            if ($("body").removeClass("t-body_popupshowed"), a.closest(".t-banktransfer").remove(), r || (r = { error: "Unknown error. Please reload page and try again later." }), r && r.error) return alert(r.error), !1;
                            window.tildaForm.sendStatAndShowMessage(t, e, !0)
                        },
                        error: function(t) { $("body").removeClass("t-body_popupshowed"), a.remove(), alert(t) },
                        timeout: 15e3
                    })
                }))
            } else window.tildaForm.sendStatAndShowMessage(t, e, !0)
        }, window.tildaForm.closeSuccessPopup = function() {
            var t = $("#tildaformsuccesspopup");
            t.length > 0 && ($("body").removeClass("t-body_success-popup-showed"), /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.tildaForm.unlockBodyScroll(), t.fadeOut("fast"))
        }, window.tildaForm.lockBodyScroll = function() {
            var t = $("body");
            if (!t.hasClass("t-body_scroll-locked")) {
                var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                t.addClass("t-body_scroll-locked"), t.css("top", "-" + e + "px"), t.attr("data-popup-scrolltop", e)
            }
        }, window.tildaForm.unlockBodyScroll = function() {
            var t = $("body");
            if (t.hasClass("t-body_scroll-locked")) {
                var e = $("body").attr("data-popup-scrolltop");
                t.removeClass("t-body_scroll-locked"), t.css("top", ""), t.removeAttr("data-popup-scrolltop"), window.scrollTo(0, e)
            }
        }, window.tildaForm.showSuccessPopup = function(t) {
            var e = "",
                r = $("#tildaformsuccesspopup");
            0 == r.length && (e = '<style media="screen"> .t-form-success-popup { display: none; position: fixed; background-color: rgba(0,0,0,.8); top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000; overflow-y: auto; cursor: pointer; } .t-body_success-popup-showed { height: 100vh; min-height: 100vh; overflow: hidden; } .t-form-success-popup__window { width: 100%; max-width: 400px; position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; right: 0px; margin: 0 auto; padding: 20px; box-sizing: border-box; } .t-form-success-popup__wrapper { background-color: #fff; padding: 40px 40px 50px; box-sizing: border-box; border-radius: 5px; text-align: center; position: relative; cursor: default; } .t-form-success-popup__text { padding-top: 20px; } .t-form-success-popup__close-icon { position: absolute; top: 14px; right: 14px; cursor: pointer; } @media screen and (max-width: 480px) { .t-form-success-popup__text { padding-top: 10px; } .t-form-success-popup__wrapper { padding-left: 20px; padding-right: 20px; } } </style>', e += '<div class="t-form-success-popup" style="display:none;" id="tildaformsuccesspopup"> <div class="t-form-success-popup__window"> <div class="t-form-success-popup__wrapper"> <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="t657__icon-close" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"/> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"/> </g> </svg> <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"/> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"/> </svg> <div class="t-form-success-popup__text t-descr t-descr_sm" id="tildaformsuccesspopuptext"> Thank You! </div> </div> </div> </div>', $("body").append(e), r = $("#tildaformsuccesspopup"), r.click(function(t) { t.target == this && window.tildaForm.closeSuccessPopup() }), r.find(".t-form-success-popup__close-icon").click(function(t) { window.tildaForm.closeSuccessPopup() }), $(document).keydown(function(t) { 27 == t.keyCode && window.tildaForm.closeSuccessPopup() })), $("#tildaformsuccesspopuptext").html(t), r.fadeIn("fast"), $("body").addClass("t-body_success-popup-showed"), /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && setTimeout(function() { window.tildaForm.lockBodyScroll() }, 500)
        }, window.tildaForm.successEnd = function($jform, successurl, successcallback) {
            if ($jform.find(".js-successbox").length > 0) {
                if ("" == $jform.find(".js-successbox").text()) {
                    var arMessage = window.tildaForm.arMessages[window.tildaBrowserLang] || {};
                    arMessage.success && $jform.find(".js-successbox").html(arMessage.success)
                }
                "y" == $jform.data("success-popup") ? window.tildaForm.showSuccessPopup($jform.find(".js-successbox").html()) : $jform.find(".js-successbox").show()
            }
            $jform.addClass("js-send-form-success"), successcallback && successcallback.length > 0 ? eval(successcallback + "($jform)") : successurl && successurl.length > 0 && setTimeout(function() { window.location.href = successurl }, 500), tildaForm.clearTCart($jform), $jform.find(".t-upwidget-container__data_table_actions_remove svg").click(), $jform.find("input[type=text]:visible").val(""), $jform.find("input[type=tel]:visible").val(""), $jform.find("textarea:visible").html(""), $jform.find("textarea:visible").val(""), $jform.data("tildaformresult", { tranid: "0", orderid: "0" })
        }, window.tildaForm.send = function($jform, btnformsubmit, formtype, formskey) {
            if (window.tildaForm.tildapayment = !1, ("y" == $jform.data("formcart") || $jform.closest(".t706__orderform").length > 0) && window.tildaForm.addPaymentInfoToForm($jform), 2 == formtype || !formtype && formskey > "") {
                var $inputElem;
                $inputElem = $jform.find("input[name=tildaspec-cookie]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-cookie" value="">'), $inputElem = $jform.find("input[name=tildaspec-cookie]")), $inputElem.length > 0 && $inputElem.val(document.cookie), $inputElem = $jform.find("input[name=tildaspec-referer]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-referer" value="">'), $inputElem = $jform.find("input[name=tildaspec-referer]")), $inputElem.length > 0 && $inputElem.val(window.location.href), $inputElem = $jform.find("input[name=tildaspec-formid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-formid" value="">'), $inputElem = $jform.find("input[name=tildaspec-formid]")), $inputElem.length > 0 && $inputElem.val($jform.attr("id")), formskey > "" && ($inputElem = $jform.find("input[name=tildaspec-formskey]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-formskey" value="">'), $inputElem = $jform.find("input[name=tildaspec-formskey]")), $inputElem.length > 0 && $inputElem.val(formskey)), $inputElem = $jform.find("input[name=tildaspec-version-lib]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-version-lib" value="">'), $inputElem = $jform.find("input[name=tildaspec-version-lib]")), $inputElem.length > 0 && $inputElem.val(window.tildaForm.versionLib), $inputElem = $jform.find("input[name=tildaspec-pageid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-pageid" value="">'), $inputElem = $jform.find("input[name=tildaspec-pageid]")), $inputElem.length > 0 && $inputElem.val($("#allrecords").data("tilda-page-id")), $inputElem = $jform.find("input[name=tildaspec-projectid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-projectid" value="">'), $inputElem = $jform.find("input[name=tildaspec-projectid]")), $inputElem.length > 0 && $inputElem.val($("#allrecords").data("tilda-project-id")), $jform.find(".js-form-spec-comments").val(""), $formurl = "https://" + window.tildaForm.endpoint + "/procces/";
                var d = {};
                if (d = $jform.serializeArray(), d = d.filter(function(t) { return -1 === t.name.indexOf("tildadelivery-") }), window.tildaForm.tildapayment && window.tildaForm.tildapayment.products) d.push({ name: "tildapayment", value: JSON.stringify(window.tildaForm.tildapayment) });
                else if ($jform.closest(".t706__orderform").length > 0) return !1;
                var tsstartrequest = Date.now();
                return $.ajax({
                    type: "POST",
                    url: $formurl,
                    data: d,
                    dataType: "json",
                    xhrFields: { withCredentials: !1 },
                    success: function(json) {
                        var successurl = $jform.data("success-url"),
                            successcallback = $jform.data("success-callback"),
                            formsendedcallback = $jform.data("formsended-callback");
                        if (btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", ""), json && json.error) {
                            successurl = "", successcallback = "";
                            var $errBox = $jform.find(".js-errorbox-all");
                            $errBox && 0 != $errBox.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), $errBox = $jform.find(".js-errorbox-all"));
                            var $allError = $errBox.find(".js-rule-error-all");
                            $allError && 0 != $allError.length || ($errBox.append('<p class="js-rule-error-all">' + json.error + "</p>"), $allError = $errBox.find(".js-rule-error-all")), $allError.html(json.error).show(), $errBox.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                        } else {
                            if (json && json.needcaptcha) return formskey ? void tildaForm.addTildaCaptcha($jform, formskey) : void alert("Server busy. Please try again later.");
                            var formres = {};
                            if (json && json.results && json.results[0]) {
                                var str = json.results[0];
                                str = str.split(":"), formres.tranid = str[0] + ":" + str[1], formres.orderid = str[2] ? str[2] : "0", formres.orderid > "" && "0" != formres.orderid && (window.tildaForm.orderIdForStat = formres.orderid)
                            } else formres.tranid = "0", formres.orderid = "0";
                            $jform.data("tildaformresult", formres);
                            var virtPage = $jform.data("tilda-event-name") || "";
                            virtPage && "" != virtPage || (virtPage = "y" == $jform.data("formcart") && json && (json.next && json.next.type && ("function" != json.next.type || json.next.value && ("stripev3" == json.next.value.sysname || "outersite" == json.next.value.installation)) || !json.next) ? "/tilda/" + $jform.attr("id") + "/payment/" : "/tilda/" + $jform.attr("id") + "/submitted/");
                            var virtTitle = "Send data from form " + $jform.attr("id"),
                                virtPrice = 0,
                                virtProduct = "";
                            if (window.Tilda && "function" == typeof Tilda.sendEventToStatistics) {
                                window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount ? (virtPrice = window.tildaForm.tildapayment.amount, parseFloat(window.tildaForm.tildapayment.amount) > 0 && (virtTitle = "Order " + formres.orderid)) : $jform.find(".js-tilda-price").length > 0 && (virtPrice = $jform.find(".js-tilda-price").val(), parseFloat(virtPrice) > 0 && (virtTitle = "Order " + formres.orderid));
                                try { Tilda.sendEventToStatistics(virtPage, virtTitle, virtProduct, virtPrice) } catch (t) { console.log(t) }
                                window.dataLayer && window.dataLayer.push({ event: "submit_" + $jform.attr("id") })
                            } else {
                                try { "undefined" != typeof ga && ga && "tilda" != window.mainTracker && ga("send", { hitType: "pageview", page: virtPage, title: virtTitle }), window.mainMetrika > "" && window[window.mainMetrika] && window[window.mainMetrika].hit(virtPage, { title: virtTitle, referer: window.location.href }) } catch (t) { console.log(t) }
                                window.dataLayer && window.dataLayer.push({ event: "submit_" + $jform.attr("id") })
                            }
                            try { $jform.trigger("tildaform:aftersuccess"), formsendedcallback && formsendedcallback.length > 0 && eval(formsendedcallback + "($jform);") } catch (t) { console.log(t) }
                            if (json && json.next && json.next.type > "") { var res = window.tildaForm.payment($jform, json.next); return successurl = "", !1 }
                            window.tildaForm.successEnd($jform, successurl, successcallback)
                        }
                    },
                    error: function(t) {
                        var e = Date.now() - tsstartrequest;
                        btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", "");
                        var r = $jform.find(".js-errorbox-all");
                        r && 0 != r.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), r = $jform.find(".js-errorbox-all"));
                        var a = r.find(".js-rule-error-all");
                        if (a && 0 != a.length || (r.append('<p class="js-rule-error-all"></p>'), a = r.find(".js-rule-error-all")), !t || 0 == t.status && e < 100) a.html("Request error (opening block content panel). Please check internet connection...");
                        else {
                            if (t && (t.status >= 500 || 408 == t.status || 410 == t.status || 429 == t.status || "timeout" == t.statusText) && -1 !== window.tildaForm.endpoint.indexOf("forms.tilda")) return window.tildaForm.endpoint = "forms2.tildacdn.com", window.tildaForm.send($jform, btnformsubmit, formtype, formskey), !1;
                            t && t.responseText > "" ? a.html(t.responseText + ". Please, try again later.") : t && t.statusText ? a.html("Error [" + t.statusText + "]. Please, try again later.") : a.html("Unknown error. Please, try again later.")
                        }
                        a.show(), r.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                    },
                    timeout: 15e3
                }), !1
            }
            if ("y" == $jform.data("is-formajax")) {
                var d = {};
                return d = $jform.serializeArray(), window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount && d.push({ name: "tildapayment", value: JSON.stringify(window.tildaForm.tildapayment) }), $.ajax({
                    type: "POST",
                    url: $jform.attr("action"),
                    data: d,
                    dataType: "text",
                    xhrFields: { withCredentials: !1 },
                    success: function(t) {
                        var e, r = $jform.data("success-url"),
                            a = $jform.data("success-callback");
                        if (btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", ""), t && t.length > 0)
                            if ("{" == t.substring(0, 1)) {
                                if (e = window.JSON && window.JSON.parse ? window.JSON.parse(t) : $.parseJSON(t), e && e.message) "OK" != e.message && $jform.find(".js-successbox").html(e.message);
                                else if (e && e.error) {
                                    var o = $jform.find(".js-errorbox-all");
                                    o && 0 != o.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), o = $jform.find(".js-errorbox-all"));
                                    var i = o.find(".js-rule-error-all");
                                    return i && 0 != i.length || (o.append('<p class="js-rule-error-all">Unknown error. Please, try again later.</p>'), i = o.find(".js-rule-error-all")), i.html(e.error), i.show(), o.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror"), !1
                                }
                            } else $jform.find(".js-successbox").html(t);
                        var n = "/tilda/" + $jform.attr("id") + "/submitted/",
                            s = "Send data from form " + $jform.attr("id");
                        window.Tilda && "function" == typeof Tilda.sendEventToStatistics ? window.Tilda.sendEventToStatistics(n, s, "", 0) : ("undefined" != typeof ga && "tilda" != window.mainTracker && ga("send", { hitType: "pageview", page: n, title: s }), window.mainMetrika > "" && window[window.mainMetrika] && window[window.mainMetrika].hit(n, { title: s, referer: window.location.href })), $jform.trigger("tildaform:aftersuccess"), window.tildaForm.successEnd($jform, r, a)
                    },
                    error: function(t) {
                        btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", "");
                        var e = $jform.find(".js-errorbox-all");
                        e && 0 != e.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), e = $jform.find(".js-errorbox-all"));
                        var r = e.find(".js-rule-error-all");
                        r && 0 != r.length || (e.append('<p class="js-rule-error-all"></p>'), r = e.find(".js-rule-error-all")), t && t.responseText > "" ? r.html(t.responseText + ". Please, try again later.") : t && t.statusText ? r.html("Error [" + t.statusText + "]. Please, try again later.") : r.html("Unknown error. Please, try again later."), r.show(), e.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                    },
                    timeout: 15e3
                }), !1
            }
            var attraction = $jform.attr("action");
            return -1 == attraction.indexOf(window.tildaForm.endpoint) && (btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "3"), $jform.submit(), !0)
        }, $(".js-tilda-captcha").each(function() {
            if ($(this).attr("data-tilda-captchakey") > "") {
                !1 === window.tildaForm.isRecaptchaScriptInit && (window.tildaForm.isRecaptchaScriptInit = !0, $("head").append('<script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>'), $("head").append('<style type="text/css">.js-send-form-success .grecaptcha-badge {display: none;}</style>'));
                var t = $(this).attr("id");
                0 == $("#" + t + "recaptcha").length && $(this).append('<div id="' + t + 'recaptcha" class="g-recaptcha" data-sitekey="' + $(this).attr("data-tilda-captchakey") + '" data-callback="window.tildaForm.captchaCallback" data-size="invisible"></div>')
            } else $(this).removeClass("js-tilda-captcha")
        }), window.tildaForm_initMasks = function() {
            $(".js-tilda-mask").each(function() {
                var t = $(this).data("tilda-mask"),
                    e = $(this).data("tilda-mask-holder");
                t && !$(this).data("tilda-mask-init") && (e && e > "" ? $(this).mask("" + t, { placeholder: "" + e }) : $(this).mask("" + t), $(this).data("tilda-mask-init", "1"))
            })
        }, window.tildaForm_initMasks(), $(".r").off("focus", ".js-tilda-rule"), $(".r").on("focus", ".js-tilda-rule", function() {
            var t = $(this).attr("placeholder");
            t && t.length > 0 && ($(this).data("placeholder", t), $(this).attr("placeholder", ""))
        }), $(".r").off("blur", ".js-tilda-rule"), $(".r").on("blur", ".js-tilda-rule", function() {
            var t = $(this).data("placeholder");
            t > "" && ($(this).attr("placeholder", t), $(this).data("placeholder", ""))
        }), window.validateForm = function(t) { return window.tildaForm.validate(t) };
        var $jallforms = $(".r").find(".js-form-proccess[data-formactiontype]");
        $jallforms.length > 0 && $jallforms.each(function() { 1 != $(this).data("formactiontype") && $(this).append('<div style="position: absolute; left: -5000px; bottom:0;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments"  tabindex="-1" /></div>') }), $(".r").find(".js-form-procces").each(function() {
            try {
                var t = $(this).data("formactiontype");
                2 == t && $(this).attr("action", "#")
            } catch (t) { console.log(t) }
        }), $(".r").off("submit", ".js-form-proccess"), $(".r").on("submit", ".js-form-proccess", function(t) {
            var e = $(this).find("[type=submit]"),
                r = e.data("form-sending-status");
            return r && 3 == r ? (e.data("form-sending-status", ""), !0) : ($(this).find("[type=submit]").hasClass("t706__submit_disable") || $(this).find("[type=submit]").trigger("click"), !1)
        }), $(".r").on("dblclick", ".js-form-proccess [type=submit]", function(t) { return t.preventDefault(), !1 }), $(".r").off("click", ".js-form-proccess [type=submit]"), $(".r").on("click", ".js-form-proccess [type=submit]", function(t) {
            t.preventDefault();
            var e = $(this),
                r = e.data("form-sending-status");
            if (r >= "1") return !1;
            if ($(this).hasClass("t706__submit_disable")) return !1;
            var a = $(this).closest("form"),
                o = !1;
            if (0 == a.length) return !1;
            if (e.addClass("t-btn_sending"), e.data("form-sending-status", "1"), e.data("submitform", a), window.tildaForm.hideErrors(a), o = window.tildaForm.validate(a), window.tildaForm.showErrors(a, o)) return e.removeClass("t-btn_sending"), e.data("form-sending-status", "0"), e.data("submitform", ""), !1;
            var i = a.data("formactiontype"),
                n = $("#allrecords").data("tilda-formskey");
            if (0 == a.find(".js-formaction-services").length && 1 != i && "" == n) {
                var s = a.find(".js-errorbox-all");
                s && 0 != s.length || (a.prepend('<div class="js-errorbox-all"></div>'), s = a.find(".js-errorbox-all"));
                var d = s.find(".js-rule-error-all");
                return d && 0 != d.length || (s.append('<p class="js-rule-error-all">' + json.error + "</p>"), d = s.find(".js-rule-error-all")), d.html("Please set receiver in block with forms").show(), s.show(), a.addClass("js-send-form-error"), e.removeClass("t-btn_sending"), e.data("form-sending-status", "0"), e.data("submitform", ""), a.trigger("tildaform:aftererror"), !1
            }
            if (a.find(".g-recaptcha").length > 0 && grecaptcha) {
                window.tildaForm.currentFormProccessing = { form: a, btn: e, formtype: i, formskey: n };
                var l = a.data("tilda-captcha-clientid");
                if (void 0 === l || "" === l) {
                    var c = { size: "invisible", sitekey: a.data("tilda-captchakey"), callback: window.tildaForm.captchaCallback };
                    l = grecaptcha.render(a.attr("id") + "recaptcha", c), a.data("tilda-captcha-clientid", l)
                } else grecaptcha.reset(l);
                return grecaptcha.execute(l), !1
            }
            return window.tildaForm.send(a, e, i, n), !1
        });
        try {
            var TILDAPAGE_URL = window.location.href,
                TILDAPAGE_QUERY = "",
                TILDAPAGE_UTM = "";
            if (-1 !== TILDAPAGE_URL.toLowerCase().indexOf("utm_") && (TILDAPAGE_URL = TILDAPAGE_URL.toLowerCase(), TILDAPAGE_QUERY = TILDAPAGE_URL.split("?"), TILDAPAGE_QUERY = TILDAPAGE_QUERY[1], "string" == typeof TILDAPAGE_QUERY)) {
                var arPair, i, arParams = TILDAPAGE_QUERY.split("&");
                for (i in arParams) "function" != typeof arParams[i] && (arPair = arParams[i].split("="), "utm_" == arPair[0].substring(0, 4) && (TILDAPAGE_UTM = TILDAPAGE_UTM + arParams[i] + "|||"));
                if (TILDAPAGE_UTM.length > 0) {
                    var date = new Date;
                    date.setDate(date.getDate() + 30), document.cookie = "TILDAUTM=" + encodeURIComponent(TILDAPAGE_UTM) + "; path=/; expires=" + date.toUTCString()
                }
            }
        } catch (t) {}
    })
}(jQuery);