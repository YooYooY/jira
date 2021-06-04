(this.webpackJsonpjira = this.webpackJsonpjira || []).push([
  [6],
  {
    468: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(0),
        r = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = Object(a.useRef)(document.title).current;
          Object(a.useEffect)(
            function () {
              document.title = e;
            },
            [e]
          ),
            Object(a.useEffect)(
              function () {
                return function () {
                  t || (document.title = n);
                };
              },
              [t, n]
            );
        };
    },
    680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "UnauthenticatedApp", function () {
          return B;
        });
      var a,
        r,
        c,
        i,
        u,
        o,
        l = n(42),
        s = n(0),
        m = n.n(s),
        d = n(23),
        p = n.n(d),
        b = n(186),
        f = n(61),
        h = n(128),
        E = n(676),
        g = n(678),
        w = n(113),
        j = n(114),
        v = n.p + "static/media/logo.6c866125.svg",
        O = n.p + "static/media/left.e74de3ec.svg",
        k = n.p + "static/media/right.b423a6cf.svg",
        x = n(268),
        y = n(675),
        I = Object(j.a)(x.a)(a || (a = Object(w.a)(["\n  width: 100%;\n"]))),
        q = j.a.h2(
          r ||
            (r = Object(w.a)([
              "\n  margin-bottom: 2.4rem;\n  color: rgb(94, 108, 132);\n",
            ]))
        ),
        T = j.a.div(
          c ||
            (c = Object(w.a)([
              "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: left bottom, right bottom;\n  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),\n    calc(((100vw - 40rem) / 2) - 3.2rem), cover;\n  background-image: url(",
              "), url(",
              ");\n",
            ])),
          O,
          k
        ),
        z = j.a.header(
          i ||
            (i = Object(w.a)([
              "\n  background: url(",
              ") no-repeat center;\n  padding: 5rem 0;\n  background-size: 8rem;\n  width: 100%;\n",
            ])),
          v
        ),
        F = Object(j.a)(y.a)(
          u ||
            (u = Object(w.a)([
              "\n  width: 40rem;\n  min-height: 56rem;\n  padding: 3.2rem 4rem;\n  border-radius: 0.3rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n",
            ]))
        ),
        J = j.a.div(
          o ||
            (o = Object(w.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n",
            ]))
        ),
        L = n(198),
        S = function (e) {
          var t = e.onError,
            n = Object(h.a)().register,
            a = Object(L.a)(void 0, { throwOnError: !0 }),
            r = a.run,
            c = a.isLoading,
            i = (function () {
              var e = Object(f.a)(
                p.a.mark(function e(a) {
                  var c, i;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((c = a.cpassword),
                              (i = Object(b.a)(a, ["cpassword"])),
                              c === i.password)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              t(
                                new Error(
                                  "\u8bf7\u786e\u8ba4\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u76f8\u540c"
                                )
                              ),
                              e.abrupt("return")
                            );
                          case 4:
                            return (e.prev = 4), (e.next = 7), r(n(i));
                          case 7:
                            e.next = 12;
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(4)), t(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return m.a.createElement(
            E.a,
            { onFinish: i },
            m.a.createElement(
              E.a.Item,
              {
                name: "username",
                rules: [
                  {
                    required: !0,
                    message: "\u8bf7\u8f93\u5165\u7528\u6237\u540d",
                  },
                ],
              },
              m.a.createElement(g.a, {
                placeholder: "\u7528\u6237\u540d",
                type: "text",
                id: "username",
              })
            ),
            m.a.createElement(
              E.a.Item,
              {
                name: "password",
                rules: [
                  { required: !0, message: "\u8bf7\u8f93\u5165\u5bc6\u7801" },
                ],
              },
              m.a.createElement(g.a, {
                placeholder: "\u5bc6\u7801",
                type: "password",
                id: "password",
              })
            ),
            m.a.createElement(
              E.a.Item,
              {
                name: "cpassword",
                rules: [
                  { required: !0, message: "\u8bf7\u786e\u8ba4\u5bc6\u7801" },
                ],
              },
              m.a.createElement(g.a, {
                placeholder: "\u786e\u8ba4\u5bc6\u7801",
                type: "password",
                id: "cpassword",
              })
            ),
            m.a.createElement(
              E.a.Item,
              null,
              m.a.createElement(
                I,
                { loading: c, htmlType: "submit", type: "primary" },
                "\u6ce8\u518c"
              )
            )
          );
        },
        A = function (e) {
          var t = e.onError,
            n = Object(h.a)().login,
            a = Object(L.a)(void 0, { throwOnError: !0 }),
            r = a.run,
            c = a.isLoading,
            i = (function () {
              var e = Object(f.a)(
                p.a.mark(function e(a) {
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), r(n(a));
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5), (e.t0 = e.catch(0)), t(e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return m.a.createElement(
            E.a,
            { onFinish: i },
            m.a.createElement(
              E.a.Item,
              {
                name: "username",
                rules: [
                  {
                    required: !0,
                    message: "\u8bf7\u8f93\u5165\u7528\u6237\u540d",
                  },
                ],
              },
              m.a.createElement(g.a, {
                placeholder: "\u7528\u6237\u540d",
                type: "text",
                id: "username",
              })
            ),
            m.a.createElement(
              E.a.Item,
              {
                name: "password",
                rules: [
                  { required: !0, message: "\u8bf7\u8f93\u5165\u5bc6\u7801" },
                ],
              },
              m.a.createElement(g.a, {
                placeholder: "\u5bc6\u7801",
                type: "password",
                id: "password",
              })
            ),
            m.a.createElement(
              E.a.Item,
              null,
              m.a.createElement(
                I,
                { loading: c, htmlType: "submit", type: "primary" },
                "\u767b\u5f55"
              )
            )
          );
        },
        C = n(468),
        R = n(672),
        U = n(93),
        B = function () {
          var e = Object(s.useState)(!1),
            t = Object(l.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(s.useState)(null),
            c = Object(l.a)(r, 2),
            i = c[0],
            u = c[1];
          return (
            Object(C.a)("\u8bf7\u767b\u5f55\u6ce8\u518c\u4ee5\u7ee7\u7eed"),
            Object(s.useEffect)(
              function () {
                u(null);
              },
              [n]
            ),
            Object(s.useEffect)(
              function () {
                return (
                  clearTimeout(null),
                  setTimeout(u, 2e3),
                  function () {
                    clearTimeout(null);
                  }
                );
              },
              [i]
            ),
            m.a.createElement(
              J,
              null,
              m.a.createElement(z, null),
              m.a.createElement(T, null),
              m.a.createElement(
                F,
                null,
                m.a.createElement(
                  q,
                  null,
                  n ? "\u8bf7\u6ce8\u518c" : "\u8bf7\u767b\u5f55"
                ),
                m.a.createElement(U.b, { error: i }),
                n
                  ? m.a.createElement(S, { onError: u })
                  : m.a.createElement(A, { onError: u }),
                m.a.createElement(R.a, null),
                m.a.createElement(
                  x.a,
                  {
                    type: "link",
                    onClick: function () {
                      return a(!n);
                    },
                  },
                  n
                    ? "\u5df2\u7ecf\u6709\u8d26\u53f7\u4e86\uff1f\u76f4\u63a5\u767b\u5f55"
                    : "\u6ca1\u6709\u8d26\u53f7\uff1f\u6ce8\u518c\u65b0\u8d26\u53f7"
                )
              )
            )
          );
        };
      t.default = B;
    },
  },
]);
//# sourceMappingURL=6.abc48b54.chunk.js.map
