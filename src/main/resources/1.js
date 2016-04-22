function(e) {
    function t(e) {
        var t = !!e && "length" in e && e.length,
        n = de.type(e);
        return "function" === n || de.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function n(e, t, n) {
        if (de.isFunction(t)) return de.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return de.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Te.test(t)) return de.filter(t, e, n);
            t = de.filter(t, e)
        }
        return de.grep(e,
        function(e) {
            return de.inArray(e, t) > -1 !== n
        })
    }
    function r(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function i(e) {
        var t = {};
        return de.each(e.match(Ae) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o() {
        ne.addEventListener ? (ne.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ne.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }
    function a() { (ne.addEventListener || "load" === e.event.type || "complete" === ne.readyState) && (o(), de.ready())
    }
    function s(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(qe, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: He.test(n) ? de.parseJSON(n) : n
                } catch(i) {}
                de.data(e, t, n)
            } else n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e) if (("data" !== t || !de.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function l(e, t, n, r) {
        if (Le(e)) {
            var i, o, a = de.expando,
            s = e.nodeType,
            u = s ? de.cache: e,
            l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = te.pop() || de.guid++:a),
            u[l] || (u[l] = s ? {}: {
                toJSON: de.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (r ? u[l] = de.extend(u[l], t) : u[l].data = de.extend(u[l].data, t)),
            o = u[l],
            r || (o.data || (o.data = {}), o = o.data),
            void 0 !== n && (o[de.camelCase(t)] = n),
            "string" == typeof t ? (i = o[t], null == i && (i = o[de.camelCase(t)])) : i = o,
            i
        }
    }
    function c(e, t, n) {
        if (Le(e)) {
            var r, i, o = e.nodeType,
            a = o ? de.cache: e,
            s = o ? e[de.expando] : de.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in r ? t = [t] : (t = de.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !de.isEmptyObject(r)) return
                } (n || (delete a[s].data, u(a[s]))) && (o ? de.cleanData([e], !0) : ce.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(e, t, n, r) {
        var i, o = 1,
        a = 20,
        s = r ?
        function() {
            return r.cur()
        }: function() {
            return de.css(e, t, "")
        },
        u = s(),
        l = n && n[3] || (de.cssNumber[t] ? "": "px"),
        c = (de.cssNumber[t] || "px" !== l && +u) && _e.exec(de.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do o = o || ".5",
            c /= o,
            de.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
        i
    }
    function d(e) {
        var t = Ie.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function p(e, t) {
        var n, r, i = 0,
        o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) ! t || de.nodeName(r, t) ? o.push(r) : de.merge(o, p(r, t));
        return void 0 === t || t && de.nodeName(e, t) ? de.merge([e], o) : o
    }
    function h(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) de._data(n, "globalEval", !t || de._data(t[r], "globalEval"))
    }
    function g(e) {
        Pe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function m(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, m = e.length,
        v = d(t), y = [], x = 0; m > x; x++) if (a = e[x], a || 0 === a) if ("object" === de.type(a)) de.merge(y, a.nodeType ? [a] : a);
        else if (Xe.test(a)) {
            for (u = u || v.appendChild(t.createElement("div")), l = (Be.exec(a) || ["", ""])[1].toLowerCase(), f = ze[l] || ze._default, u.innerHTML = f[1] + de.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!ce.leadingWhitespace && $e.test(a) && y.push(t.createTextNode($e.exec(a)[0])), !ce.tbody) for (a = "table" !== l || Ue.test(a) ? "<table>" !== f[1] || Ue.test(a) ? 0 : u: u.firstChild, o = a && a.childNodes.length; o--;) de.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (de.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(t.createTextNode(a));
        for (u && v.removeChild(u), ce.appendChecked || de.grep(p(y, "input"), g), x = 0; a = y[x++];) if (r && de.inArray(a, r) > -1) i && i.push(a);
        else if (s = de.contains(a.ownerDocument, a), u = p(v.appendChild(a), "script"), s && h(u), n) for (o = 0; a = u[o++];) We.test(a.type || "") && n.push(a);
        return u = null,
        v
    }
    function v() {
        return ! 0
    }
    function y() {
        return ! 1
    }
    function x() {
        try {
            return ne.activeElement
        } catch(e) {}
    }
    function b(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) b(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = y;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return de().off(e),
            a.apply(this, arguments)
        },
        i.guid = a.guid || (a.guid = de.guid++)),
        e.each(function() {
            de.event.add(this, t, i, r, n)
        })
    }
    function w(e, t) {
        return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function T(e) {
        return e.type = (null !== de.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function C(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function E(e, t) {
        if (1 === t.nodeType && de.hasData(e)) {
            var n, r, i, o = de._data(e),
            a = de._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) de.event.add(t, n, s[n][r])
            }
            a.data && (a.data = de.extend({},
            a.data))
        }
    }
    function N(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ce.noCloneEvent && t[de.expando]) {
                i = de._data(t);
                for (r in i.events) de.removeEvent(t, r, i.handle);
                t.removeAttribute(de.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function k(e, t, n, r) {
        t = ie.apply([], t);
        var i, o, a, s, u, l, c = 0,
        f = e.length,
        d = f - 1,
        h = t[0],
        g = de.isFunction(h);
        if (g || f > 1 && "string" == typeof h && !ce.checkClone && nt.test(h)) return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())),
            k(o, t, n, r)
        });
        if (f && (l = m(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = de.map(p(l, "script"), T), a = s.length; f > c; c++) o = l,
            c !== d && (o = de.clone(o, !0, !0), a && de.merge(s, p(o, "script"))),
            n.call(e[c], o, c);
            if (a) for (u = s[s.length - 1].ownerDocument, de.map(s, C), c = 0; a > c; c++) o = s[c],
            We.test(o.type || "") && !de._data(o, "globalEval") && de.contains(u, o) && (o.src ? de._evalUrl && de._evalUrl(o.src) : de.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
            l = i = null
        }
        return e
    }
    function S(e, t, n) {
        for (var r, i = t ? de.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || de.cleanData(p(r)),
        r.parentNode && (n && de.contains(r.ownerDocument, r) && h(p(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function A(e, t) {
        var n = de(t.createElement(e)).appendTo(t.body),
        r = de.css(n[0], "display");
        return n.detach(),
        r
    }
    function D(e) {
        var t = ne,
        n = ut[e];
        return n || (n = A(e, t), "none" !== n && n || (st = (st || de("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = A(e, t), st.detach()), ut[e] = n),
        n
    }
    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function L(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;) if (e = Tt[n] + t, e in Ct) return e
    }
    function H(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (o[a] = de._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Oe(r) && (o[a] = de._data(r, "olddisplay", D(r.nodeName)))) : (i = Oe(r), (n && "none" !== n || !i) && de._data(r, "olddisplay", i ? n: de.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
        return e
    }
    function q(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function M(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += de.css(e, n + Fe[o], !0, i)),
        r ? ("content" === n && (a -= de.css(e, "padding" + Fe[o], !0, i)), "margin" !== n && (a -= de.css(e, "border" + Fe[o] + "Width", !0, i))) : (a += de.css(e, "padding" + Fe[o], !0, i), "padding" !== n && (a += de.css(e, "border" + Fe[o] + "Width", !0, i)));
        return a
    }
    function _(t, n, r) {
        var i = !0,
        o = "width" === n ? t.offsetWidth: t.offsetHeight,
        a = pt(t),
        s = ce.boxSizing && "border-box" === de.css(t, "boxSizing", !1, a);
        if (ne.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = ht(t, n, a), (0 > o || null == o) && (o = t.style[n]), ct.test(o)) return o;
            i = s && (ce.boxSizingReliable() || o === t.style[n]),
            o = parseFloat(o) || 0
        }
        return o + M(t, n, r || (s ? "border": "content"), i, a) + "px"
    }
    function F(e, t, n, r, i) {
        return new F.prototype.init(e, t, n, r, i)
    }
    function O() {
        return e.setTimeout(function() {
            Et = void 0
        }),
        Et = de.now()
    }
    function R(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Fe[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function P(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function B(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
        d = {},
        p = e.style,
        h = e.nodeType && Oe(e),
        g = de._data(e, "fxshow");
        n.queue || (s = de._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--,
                de.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = de.css(e, "display"), c = "none" === l ? de._data(e, "olddisplay") || D(e.nodeName) : l, "inline" === c && "none" === de.css(e, "float") && (ce.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", ce.shrinkWrapBlocks() || f.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], kt.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide": "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                h = !0
            }
            d[r] = g && g[r] || de.style(e, r)
        } else l = void 0;
        if (de.isEmptyObject(d))"inline" === ("none" === l ? D(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = de._data(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? de(e).show() : f.done(function() {
                de(e).hide()
            }),
            f.done(function() {
                var t;
                de._removeData(e, "fxshow");
                for (t in d) de.style(e, t, d[t])
            });
            for (r in d) a = P(h ? g[r] : 0, r, f),
            r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = de.camelCase(n), i = t[r], o = e[n], de.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = de.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function $(e, t, n) {
        var r, i, o = 0,
        a = $.prefilters.length,
        s = de.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Et || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: de.extend({},
            t),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Et || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (W(c, l.opts.specialEasing); a > o; o++) if (r = $.prefilters[o].call(l, e, c, l.opts)) return de.isFunction(r.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(r.stop, r)),
        r;
        return de.map(c, P, l),
        de.isFunction(l.opts.start) && l.opts.start.call(e, l),
        de.fx.timer(de.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function I(e) {
        return de.attr(e, "class") || ""
    }
    function z(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(Ae) || [];
            if (de.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function X(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            de.each(e[s] || [],
            function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }),
            u
        }
        var o = {},
        a = e === Yt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function U(e, t) {
        var n, r, i = de.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e: n || (n = {}))[r] = t[r]);
        return n && de.extend(!0, e, n),
        e
    }
    function V(e, t, n) {
        for (var r, i, o, a, s = e.contents,
        u = e.dataTypes;
        "*" === u[0];) u.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in s) if (s[a] && s[a].test(i)) {
            u.unshift(a);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function J(e, t, n, r) {
        var i, o, a, s, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                t = a(t)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: a ? f: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function Q(e) {
        return e.style && e.style.display || de.css(e, "display")
    }
    function Y(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === Q(e) || "hidden" === e.type) return ! 0;
            e = e.parentNode
        }
        return ! 1
    }
    function G(e, t, n, r) {
        var i;
        if (de.isArray(t)) de.each(t,
        function(t, i) {
            n || tn.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== de.type(t)) r(e, t);
        else for (i in t) G(e + "[" + i + "]", t[i], n, r)
    }
    function K() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function Z() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function ee(e) {
        return de.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var te = [],
    ne = e.document,
    re = te.slice,
    ie = te.concat,
    oe = te.push,
    ae = te.indexOf,
    se = {},
    ue = se.toString,
    le = se.hasOwnProperty,
    ce = {},
    fe = "1.12.1",
    de = function(e, t) {
        return new de.fn.init(e, t)
    },
    pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    he = /^-ms-/,
    ge = /-([\da-z])/gi,
    me = function(e, t) {
        return t.toUpperCase()
    };
    de.fn = de.prototype = {
        jquery: fe,
        constructor: de,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(e) {
            return this.pushStack(de.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: te.sort,
        splice: te.splice
    },
    de.extend = de.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {},
        s++), "object" == typeof a || de.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r],
        n = i[r],
        a !== n && (l && n && (de.isPlainObject(n) || (t = de.isArray(n))) ? (t ? (t = !1, o = e && de.isArray(e) ? e: []) : o = e && de.isPlainObject(e) ? e: {},
        a[r] = de.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    },
    de.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === de.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === de.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return ! de.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (!ce.ownFirst) for (t in e) return le.call(e, t);
            for (t in e);
            return void 0 === t || le.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object": typeof e
        },
        globalEval: function(t) {
            t && de.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(he, "ms-").replace(ge, me)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n) {
            var r, i = 0;
            if (t(e)) for (r = e.length; r > i && n.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(pe, "")
        },
        makeArray: function(e, n) {
            var r = n || [];
            return null != e && (t(Object(e)) ? de.merge(r, "string" == typeof e ? [e] : e) : oe.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o),
            r !== s && i.push(e[o]);
            return i
        },
        map: function(e, n, r) {
            var i, o, a = 0,
            s = [];
            if (t(e)) for (i = e.length; i > a; a++) o = n(e[a], a, r),
            null != o && s.push(o);
            else for (a in e) o = n(e[a], a, r),
            null != o && s.push(o);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i),
            de.isFunction(e) ? (n = re.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(re.call(arguments)))
            },
            r.guid = e.guid = e.guid || de.guid++, r) : void 0
        },
        now: function() {
            return + new Date
        },
        support: ce
    }),
    "function" == typeof Symbol && (de.fn[Symbol.iterator] = te[Symbol.iterator]),
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, f, p, h = t && t.ownerDocument,
            g = t ? t.nodeType: 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t: B) !== H && L(t), t = t || H, M)) {
                if (11 !== g && (l = ve.exec(e))) if (i = l[1]) {
                    if (9 === g) {
                        if (! (a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a),
                        n
                    } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a),
                    n
                } else {
                    if (l[2]) return K.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)),
                    n
                }
                if (w.qsa && !X[e + " "] && (!_ || !_.test(e))) {
                    if (1 !== g) h = t,
                    p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), f = N(e), o = f.length, u = de.test(s) ? "#" + s: "[id='" + s + "']"; o--;) f[o] = u + " " + d(f[o]);
                        p = f.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)),
                        n
                    } catch(m) {} finally {
                        s === P && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[P] = !0,
            e
        }
        function i(e) {
            var t = H.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function d(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = $++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = [W, o];
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
                    if (u[r] = c, c[2] = e(t, n, a)) return ! 0
                }
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, n, r) {
            for (var i = 0,
            o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)),
            o && !o[P] && (o = v(o, a)),
            r(function(r, a, s, u) {
                var l, c, f, d = [],
                p = [],
                h = a.length,
                v = r || g(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !r && t ? v: m(v, d, e, s, u),
                x = n ? o || (r ? e: h || i) ? [] : a: y;
                if (n && n(y, x, s, u), i) for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = m(x === a ? x.splice(h, x.length) : x),
                o ? o(null, a, x, u) : K.apply(a, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t
            },
            a, !0), l = p(function(e) {
                return ee(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }]; i > s; s++) if (n = T.relative[e[s].type]) c = [p(h(c), n)];
            else {
                if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                    return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0,
            o = e.length > 0,
            a = function(r, a, s, u, l) {
                var c, f, d, p = 0,
                h = "0",
                g = r && [],
                v = [],
                y = A,
                x = r || o && T.find.TAG("*", l),
                b = W += null == y ? 1 : Math.random() || .1,
                w = x.length;
                for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === H || (L(c), s = !M); d = e[f++];) if (d(c, a || H, s)) {
                            u.push(c);
                            break
                        }
                        l && (W = b)
                    }
                    i && ((c = !d && c) && p--, r && g.push(c))
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++];) d(g, v, a, s);
                    if (r) {
                        if (p > 0) for (; h--;) g[h] || v[h] || (v[h] = Y.call(u));
                        v = m(v)
                    }
                    K.apply(u, v),
                    l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b, A = y),
                g
            };
            return i ? r(a) : a
        }
        var b, w, T, C, E, N, k, S, A, D, j, L, H, q, M, _, F, O, R, P = "sizzle" + 1 * new Date,
        B = e.document,
        W = 0,
        $ = 0,
        I = n(),
        z = n(),
        X = n(),
        U = function(e, t) {
            return e === t && (j = !0),
            0
        },
        V = 1 << 31,
        J = {}.hasOwnProperty,
        Q = [],
        Y = Q.pop,
        G = Q.push,
        K = Q.push,
        Z = Q.slice,
        ee = function(e, t) {
            for (var n = 0,
            r = e.length; r > n; n++) if (e[n] === t) return n;
            return - 1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
        oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        ae = new RegExp(ne + "+", "g"),
        se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        ue = new RegExp("^" + ne + "*," + ne + "*"),
        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        fe = new RegExp(oe),
        de = new RegExp("^" + re + "$"),
        pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        he = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        xe = /'|\\/g,
        be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        we = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        Te = function() {
            L()
        };
        try {
            K.apply(Q = Z.call(B.childNodes), B.childNodes),
            Q[B.childNodes.length].nodeType
        } catch(Ce) {
            K = {
                apply: Q.length ?
                function(e, t) {
                    G.apply(e, Z.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e: B;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, M = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(H.createComment("")),
                !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function(e) {
                return q.appendChild(e).id = P,
                !H.getElementsByName || !H.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            },
            T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            T.find.CLASS = w.getElementsByClassName &&
            function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
            },
            F = [], _ = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + P + "-]").length || _.push("~="),
                e.querySelectorAll(":checked").length || _.push(":checked"),
                e.querySelectorAll("a#" + P + "+*").length || _.push(".#.+[+~]")
            }), i(function(e) {
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                _.push(",.*:")
            })), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = O.call(e, "div"),
                O.call(e, "[s!='']:x"),
                F.push("!=", oe)
            }), _ = _.length && new RegExp(_.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            U = t ?
            function(e, t) {
                if (e === t) return j = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return j = !0,
                0;
                var n, r = 0,
                i = e.parentNode,
                o = t.parentNode,
                s = [e],
                u = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
            },
            H) : H
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && M && !X[n + " "] && (!F || !F.test(n)) && (!_ || !_.test(n))) try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return t(n, H, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e),
            R(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
            r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== r ? r: w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        },
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = I[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && I(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !u && !s,
                        x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && y) {
                                for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();) if (1 === d.nodeType && ++x && d === t) {
                                    c[e] = [W, p, x];
                                    break
                                }
                            } else if (y && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1) for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++x || (y && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t)););
                            return x -= i,
                            x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]),
                        e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = k(e.replace(se, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, we),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = M ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
        }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        N = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) { (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                r = !1,
                (i = le.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) ! (i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length: s ? t.error(e) : z(e, u).slice(0)
        },
        k = t.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = X[e + " "];
            if (!o) {
                for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)),
                o.selector = e
            }
            return o
        },
        S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
            f = !r && N(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !T.relative[s = a.type]);) if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r),
                    n;
                    break
                }
            }
            return (l || k(e, f))(r, t, !M, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        },
        w.sortStable = P.split("").sort(U).join("") === P,
        w.detectDuplicates = !!j,
        L(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        t
    } (e);
    de.find = ve,
    de.expr = ve.selectors,
    de.expr[":"] = de.expr.pseudos,
    de.uniqueSort = de.unique = ve.uniqueSort,
    de.text = ve.getText,
    de.isXMLDoc = ve.isXML,
    de.contains = ve.contains;
    var ye = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && de(e).is(n)) break;
            r.push(e)
        }
        return r
    },
    xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    },
    be = de.expr.match.needsContext,
    we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Te = /^.[^:#\[\.,]*$/;
    de.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    de.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; i > t; t++) if (de.contains(r[t], this)) return ! 0
            }));
            for (t = 0; i > t; t++) de.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? de.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !! n(this, "string" == typeof e && be.test(e) ? de(e) : e || [], !1).length
        }
    });
    var Ce, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    Ne = de.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e), !r || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: ne, !0)), we.test(r[1]) && de.isPlainObject(t)) for (r in t) de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (i = ne.getElementById(r[2]), i && i.parentNode) {
                if (i.id !== r[2]) return Ce.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = ne,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(de) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this))
    };
    Ne.prototype = de.fn,
    Ce = de(ne);
    var ke = /^(?:parents|prev(?:Until|All))/,
    Se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t, n = de(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (de.contains(this, n[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = be.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ye(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ye(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return ye(e, "nextSibling")
        },
        prevAll: function(e) {
            return ye(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ye(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ye(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: de.merge([], e.childNodes)
        }
    },
    function(e, t) {
        de.fn[e] = function(n, r) {
            var i = de.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = de.filter(r, i)),
            this.length > 1 && (Se[e] || (i = de.uniqueSort(i)), ke.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var Ae = /\S+/g;
    de.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : de.extend({},
        e);
        var t, n, r, o, a = [],
        s = [],
        u = -1,
        l = function() {
            for (o = e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (a = n ? [] : "")
        },
        c = {
            add: function() {
                return a && (n && !t && (u = a.length - 1, s.push(n)),
                function r(t) {
                    de.each(t,
                    function(t, n) {
                        de.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== de.type(n) && r(n)
                    })
                } (arguments), n && !t && l()),
                this
            },
            remove: function() {
                return de.each(arguments,
                function(e, t) {
                    for (var n; (n = de.inArray(t, a, n)) > -1;) a.splice(n, 1),
                    u >= n && u--
                }),
                this
            },
            has: function(e) {
                return e ? de.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return ! a
            },
            lock: function() {
                return o = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !! o
            },
            fireWith: function(e, n) {
                return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return c
    },
    de.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", de.Callbacks("once memory"), "resolved"], ["reject", "fail", de.Callbacks("once memory"), "rejected"], ["notify", "progress", de.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return de.Deferred(function(n) {
                        de.each(t,
                        function(t, o) {
                            var a = de.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && de.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? de.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            de.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = re.call(arguments),
            a = o.length,
            s = 1 !== a || e && de.isFunction(e.promise) ? a: 0,
            u = 1 === s ? e: de.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? re.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && de.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    });
    var De;
    de.fn.ready = function(e) {
        return de.ready.promise().done(e),
        this
    },
    de.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? de.readyWait++:de.ready(!0)
        },
        ready: function(e) { (e === !0 ? --de.readyWait: de.isReady) || (de.isReady = !0, e !== !0 && --de.readyWait > 0 || (De.resolveWith(ne, [de]), de.fn.triggerHandler && (de(ne).triggerHandler("ready"), de(ne).off("ready"))))
        }
    }),
    de.ready.promise = function(t) {
        if (!De) if (De = de.Deferred(), "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll) e.setTimeout(de.ready);
        else if (ne.addEventListener) ne.addEventListener("DOMContentLoaded", a),
        e.addEventListener("load", a);
        else {
            ne.attachEvent("onreadystatechange", a),
            e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && ne.documentElement
            } catch(r) {}
            n && n.doScroll && !
            function i() {
                if (!de.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(t) {
                        return e.setTimeout(i, 50)
                    }
                    o(),
                    de.ready()
                }
            } ()
        }
        return De.promise(t)
    },
    de.ready.promise();
    var je;
    for (je in de(ce)) break;
    ce.ownFirst = "0" === je,
    ce.inlineBlockNeedsLayout = !1,
    de(function() {
        var e, t, n, r;
        n = ne.getElementsByTagName("body")[0],
        n && n.style && (t = ne.createElement("div"), r = ne.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ce.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function() {
        var e = ne.createElement("div");
        ce.deleteExpando = !0;
        try {
            delete e.test
        } catch(t) {
            ce.deleteExpando = !1
        }
        e = null
    } ();
    var Le = function(e) {
        var t = de.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    },
    He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    qe = /([A-Z])/g;
    de.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return l(e, t, n)
        },
        removeData: function(e, t) {
            return c(e, t)
        },
        _data: function(e, t, n) {
            return l(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return c(e, t, !0)
        }
    }),
    de.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
            a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = de.data(o), 1 === o.nodeType && !de._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = de.camelCase(r.slice(5)), s(o, r, i[r])));
                    de._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                de.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                de.data(this, e, t)
            }) : o ? s(o, e, de.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                de.removeData(this, e)
            })
        }
    }),
    de.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = de._data(e, t), n && (!r || de.isArray(n) ? r = de._data(e, t, de.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = de._queueHooks(e, t),
            a = function() {
                de.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return de._data(e, n) || de._data(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    de._removeData(e, t + "queue"),
                    de._removeData(e, n)
                })
            })
        }
    }),
    de.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = de.queue(this, e, t);
                de._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = de.Deferred(),
            o = this,
            a = this.length,
            s = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = de._data(o[a], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(t)
        }
    }),
    function() {
        var e;
        ce.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ne.getElementsByTagName("body")[0],
            n && n.style ? (t = ne.createElement("div"), r = ne.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ne.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    } ();
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _e = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
    Fe = ["Top", "Right", "Bottom", "Left"],
    Oe = function(e, t) {
        return e = t || e,
        "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e)
    },
    Re = function(e, t, n, r, i, o, a) {
        var s = 0,
        u = e.length,
        l = null == n;
        if ("object" === de.type(n)) {
            i = !0;
            for (s in n) Re(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, de.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(de(e), n)
        })), t)) for (; u > s; s++) t(e[s], n, a ? r: r.call(e[s], s, t(e[s], n)));
        return i ? e: l ? t.call(e) : u ? t(e[0], n) : o
    },
    Pe = /^(?:checkbox|radio)$/i,
    Be = /<([\w:-]+)/,
    We = /^$|\/(?:java|ecma)script/i,
    $e = /^\s+/,
    Ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !
    function() {
        var e = ne.createElement("div"),
        t = ne.createDocumentFragment(),
        n = ne.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ce.leadingWhitespace = 3 === e.firstChild.nodeType,
        ce.tbody = !e.getElementsByTagName("tbody").length,
        ce.htmlSerialize = !!e.getElementsByTagName("link").length,
        ce.html5Clone = "<:nav></:nav>" !== ne.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        ce.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = ne.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ce.noCloneEvent = !!e.addEventListener,
        e[de.expando] = 1,
        ce.attributes = !e.getAttribute(de.expando)
    } ();
    var ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ce.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ze.optgroup = ze.option,
    ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead,
    ze.th = ze.td;
    var Xe = /<|&#?\w+;/,
    Ue = /<tbody/i; !
    function() {
        var t, n, r = ne.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t,
        (ce[t] = n in e) || (r.setAttribute(n, "t"), ce[t] = r.attributes[n].expando === !1);
        r = null
    } ();
    var Ve = /^(?:input|select|textarea)$/i,
    Je = /^key/,
    Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ye = /^(?:focusinfocus|focusoutblur)$/,
    Ge = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = de._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = de.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                    return "undefined" == typeof de || e && de.event.triggered === e.type ? void 0 : de.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = e), t = (t || "").match(Ae) || [""], s = t.length; s--;) o = Ge.exec(t[s]) || [],
                p = g = o[1],
                h = (o[2] || "").split(".").sort(),
                p && (l = de.event.special[p] || {},
                p = (i ? l.delegateType: l.bindType) || p, l = de.event.special[p] || {},
                f = de.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && de.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                },
                u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), de.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = de.hasData(e) && de._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(Ae) || [""], l = t.length; l--;) if (s = Ge.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = de.event.special[p] || {},
                    p = (r ? f.delegateType: f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o],
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || de.removeEvent(e, p, m.handle), delete c[p])
                } else for (p in c) de.event.remove(e, p + t[l], n, r, !0);
                de.isEmptyObject(c) && (delete m.handle, de._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || ne],
            p = le.call(t, "type") ? t.type: t,
            h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !Ye.test(p + de.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[de.expando] ? t: new de.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : de.makeArray(n, [t]), l = de.event.special[p] || {},
            i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !de.isWindow(r)) {
                    for (u = l.delegateType || p, Ye.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    c = s;
                    c === (r.ownerDocument || ne) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0; (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u: l.bindType || p,
                o = (de._data(s, "events") || {})[t.type] && de._data(s, "handle"),
                o && o.apply(s, n),
                o = a && s[a],
                o && o.apply && Le(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && Le(r) && a && r[p] && !de.isWindow(r)) {
                    c = r[a],
                    c && (r[a] = null),
                    de.event.triggered = p;
                    try {
                        r[p]()
                    } catch(g) {}
                    de.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = de.event.fix(e);
            var t, n, r, i, o, a = [],
            s = re.call(arguments),
            u = (de._data(this, "events") || {})[e.type] || [],
            l = de.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = de.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((de.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
            s = t.delegateCount,
            u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; s > n; n++) o = t[n],
                i = o.selector + " ",
                void 0 === r[i] && (r[i] = o.needsContext ? de(i, this).index(u) > -1 : de.find(i, this, null, [u]).length),
                r[i] && r.push(o);
                r.length && a.push({
                    elem: u,
                    handlers: r
                })
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[de.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Qe.test(i) ? this.mouseHooks: Je.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new de.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || ne),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ne, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return de.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return de.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    de.removeEvent = ne.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    },
    de.Event = function(e, t) {
        return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v: y) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), void(this[de.expando] = !0)) : new de.Event(e, t)
    },
    de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = v,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = v,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !de.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ce.submit || (de.event.special.submit = {
        setup: function() {
            return de.nodeName(this, "form") ? !1 : void de.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = de.nodeName(t, "input") || de.nodeName(t, "button") ? de.prop(t, "form") : void 0;
                n && !de._data(n, "submit") && (de.event.add(n, "submit._submit",
                function(e) {
                    e._submitBubble = !0
                }), de._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return de.nodeName(this, "form") ? !1 : void de.event.remove(this, "._submit")
        }
    }),
    ce.change || (de.event.special.change = {
        setup: function() {
            return Ve.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (de.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), de.event.add(this, "click._change",
            function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                de.event.simulate("change", this, e)
            })), !1) : void de.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Ve.test(t.nodeName) && !de._data(t, "change") && (de.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e)
                }), de._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return de.event.remove(this, "._change"),
            !Ve.test(this.nodeName)
        }
    }),
    ce.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = de._data(r, t);
                i || r.addEventListener(e, n, !0),
                de._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = de._data(r, t) - 1;
                i ? de._data(r, t, i) : (r.removeEventListener(e, n, !0), de._removeData(r, t))
            }
        }
    }),
    de.fn.extend({
        on: function(e, t, n, r) {
            return b(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return b(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = y),
            this.each(function() {
                de.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? de.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ke = / jQuery\d+="(?:null|\d+)"/g,
    Ze = new RegExp("<(?:" + Ie + ")[\\s/>]", "i"),
    et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    tt = /<script|<style|<link/i,
    nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^true\/(.*)/,
    it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ot = d(ne),
    at = ot.appendChild(ne.createElement("div"));
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = de.contains(e.ownerDocument, e);
            if (ce.html5Clone || de.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(ce.noCloneEvent && ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e))) for (r = p(o), s = p(e), a = 0; null != (i = s[a]); ++a) r[a] && N(i, r[a]);
            if (t) if (n) for (s = s || p(e), r = r || p(o), a = 0; null != (i = s[a]); a++) E(i, r[a]);
            else E(e, o);
            return r = p(o, "script"),
            r.length > 0 && h(r, !u && p(e, "script")),
            r = s = i = null,
            o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0,
            s = de.expando,
            u = de.cache,
            l = ce.attributes,
            c = de.event.special; null != (n = e[a]); a++) if ((t || Le(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? de.event.remove(n, r) : de.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), te.push(i))
            }
        }
    }),
    de.fn.extend({
        domManip: k,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Re(this,
            function(e) {
                return void 0 === e ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ne).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return k(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return k(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return k(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && de.cleanData(p(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && de.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : void 0;
                if ("string" == typeof e && !tt.test(e) && (ce.htmlSerialize || !Ze.test(e)) && (ce.leadingWhitespace || !$e.test(e)) && !ze[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (de.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return k(this, arguments,
            function(t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(p(this)), n && n.replaceChild(t, this))
            },
            e)
        }
    }),
    de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        de.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = de(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            de(o[r])[t](n),
            oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st, ut = {
        HTML: "block",
        BODY: "block"
    },
    lt = /^margin/,
    ct = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
    ft = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o],
        e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    },
    dt = ne.documentElement; !
    function() {
        function t() {
            var t, c, f = ne.documentElement;
            f.appendChild(u),
            l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = s = !1,
            r = a = !0,
            e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(ne.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)),
            l.style.display = "none",
            o = 0 === l.getClientRects().length,
            o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)),
            f.removeChild(u)
        }
        var n, r, i, o, a, s, u = ne.createElement("div"),
        l = ne.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ce.opacity = "0.5" === l.style.opacity, ce.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === l.style.backgroundClip, u = ne.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ce.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, de.extend(ce, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                o
            },
            boxSizingReliable: function() {
                return null == n && t(),
                i
            },
            pixelMarginRight: function() {
                return null == n && t(),
                r
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                s
            }
        }))
    } ();
    var pt, ht, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    },
    ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== a && void 0 !== a || de.contains(e.ownerDocument, e) || (a = de.style(e, t)),
        n && !ce.pixelMarginRight() && ct.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o),
        void 0 === a ? a: a + ""
    }) : dt.currentStyle && (pt = function(e) {
        return e.currentStyle
    },
    ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        ct.test(a) && !gt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)),
        void 0 === a ? a: a + "" || "auto"
    });
    var mt = /alpha\([^)]*\)/i,
    vt = /opacity\s*=\s*([^)]*)/i,
    yt = /^(none|table(?!-c[ea]).+)/,
    xt = new RegExp("^(" + Me + ")(.*)$", "i"),
    bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    wt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Tt = ["Webkit", "O", "Moz", "ms"],
    Ct = ne.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ce.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = de.camelCase(t),
                u = e.style;
                if (t = de.cssProps[s] || (de.cssProps[s] = L(s) || s), a = de.cssHooks[t] || de.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i: u[t];
                if (o = typeof n, "string" === o && (i = _e.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (de.cssNumber[s] ? "": "px")), ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch(l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = de.camelCase(t);
            return t = de.cssProps[s] || (de.cssProps[s] = L(s) || s),
            a = de.cssHooks[t] || de.cssHooks[s],
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = ht(e, t, r)),
            "normal" === o && t in wt && (o = wt[t]),
            "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
    de.each(["height", "width"],
    function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? yt.test(de.css(e, "display")) && 0 === e.offsetWidth ? ft(e, bt,
                function() {
                    return _(e, t, r)
                }) : _(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && pt(e);
                return q(e, n, r ? M(e, t, r, ce.boxSizing && "border-box" === de.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ce.opacity || (de.cssHooks.opacity = {
        get: function(e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === de.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = mt.test(o) ? o.replace(mt, i) : o + " " + i)
        }
    }),
    de.cssHooks.marginRight = j(ce.reliableMarginRight,
    function(e, t) {
        return t ? ft(e, {
            display: "inline-block"
        },
        ht, [e, "marginRight"]) : void 0
    }),
    de.cssHooks.marginLeft = j(ce.reliableMarginLeft,
    function(e, t) {
        return t ? (parseFloat(ht(e, "marginLeft")) || (de.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        },
        function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px": void 0
    }),
    de.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Fe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        lt.test(e) || (de.cssHooks[e + t].set = q)
    }),
    de.fn.extend({
        css: function(e, t) {
            return Re(this,
            function(e, t, n) {
                var r, i, o = {},
                a = 0;
                if (de.isArray(t)) {
                    for (r = pt(e), i = t.length; i > a; a++) o[t[a]] = de.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? de(this).show() : de(this).hide()
            })
        }
    }),
    de.Tween = F,
    F.prototype = {
        constructor: F,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || de.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (de.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : F.propHooks._default.set(this),
            this
        }
    },
    F.prototype.init.prototype = F.prototype,
    F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now: de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    de.fx = F.prototype.init,
    de.fx.step = {};
    var Et, Nt, kt = /^(?:toggle|show|hide)$/,
    St = /queueHooks$/;
    de.Animation = de.extend($, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, _e.exec(t), n),
                n
            }]
        },
        tweener: function(e, t) {
            de.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            $.tweeners[n] = $.tweeners[n] || [],
            $.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }),
    de.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? de.extend({},
        e) : {
            complete: n || !n && t || de.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !de.isFunction(t) && t
        };
        return r.duration = de.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in de.fx.speeds ? de.fx.speeds[r.duration] : de.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            de.isFunction(r.old) && r.old.call(this),
            r.queue && de.dequeue(this, r.queue)
        },
        r
    },
    de.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Oe).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = de.isEmptyObject(e),
            o = de.speed(t, n, r),
            a = function() {
                var t = $(this, de.extend({},
                e), o); (i || de._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                o = de.timers,
                a = de._data(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && de.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = de._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = de.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, de.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    de.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = de.fn[t];
        de.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i)
        }
    }),
    de.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        de.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    de.timers = [],
    de.fx.tick = function() {
        var e, t = de.timers,
        n = 0;
        for (Et = de.now(); n < t.length; n++) e = t[n],
        e() || t[n] !== e || t.splice(n--, 1);
        t.length || de.fx.stop(),
        Et = void 0
    },
    de.fx.timer = function(e) {
        de.timers.push(e),
        e() ? de.fx.start() : de.timers.pop()
    },
    de.fx.interval = 13,
    de.fx.start = function() {
        Nt || (Nt = e.setInterval(de.fx.tick, de.fx.interval))
    },
    de.fx.stop = function() {
        e.clearInterval(Nt),
        Nt = null
    },
    de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    de.fn.delay = function(t, n) {
        return t = de.fx ? de.fx.speeds[t] || t: t,
        n = n || "fx",
        this.queue(n,
        function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e, t = ne.createElement("input"),
        n = ne.createElement("div"),
        r = ne.createElement("select"),
        i = r.appendChild(ne.createElement("option"));
        n = ne.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        ce.getSetAttribute = "t" !== n.className,
        ce.style = /top/.test(e.getAttribute("style")),
        ce.hrefNormalized = "/a" === e.getAttribute("href"),
        ce.checkOn = !!t.value,
        ce.optSelected = i.selected,
        ce.enctype = !!ne.createElement("form").enctype,
        r.disabled = !0,
        ce.optDisabled = !i.disabled,
        t = ne.createElement("input"),
        t.setAttribute("value", ""),
        ce.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        ce.radioValue = "t" === t.value
    } ();
    var At = /\r/g;
    de.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = de.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, de(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": de.isArray(i) && (i = de.map(i,
                    function(e) {
                        return null == e ? "": e + ""
                    })), t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = de.valHooks[i.type] || de.valHooks[i.nodeName.toLowerCase()],
                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(At, "") : null == n ? "": n)
            }
        }
    }),
    de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t: de.trim(de.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], (n.selected || u === i) && (ce.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                        if (t = de(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = de.makeArray(t), a = i.length; a--;) if (r = i[a], de.inArray(de.valHooks.option.get(r), o) >= 0) try {
                        r.selected = n = !0
                    } catch(s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    de.each(["radio", "checkbox"],
    function() {
        de.valHooks[this] = {
            set: function(e, t) {
                return de.isArray(t) ? e.checked = de.inArray(de(e).val(), t) > -1 : void 0
            }
        },
        ce.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var Dt, jt, Lt = de.expr.attrHandle,
    Ht = /^(?:checked|selected)$/i,
    qt = ce.getSetAttribute,
    Mt = ce.input;
    de.fn.extend({
        attr: function(e, t) {
            return Re(this, de.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }),
    de.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (t = t.toLowerCase(), i = de.attrHooks[t] || (de.expr.match.bool.test(t) ? jt: Dt)), void 0 !== n ? null === n ? void de.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = de.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ce.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(Ae);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = de.propFix[n] || n,
            de.expr.match.bool.test(n) ? Mt && qt || !Ht.test(n) ? e[r] = !1 : e[de.camelCase("default-" + n)] = e[r] = !1 : de.attr(e, n, ""),
            e.removeAttribute(qt ? n: r)
        }
    }),
    jt = {
        set: function(e, t, n) {
            return t === !1 ? de.removeAttr(e, n) : Mt && qt || !Ht.test(n) ? e.setAttribute(!qt && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    de.each(de.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = Lt[t] || de.find.attr;
        Mt && qt || !Ht.test(t) ? Lt[t] = function(e, t, r) {
            var i, o;
            return r || (o = Lt[t], Lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Lt[t] = o),
            i
        }: Lt[t] = function(e, t, n) {
            return n ? void 0 : e[de.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Mt && qt || (de.attrHooks.value = {
        set: function(e, t, n) {
            return de.nodeName(e, "input") ? void(e.defaultValue = t) : Dt && Dt.set(e, t, n)
        }
    }),
    qt || (Dt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t: void 0
        }
    },
    Lt.id = Lt.name = Lt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value: null
    },
    de.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value: void 0
        },
        set: Dt.set
    },
    de.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Dt.set(e, "" === t ? !1 : t, n)
        }
    },
    de.each(["width", "height"],
    function(e, t) {
        de.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    ce.style || (de.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var _t = /^(?:input|select|textarea|button|object)$/i,
    Ft = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return Re(this, de.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = de.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    de.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, i = de.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ce.hrefNormalized || de.each(["href", "src"],
    function(e, t) {
        de.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ce.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        de.propFix[this.toLowerCase()] = this
    }),
    ce.enctype || (de.propFix.enctype = "encoding");
    var Ot = /[\t\r\n\f]/g;
    de.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).addClass(e.call(this, t, I(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = de.trim(r),
                i !== s && de.attr(n, "class", s)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).removeClass(e.call(this, t, I(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                s = de.trim(r),
                i !== s && de.attr(n, "class", s)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, I(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = de(this), o = e.match(Ae) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = I(this), t && de._data(this, "__className__", t), de.attr(this, "class", t || e === !1 ? "": de._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + I(n) + " ").replace(Ot, " ").indexOf(t) > -1) return ! 0;
            return ! 1
        }
    }),
    de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Rt = e.location,
    Pt = de.now(),
    Bt = /\?/,
    Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    de.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
        i = de.trim(t + "");
        return i && !de.trim(i.replace(Wt,
        function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e: (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : de.error("Invalid JSON: " + t)
    },
    de.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch(i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t),
        n
    };
    var $t = /#.*$/,
    It = /([?&])_=[^&]*/,
    zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ut = /^(?:GET|HEAD)$/,
    Vt = /^\/\//,
    Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Qt = {},
    Yt = {},
    Gt = "*/".concat("*"),
    Kt = Rt.href,
    Zt = Jt.exec(Kt.toLowerCase()) || [];
    de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Kt,
            type: "GET",
            isLocal: Xt.test(Zt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": de.parseJSON,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, de.ajaxSettings), t) : U(de.ajaxSettings, e)
        },
        ajaxPrefilter: z(Qt),
        ajaxTransport: z(Yt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, f, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (x = V(d, T, r)), x = J(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (de.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (de.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent": 304 === t ? C = "notmodified": (C = x.state, f = x.data, y = x.error, o = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [T, d, o ? f: y]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, d = de.ajaxSetup({},
            n),
            p = d.context || d,
            h = d.context && (p.nodeType || p.jquery) ? de(p) : de.event,
            g = de.Deferred(),
            m = de.Callbacks("once memory"),
            v = d.statusCode || {},
            y = {},
            x = {},
            b = 0,
            w = "canceled",
            T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!f) for (f = {}; t = zt.exec(s);) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) v[t] = [v[t], e[t]];
                    else T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || Kt) + "").replace($t, "").replace(Vt, Zt[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = de.trim(d.dataType || "*").toLowerCase().match(Ae) || [""], null == d.crossDomain && (i = Jt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Zt[1] && i[2] === Zt[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Zt[3] || ("http:" === Zt[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)), X(Qt, d, n, T), 2 === b) return T;
            l = de.event && d.global,
            l && 0 === de.active++&&de.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Ut.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (Bt.test(a) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = It.test(a) ? a.replace(It, "$1_=" + Pt++) : a + (Bt.test(a) ? "&": "?") + "_=" + Pt++)),
            d.ifModified && (de.lastModified[a] && T.setRequestHeader("If-Modified-Since", de.lastModified[a]), de.etag[a] && T.setRequestHeader("If-None-Match", de.etag[a])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType),
            T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Gt + "; q=0.01": "") : d.accepts["*"]);
            for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](d[o]);
            if (c = X(Yt, d, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                },
                d.timeout));
                try {
                    b = 1,
                    c.send(y, r)
                } catch(C) {
                    if (! (2 > b)) throw C;
                    r( - 1, C)
                }
            } else r( - 1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script")
        }
    }),
    de.each(["get", "post"],
    function(e, t) {
        de[t] = function(e, n, r, i) {
            return de.isFunction(n) && (i = i || r, r = n, n = void 0),
            de.ajax(de.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            },
            de.isPlainObject(e) && e))
        }
    }),
    de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    de.fn.extend({
        wrapAll: function(e) {
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                de.nodeName(this, "body") || de(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    de.expr.filters.hidden = function(e) {
        return ce.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length: Y(e)
    },
    de.expr.filters.visible = function(e) {
        return ! de.expr.filters.hidden(e)
    };
    var en = /%20/g,
    tn = /\[\]$/,
    nn = /\r?\n/g,
    rn = /^(?:submit|button|image|reset|file)$/i,
    on = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = de.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) G(n, e[n], t, i);
        return r.join("&").replace(en, "+")
    },
    de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null: de.isArray(n) ? de.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                }
            }).get()
        }
    }),
    de.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
    function() {
        return this.isLocal ? Z() : ne.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || Z()
    }: K;
    var an = 0,
    sn = {},
    un = de.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload",
    function() {
        for (var e in sn) sn[e](void 0, !0)
    }),
    ce.cors = !!un && "withCredentials" in un,
    un = ce.ajax = !!un,
    un && de.ajaxTransport(function(t) {
        if (!t.crossDomain || ce.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(),
                    s = ++an;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null),
                    n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState)) if (delete sn[s], n = void 0, a.onreadystatechange = de.noop, r) 4 !== a.readyState && a.abort();
                        else {
                            l = {},
                            o = a.status,
                            "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText
                            } catch(c) {
                                u = ""
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                        }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    },
                    t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = sn[s] = n: n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e),
                e
            }
        }
    }),
    de.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    de.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n = ne.head || de("head")[0] || ne.documentElement;
            return {
                send: function(r, i) {
                    t = ne.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ln = [],
    cn = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ln.pop() || de.expando + "_" + Pt++;
            return this[e] = !0,
            e
        }
    }),
    de.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (cn.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + i) : t.jsonp !== !1 && (t.url += (Bt.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || de.error(i + " was not called"),
            a[0]
        },
        t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        },
        r.always(function() {
            void 0 === o ? de(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback, ln.push(i)),
            a && de.isFunction(o) && o(a[0]),
            a = o = void 0
        }), "script") : void 0
    }),
    ce.createHTMLDocument = function() {
        if (!ne.implementation.createHTMLDocument) return ! 1;
        var e = ne.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>",
        2 === e.body.childNodes.length
    } (),
    de.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || (ce.createHTMLDocument ? ne.implementation.createHTMLDocument("") : ne);
        var r = we.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = m([e], t, i), i && i.length && de(i).remove(), de.merge([], r.childNodes))
    };
    var fn = de.fn.load;
    de.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var r, i, o, a = this,
        s = e.indexOf(" ");
        return s > -1 && (r = de.trim(e.slice(s, e.length)), e = e.slice(0, s)),
        de.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && de.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e)
        }).always(n &&
        function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }),
        this
    },
    de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    de.expr.filters.animated = function(e) {
        return de.grep(de.timers,
        function(t) {
            return e === t.elem
        }).length
    },
    de.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = de.css(e, "position"),
            f = de(e),
            d = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = de.css(e, "top"),
            u = de.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && de.inArray("auto", [o, u]) > -1,
            l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
            de.isFunction(t) && (t = t.call(e, n, de.extend({},
            s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, d) : f.css(d)
        }
    },
    de.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                de.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            if (o) return t = o.documentElement,
            de.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = ee(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === de.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()), n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - de.css(r, "marginTop", !0),
                    left: t.left - n.left - de.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");) e = e.offsetParent;
                return e || dt
            })
        }
    }),
    de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = /Y/.test(t);
        de.fn[e] = function(r) {
            return Re(this,
            function(e, r, i) {
                var o = ee(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? de(o).scrollLeft() : i, n ? i: de(o).scrollTop()) : e[r] = i)
            },
            e, r, arguments.length, null)
        }
    }),
    de.each(["top", "left"],
    function(e, t) {
        de.cssHooks[t] = j(ce.pixelPosition,
        function(e, n) {
            return n ? (n = ht(e, t), ct.test(n) ? de(e).position()[t] + "px": n) : void 0
        })
    }),
    de.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            de.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || i === !0 ? "margin": "border");
                return Re(this,
                function(t, n, r) {
                    var i;
                    return de.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? de.css(t, n, a) : de.style(t, n, r, a)
                },
                t, o ? r: void 0, o, null)
            }
        })
    }),
    de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    de.fn.size = function() {
        return this.length
    },
    de.fn.andSelf = de.fn.addBack;
    var dn = e.jQuery,
    pn = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = pn),
        t && e.jQuery === de && (e.jQuery = dn),
        de
    },
    e.jQuery = e.$ = de,
    de
} (window),
+
function() {
    jQuery.fn.extend({
        ac: jQuery.fn.addClass,
        rc: jQuery.fn.removeClass,
        tc: jQuery.fn.toggleClass,
        hc: jQuery.fn.hasClass
    })
} (),
+
function(e, t) {
    function n(e) {
        var t = o[e];
        return t ? (t.e || r(e), t.e) : (console && console.error('module: "' + e + '" not defined!'), null)
    }
    function r(e) {
        var r = o[e];
        r.e = r.f.call(t, n)
    }
    function i(e, t) {
        o[e] = {
            f: t
        },
        "main" === e && r(e)
    }
    var o = {};
    e.CHE = e.CHE || {},
    e.CHE.add = i
} (window),
+
function(e) {
    var t = function(e) {
        function t(e) {
            var t = $.parseJSON($(e).attr("g-on").replace(/{/g, '{"').replace(/}/g, '"}').replace(/:/g, '":"').replace(/,/g, '","'));
            $.each(t,
            function(t, n) {
                var i = t.indexOf(">");
                if (i > 0) {
                    var o = t.substr(i + 1, t.lenght);
                    t = t.substr(0, i),
                    $(e).on(t, o,
                    function(e) {
                        r[n].call(this, e)
                    })
                } else $(e).on(t,
                function(e) {
                    r[n].call(this, e)
                })
            })
        }
        var n = $("#" + e.el),
        r = e.events,
        i = n.find("[g-on]");
        i.each(function(e, n) {
            t(n)
        }),
        n.attr("g-on") && t(n)
    },
    n = function(e) {
        var t;
        if (e) {
            var n = $("#" + e);
            t = n.find("[id]")
        } else t = $("[id]");
        var r = {};
        return t.each(function(e, t) {
            var n = $(t).attr("id");
            r[n] = $(t)
        }),
        e && (r[e] = $("#" + e)),
        r
    };
    e.CHE = e.CHE || {},
    e.CHE.bind = t,
    e.CHE.query = n
} (window);