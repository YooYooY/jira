(this.webpackJsonpjira = this.webpackJsonpjira || []).push([
  [1],
  {
    115: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return m;
        });
      var r = n(23),
        a = n.n(r),
        c = n(60),
        u = n(186),
        o = n(61),
        i = n(243),
        s = n.n(i),
        l = n(86),
        f = n(128),
        d = n(0),
        b = "https://online.com",
        p = (function () {
          var e = Object(o.a)(
            a.a.mark(function e(t) {
              var n,
                r,
                i,
                f,
                d,
                p,
                m = arguments;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                        (r = n.token),
                        (i = n.method),
                        (f = n.data),
                        (d = Object(u.a)(n, ["token", "method", "data"])),
                        "GET" ===
                        (p = Object(c.a)(
                          {
                            method: i || "GET",
                            headers: {
                              Authorization: r ? "Bearer ".concat(r) : "",
                              "Content-Type": f ? "application/json" : "",
                            },
                          },
                          d
                        )).method.toUpperCase()
                          ? (t += "?".concat(
                              "string" === typeof f ? f : s.a.stringify(f)
                            ))
                          : (p.body = JSON.stringify(f || {})),
                        e.abrupt(
                          "return",
                          fetch("".concat(b, "/").concat(t), p).then(
                            (function () {
                              var e = Object(o.a)(
                                a.a.mark(function e(t) {
                                  var n;
                                  return a.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (401 !== t.status) {
                                            e.next = 5;
                                            break;
                                          }
                                          return (e.next = 3), l.c();
                                        case 3:
                                          return (
                                            window.location.reload(),
                                            e.abrupt(
                                              "return",
                                              Promise.reject({
                                                message:
                                                  "\u8bf7\u91cd\u65b0\u767b\u5f55",
                                              })
                                            )
                                          );
                                        case 5:
                                          return (e.next = 7), t.json();
                                        case 7:
                                          if (((n = e.sent), !t.ok)) {
                                            e.next = 12;
                                            break;
                                          }
                                          return e.abrupt("return", n);
                                        case 12:
                                          return e.abrupt(
                                            "return",
                                            Promise.reject(n)
                                          );
                                        case 13:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        m = function () {
          var e = Object(f.a)().user;
          return Object(d.useCallback)(
            function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var a = n[0],
                u = n[1];
              return p(
                a,
                Object(c.a)(
                  { token: null === e || void 0 === e ? void 0 : e.token },
                  u
                )
              );
            },
            [e]
          );
        };
    },
    128: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n(165),
        a = n(0),
        c = function () {
          var e = Object(a.useContext)(r.a);
          if (!e)
            throw new Error(
              "useAuth \u5fc5\u987b\u5728AuthProvider\u4e2d\u4f7f\u7528"
            );
          return e;
        };
    },
    165: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return m;
        });
      var r = n(23),
        a = n.n(r),
        c = n(61),
        u = n(0),
        o = n.n(u),
        i = n(86),
        s = n(115),
        l = n(198),
        f = n(93),
        d = n(448),
        b = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              var t, n, r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = null), !(n = i.a()))) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 5), Object(s.a)("me", { token: n });
                    case 5:
                      (r = e.sent), (t = r.user);
                    case 7:
                      return e.abrupt("return", t);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = Object(u.createContext)(void 0);
      p.displayName = "AuthContext";
      var m = function (e) {
        var t,
          n = e.children,
          r = Object(l.a)(),
          a = r.data,
          c = r.error,
          s = r.isLoading,
          m = r.isIdle,
          v = r.isError,
          h = r.run,
          j = r.setData,
          O = Object(d.b)();
        return (
          (t = function () {
            h(b());
          }),
          Object(u.useEffect)(function () {
            t();
          }, []),
          m || s
            ? o.a.createElement(f.d, null)
            : v
            ? o.a.createElement(f.c, { error: c })
            : o.a.createElement(p.Provider, {
                children: n,
                value: {
                  user: a,
                  login: function (e) {
                    return i.b(e).then(j);
                  },
                  register: function (e) {
                    return i.d(e).then(j);
                  },
                  logout: function () {
                    return i.c().then(function () {
                      j(null), O.clear();
                    });
                  },
                },
              })
        );
      };
    },
    198: function (e, t, n) {
      "use strict";
      var r = n(42),
        a = n(60),
        c = n(0),
        u = { stat: "idle", data: null, error: null },
        o = { throwOnError: !1 },
        i = function (e) {
          var t = (function () {
            var e = Object(c.useRef)(!1);
            return (
              Object(c.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              e
            );
          })();
          return Object(c.useCallback)(
            function () {
              t.current && e && e.apply(void 0, arguments);
            },
            [t, e]
          );
        };
      t.a = function (e, t) {
        var n = Object(c.useMemo)(
            function () {
              return Object(a.a)(Object(a.a)({}, o), t);
            },
            [t]
          ),
          s = Object(c.useReducer)(function (e, t) {
            return Object(a.a)(Object(a.a)({}, e), t);
          }, Object(a.a)(Object(a.a)({}, u), e)),
          l = Object(r.a)(s, 2),
          f = l[0],
          d = l[1],
          b = i(d),
          p = Object(c.useState)(function () {
            return function () {};
          }),
          m = Object(r.a)(p, 2),
          v = m[0],
          h = m[1],
          j = Object(c.useCallback)(
            function (e) {
              b({ data: e, stat: "success", error: null });
            },
            [b]
          ),
          O = Object(c.useCallback)(
            function (e) {
              b({ error: e, stat: "error", data: null });
            },
            [b]
          ),
          g = Object(c.useCallback)(
            function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!(e instanceof Promise))
                throw new Error(
                  "\u8bf7\u4f20\u5165 Promise \u7c7b\u578b\u6570\u636e"
                );
              return (
                h(function () {
                  return function () {
                    t.retry && g(t.retry(), t);
                  };
                }),
                b({ stat: "loading" }),
                e
                  .then(function (e) {
                    return j(e), e;
                  })
                  .catch(function (e) {
                    return O(e), n.throwOnError ? Promise.reject(e) : e;
                  })
              );
            },
            [j, O, n, b]
          );
        return Object(a.a)(
          {
            isIdle: "idle" === f.stat,
            isLoading: "loading" === f.stat,
            isError: "error" === f.stat,
            isSuccess: "success" === f.stat,
            run: g,
            setData: j,
            setError: O,
            retry: v,
          },
          f
        );
      };
    },
    277: function (e, t, n) {},
    287: function (e, t) {},
    446: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        c = n(24),
        u = n.n(c),
        o = (n(277), n(128)),
        i = n(150),
        s = n(248),
        l = n(151),
        f = n(164),
        d = (function (e) {
          Object(l.a)(n, e);
          var t = Object(f.a)(n);
          function n() {
            var e;
            Object(i.a)(this, n);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = { error: null }),
              e
            );
          }
          return (
            Object(s.a)(
              n,
              [
                {
                  key: "render",
                  value: function () {
                    var e = this.state.error,
                      t = this.props,
                      n = t.fallbackRender,
                      r = t.children;
                    return e ? n({ error: e }) : r;
                  },
                },
              ],
              [
                {
                  key: "gatDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
              ]
            ),
            n
          );
        })(r.Component),
        b = n(93),
        p = a.a.lazy(function () {
          return Promise.all([n.e(0), n.e(4), n.e(5)]).then(n.bind(null, 673));
        }),
        m = a.a.lazy(function () {
          return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 680));
        });
      var v = function () {
          var e = Object(o.a)().user;
          return a.a.createElement(
            "div",
            { className: "App" },
            a.a.createElement(
              d,
              { fallbackRender: b.c },
              a.a.createElement(
                a.a.Suspense,
                { fallback: a.a.createElement(b.d, null) },
                e ? a.a.createElement(p, null) : a.a.createElement(m, null)
              )
            )
          );
        },
        h = n(182),
        j = n(165),
        O = n(452),
        g = n(448),
        w = function (e) {
          var t = e.children,
            n = new O.a({
              defaultOptions: { queries: { refetchOnWindowFocus: !1 } },
            });
          return a.a.createElement(
            g.a,
            { client: n },
            a.a.createElement(j.b, null, t)
          );
        };
      n(445);
      Object(h.b)(function () {
        u.a.render(
          a.a.createElement(
            w,
            null,
            a.a.createElement(h.a, null),
            a.a.createElement(v, null)
          ),
          document.getElementById("root")
        );
      });
    },
    86: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return d;
        });
      var r = n(23),
        a = n.n(r),
        c = n(61),
        u = n(115),
        o = "__auth_provider_token__",
        i = function () {
          return window.localStorage.getItem(o);
        },
        s = function (e) {
          var t = e.user;
          return window.localStorage.setItem(o, t.token || ""), t;
        },
        l = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var n;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(u.a)("login", { method: "post", data: t })
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        console.log("getUserData"),
                        e.abrupt("return", s(n))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var n;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(u.a)("register", { method: "post", data: t })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", s(n));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.localStorage.removeItem(o);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    93: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return p;
      }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return j;
        }),
        n.d(t, "a", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return g;
        });
      var r,
        a,
        c,
        u,
        o = n(113),
        i = n(114),
        s = n(0),
        l = n.n(s),
        f = n(291),
        d = n(263),
        b = n(268),
        p = i.a.div(
          r ||
            (r = Object(o.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: ",
              ";\n  margin-bottom: ",
              ";\n  > * {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    margin-right: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.between ? "space-between" : void 0;
          },
          function (e) {
            return e.marginBottom + "rem";
          },
          function (e) {
            return "number" === typeof e.gap
              ? e.gap + "rem"
              : e.gap
              ? "2rem"
              : void 0;
          }
        ),
        m = i.a.div(
          a ||
            (a = Object(o.a)([
              "\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        v = function () {
          return l.a.createElement(
            m,
            null,
            l.a.createElement(f.a, { size: "large" })
          );
        },
        h = function (e) {
          var t = e.error;
          return l.a.createElement(
            m,
            null,
            l.a.createElement(
              d.a.Text,
              { type: "danger" },
              null === t || void 0 === t ? void 0 : t.message
            )
          );
        },
        j = function (e) {
          var t,
            n = e.error;
          return (null === (t = n) || void 0 === t ? void 0 : t.message)
            ? l.a.createElement(d.a.Text, { type: "danger" }, n.message)
            : null;
        },
        O = Object(i.a)(b.a)(c || (c = Object(o.a)(["\n  padding: 0;\n"]))),
        g = i.a.div(
          u ||
            (u = Object(o.a)([
              "\n  padding: 3.2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        );
    },
  },
  [[446, 2, 3]],
]);
//# sourceMappingURL=main.f5f135bb.chunk.js.map
