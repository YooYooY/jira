(this.webpackJsonpjira = this.webpackJsonpjira || []).push([
  [5],
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
    524: function (e, t, n) {},
    591: function (e, t, n) {},
    673: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "AuthenticatedApp", function () {
          return Qt;
        });
      var a = n(0),
        r = n.n(a),
        c = n(42),
        l = n(60),
        i = n(676),
        o = n(678),
        u = n(186),
        d = n(683),
        m = function (e) {
          return Object.entries(e)
            .map(function (e) {
              var t = Object(c.a)(e, 2),
                n = t[0],
                a = t[1];
              return a ? "".concat(n, "=").concat(a) : "";
            })
            .filter(Boolean)
            .join("&");
        },
        s = n(115),
        f = function (e) {
          var t = Object(s.b)();
          return Object(d.a)(["users", e], function () {
            return t("users", { data: m(e || {}) });
          });
        },
        b = (n(524), n(12)),
        p = n.n(b),
        v = Object(a.createContext)({
          selectValue: "",
          onSelect: function () {},
        }),
        E = function (e) {
          var t,
            n,
            i = e.value,
            o = void 0 === i ? "" : i,
            d = e.onChange,
            m = e.width,
            s = e.children,
            f = Object(u.a)(e, ["value", "onChange", "width", "children"]),
            b = Object(a.useState)(!1),
            E = Object(c.a)(b, 2),
            j = E[0],
            O = E[1],
            C = Object(a.useState)({ value: o, label: "" }),
            g = Object(c.a)(C, 2),
            k = g[0],
            h = g[1],
            y = Object(a.useRef)(null);
          (t = y),
            (n = function (e) {
              O(!(!e && j) && !e);
            }),
            Object(a.useEffect)(
              function () {
                var e = function (e) {
                  var a,
                    r = !1;
                  (null === (a = t.current) || void 0 === a
                    ? void 0
                    : a.contains(e.target)) || (r = !0),
                    n && n(r);
                };
                return (
                  document.addEventListener("click", e, !1),
                  function () {
                    document.removeEventListener("click", e, !1);
                  }
                );
              },
              [n, t]
            );
          var I = Object(a.useCallback)(
              function (e) {
                h(function () {
                  return e;
                }),
                  d && d(e);
              },
              [d]
            ),
            L = Object(a.useMemo)(
              function () {
                return p()("cv-select", { "cv-select-active": j });
              },
              [j]
            ),
            x = Object(a.useMemo)(
              function () {
                return r.a.Children.map(s, function (e) {
                  if (Object(a.isValidElement)(e)) {
                    var t = e.type.displayName,
                      n = e.props,
                      c = n.value,
                      i = n.children,
                      u = n.label;
                    if (
                      (String(o) === String(c) &&
                        h(function (e) {
                          return Object(l.a)(
                            Object(l.a)({}, e),
                            {},
                            { label: u || i }
                          );
                        }),
                      "select-option" === t)
                    )
                      return r.a.cloneElement(e);
                    throw new Error("Children must be Select.Option Element");
                  }
                  return null;
                });
              },
              [s, o]
            ),
            w = Object(a.useMemo)(
              function () {
                return k.value;
              },
              [k.value]
            ),
            M = Object(a.useMemo)(
              function () {
                return { selectValue: w, onSelect: I };
              },
              [I, w]
            );
          return r.a.createElement(
            v.Provider,
            { value: M },
            r.a.createElement(
              "div",
              Object.assign({ className: L, style: { width: m } }, f),
              r.a.createElement(
                "div",
                { className: "cv-select-button", ref: y },
                k.label,
                r.a.createElement("span", { className: "cv-select-arrow" })
              ),
              r.a.createElement("div", { className: "cv-select-list" }, j && x)
            )
          );
        },
        j = function (e) {
          var t = e.value,
            n = e.label,
            c = e.children,
            l = Object(a.useContext)(v),
            i = l.onSelect,
            o = l.selectValue,
            u = Object(a.useCallback)(
              function () {
                i && i({ value: t, label: n || c });
              },
              [t, n, c, i]
            ),
            d = p()("cv-select-item", { "cv-select-item-active": o === t });
          return r.a.createElement("div", { className: d, onClick: u }, n || c);
        };
      j.displayName = "select-option";
      var O = j,
        C = E;
      C.Option = O;
      var g,
        k,
        h = C,
        y = h.Option,
        I = function (e) {
          var t = e.onChange,
            n = e.options,
            a = e.value,
            c = e.defaultOptionName,
            l = Object(u.a)(e, [
              "onChange",
              "options",
              "value",
              "defaultOptionName",
            ]);
          return r.a.createElement(
            h,
            Object.assign({ width: 150, value: a, onChange: t }, l),
            r.a.createElement(y, { value: "" }, c || ""),
            n &&
              n.map(function (e) {
                return r.a.createElement(y, { key: e.id, value: e.id }, e.name);
              })
          );
        },
        L = function (e) {
          var t = e.personId,
            n = e.onChange,
            a = Object(u.a)(e, ["personId", "onChange"]),
            c = f().data;
          return r.a.createElement(
            I,
            Object.assign(
              {
                value: t || "",
                onChange: n,
                options: c,
                defaultOptionName: "\u8bf7\u9009\u62e9\u8d1f\u8d23\u4eba",
              },
              a
            )
          );
        },
        x = Object(a.memo)(function (e) {
          var t = e.param,
            n = e.setParam,
            c = Object(a.useCallback)(
              function (e) {
                var a = e.value;
                n(Object(l.a)(Object(l.a)({}, t), {}, { personId: a }));
              },
              [t, n]
            );
          return r.a.createElement(
            i.a,
            { style: { marginBottom: "2rem" }, layout: "inline" },
            r.a.createElement(
              i.a.Item,
              null,
              r.a.createElement(o.a, {
                type: "text",
                value: t.name,
                placeholder: "\u8bf7\u8f93\u5165\u540d\u79f0",
                onChange: function (e) {
                  return n(
                    Object(l.a)(
                      Object(l.a)({}, t),
                      {},
                      { name: e.target.value }
                    )
                  );
                },
              })
            ),
            r.a.createElement(
              i.a.Item,
              null,
              r.a.createElement(L, { personId: t.personId, onChange: c })
            )
          );
        }),
        w = n(291),
        M =
          (n(591),
          function (e) {
            var t = e.columns,
              n = e.dataSource,
              c = e.loading,
              l = Object(a.useMemo)(
                function () {
                  return r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      t.map(function (e, t) {
                        return r.a.createElement(
                          "th",
                          { key: e.key || e.id || t },
                          e.title
                        );
                      })
                    )
                  );
                },
                [t]
              ),
              i = Object(a.useMemo)(
                function () {
                  return r.a.createElement(
                    "tbody",
                    null,
                    n.length
                      ? n.map(function (e) {
                          return r.a.createElement(
                            "tr",
                            { key: e.key || e.id },
                            t.map(function (t, n) {
                              var a = t.dataIndex,
                                c = t.render,
                                l = a ? e[a] : "";
                              return r.a.createElement(
                                "td",
                                { key: t.key || t.id || n },
                                c ? c(l, e) : l
                              );
                            })
                          );
                        })
                      : r.a.createElement(
                          "tr",
                          null,
                          r.a.createElement(
                            "td",
                            { align: "center", colSpan: t.length },
                            "\u6682\u65e0\u6570\u636e"
                          )
                        )
                  );
                },
                [n, t]
              ),
              o = Object(a.useMemo)(
                function () {
                  return r.a.createElement(
                    "tbody",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement(
                        "td",
                        { align: "center", colSpan: t.length },
                        r.a.createElement(w.a, null)
                      )
                    )
                  );
                },
                [t]
              );
            return r.a.createElement(
              "table",
              { className: "cv-table" },
              l,
              c ? o : i
            );
          }),
        T = n(498),
        S = n.n(T),
        N = n(462),
        P = n(685),
        Z = n(141),
        F = n(23),
        R = n.n(F),
        D = n(61),
        z = n(448),
        A = function (e) {
          var t = e.fromId,
            n = e.type,
            a = e.referenceId,
            r = e.list,
            c = Object(Z.a)(r),
            l = c.findIndex(function (e) {
              return e.id === t;
            });
          if (!a) return Y(Object(Z.a)(c), l, c.length - 1);
          var i = c.findIndex(function (e) {
            return e.id === a;
          });
          return ("after" === n ? Y : V)(Object(Z.a)(c), l, i);
        },
        V = function (e, t, n) {
          var a = e[n],
            r = e.splice(t, 1)[0],
            c = e.indexOf(a);
          return e.splice(c, 0, r), e;
        },
        Y = function (e, t, n) {
          var a = e[n],
            r = e.splice(t, 1)[0],
            c = e.indexOf(a);
          return e.splice(c + 1, 0, r), e;
        },
        B = function (e, t) {
          var n = Object(z.b)();
          return {
            onMutate: function (a) {
              return Object(D.a)(
                R.a.mark(function r() {
                  var c;
                  return R.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (c = n.getQueryData(e)),
                            n.setQueryData(e, function (e) {
                              return t(a, e);
                            }),
                            r.abrupt("return", { previousItems: c })
                          );
                        case 3:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            onSuccess: function () {
              return n.invalidateQueries(e);
            },
            onError: function (t, a, r) {
              n.setQueryData(e, r.previousItems);
            },
          };
        },
        q = function (e) {
          return B(e, function (e, t) {
            return (
              (null === t || void 0 === t
                ? void 0
                : t.filter(function (t) {
                    return t.id !== e.id;
                  })) || []
            );
          });
        },
        H = function (e) {
          return B(e, function (e, t) {
            return (
              (null === t || void 0 === t
                ? void 0
                : t.map(function (t) {
                    return t.id === e.id
                      ? Object(l.a)(Object(l.a)({}, t), e)
                      : t;
                  })) || []
            );
          });
        },
        K = function (e) {
          return B(e, function (e, t) {
            return t ? [].concat(Object(Z.a)(t), [e]) : [e];
          });
        },
        Q = function (e) {
          var t = Object(s.b)();
          return Object(d.a)(["projects", e], function () {
            return t("projects", { data: e });
          });
        },
        W = function (e) {
          var t = Object(s.b)();
          return Object(P.a)(function (e) {
            return t("projects/".concat(e.id), { method: "PATCH", data: e });
          }, H(e));
        },
        G = function (e) {
          var t = Object(s.b)();
          return Object(P.a)(function (e) {
            return t("projects", { method: "POST", data: e });
          }, K(e));
        },
        J = function (e) {
          var t = Object(s.b)();
          return Object(d.a)(
            ["project", { id: e }],
            function () {
              return t("projects/".concat(e));
            },
            { enabled: Boolean(e) }
          );
        },
        U = n(681),
        X = function (e) {
          var t = e.checked,
            n = e.onCheckedChange,
            c = Object(u.a)(e, ["checked", "onCheckedChange"]),
            l = Object(a.useCallback)(
              function (e) {
                n && n(!!e);
              },
              [n]
            );
          return r.a.createElement(
            U.a,
            Object.assign({ count: 1, value: t ? 1 : 0, onChange: l }, c)
          );
        },
        $ = n(679),
        _ = n(684),
        ee = n(677),
        te = n(93),
        ne = function () {
          var e = Object(N.c)(),
            t = Object(c.a)(e, 2),
            n = t[0],
            a = t[1];
          return function (e) {
            var t = m(Object(l.a)(Object(l.a)({}, Object.fromEntries(n)), e));
            return a(t);
          };
        },
        ae = n(193),
        re = function (e) {
          var t = Object(a.useRef)(e),
            n = Object(N.c)(),
            r = Object(c.a)(n, 2),
            i = r[0],
            o = r[1],
            u = Object(a.useCallback)(
              function (e) {
                o(m(e));
              },
              [o]
            );
          return Object(a.useMemo)(
            function () {
              return [
                t.current.reduce(function (e, t) {
                  return Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    Object(ae.a)({}, t, i.get(t) || "")
                  );
                }, {}),
                u,
              ];
            },
            [t, i, u]
          );
        },
        ce = function () {
          var e = re(["name", "personId"]),
            t = Object(c.a)(e, 2),
            n = t[0],
            r = t[1];
          return [
            Object(a.useMemo)(
              function () {
                return Object(l.a)(
                  Object(l.a)({}, n),
                  {},
                  { personId: Number(n.personId) || void 0 }
                );
              },
              [n]
            ),
            r,
          ];
        },
        le = function () {
          var e = ce();
          return ["projects", Object(c.a)(e, 1)[0]];
        },
        ie = function () {
          var e = re(["projectCreate"]),
            t = Object(c.a)(e, 2),
            n = t[0].projectCreate,
            r = t[1],
            l = re(["editingProjectId"]),
            i = Object(c.a)(l, 2),
            o = i[0].editingProjectId,
            u = i[1],
            d = ne(),
            m = J(Number(o)),
            s = m.data,
            f = m.isLoading,
            b = Object(a.useCallback)(
              function () {
                r({ projectCreate: !0 });
              },
              [r]
            ),
            p = Object(a.useCallback)(
              function () {
                return d({ projectCreate: "", editingProjectId: "" });
              },
              [d]
            );
          return {
            projectModalOpen: "true" === n || Boolean(o),
            open: b,
            close: p,
            startEdit: function (e) {
              return u({ editingProjectId: e });
            },
            editingProject: s,
            isLoading: f,
          };
        },
        oe = Object(a.memo)(function (e) {
          var t = e.list,
            n = e.users,
            c = e.loading,
            l = W(le()).mutate,
            i = Object(a.useCallback)(
              function (e) {
                return function (t) {
                  return l({ id: e, pin: t });
                };
              },
              [l]
            );
          return r.a.createElement(M, {
            loading: c,
            columns: [
              {
                title: r.a.createElement(X, { checked: !0, disabled: !0 }),
                render: function (e, t) {
                  return r.a.createElement(X, {
                    checked: t.pin,
                    onCheckedChange: i(t.id),
                  });
                },
              },
              {
                title: "\u540d\u79f0",
                dataIndex: "name",
                render: function (e, t) {
                  return r.a.createElement(N.b, { to: String(t.id) }, t.name);
                },
              },
              { title: "\u90e8\u95e8", dataIndex: "organization" },
              {
                title: "\u8d1f\u8d23\u4eba",
                render: function (e, t) {
                  var a;
                  return r.a.createElement(
                    "span",
                    null,
                    (null ===
                      (a = n.find(function (e) {
                        return e.id === t.personId;
                      })) || void 0 === a
                      ? void 0
                      : a.name) || "\u672a\u77e5"
                  );
                },
              },
              {
                title: "\u521b\u5efa\u65f6\u95f4",
                render: function (e, t) {
                  return r.a.createElement(
                    "span",
                    null,
                    t.created ? S()(t.created).format("YYYY-MM-DD") : "\u65e0"
                  );
                },
              },
              {
                render: function (e, t) {
                  return r.a.createElement(ue, { project: t });
                },
              },
            ],
            dataSource: t,
          });
        }),
        ue = function (e) {
          var t,
            n = e.project,
            a = ie().startEdit,
            c = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                var n = e.id;
                return t("projects/".concat(n), { method: "DELETE" });
              }, q(e));
            })(le()).mutate;
          return r.a.createElement(
            _.a,
            {
              overlay: r.a.createElement(
                ee.a,
                null,
                r.a.createElement(
                  ee.a.Item,
                  {
                    onClick:
                      ((t = n.id),
                      function () {
                        return a(t);
                      }),
                    key: "eidt",
                  },
                  "\u7f16\u8f91"
                ),
                r.a.createElement(
                  ee.a.Item,
                  {
                    onClick: function () {
                      return (function (e) {
                        $.a.confirm({
                          title:
                            "\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u9879\u76ee\u5417\uff1f",
                          content: "\u70b9\u51fb\u786e\u5b9a\u5220\u9664",
                          okText: "\u786e\u5b9a",
                          onOk: function () {
                            c({ id: e });
                          },
                        });
                      })(n.id);
                    },
                    key: "delete",
                  },
                  "\u5220\u9664"
                )
              ),
            },
            r.a.createElement(te.a, { type: "link" }, "...")
          );
        },
        de = oe,
        me = function (e, t, n) {
          var r = Object(a.useState)(e),
            l = Object(c.a)(r, 2),
            i = l[0],
            o = l[1],
            u = Object(a.useRef)(n);
          return (
            Object(a.useEffect)(
              function () {
                if (u.current) {
                  var n = setTimeout(function () {
                    o(e);
                  }, t || 300);
                  return function () {
                    clearTimeout(n);
                  };
                }
                u.current = !0;
              },
              [e, t]
            ),
            i
          );
        },
        se = n(468),
        fe = function () {
          var e = ce(),
            t = Object(c.a)(e, 2),
            n = t[0],
            a = t[1],
            l = f().data,
            i = me(n, 200),
            o = Q(i),
            u = o.isLoading,
            d = o.error,
            m = o.data,
            s = ie().open;
          return (
            Object(se.a)("\u9879\u76ee\u5217\u8868", !1),
            r.a.createElement(
              te.f,
              null,
              r.a.createElement(
                te.e,
                { between: !0, marginBottom: 2 },
                r.a.createElement("h1", null, "\u9879\u76ee\u5217\u8868"),
                r.a.createElement(
                  te.a,
                  { onClick: s, type: "link" },
                  "\u521b\u5efa\u9879\u76ee"
                )
              ),
              r.a.createElement(x, { param: n, setParam: a }),
              r.a.createElement(te.b, { error: d }),
              r.a.createElement(de, {
                loading: u,
                users: l || [],
                list: m || [],
              })
            )
          );
        },
        be = n(128);
      function pe() {
        return (pe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ve(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              c = Object.keys(e);
            for (a = 0; a < c.length; a++)
              (n = c[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (a = 0; a < c.length; a++)
            (n = c[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function Ee(e, t) {
        var n = e.title,
          r = e.titleId,
          c = ve(e, ["title", "titleId"]);
        return a.createElement(
          "svg",
          pe(
            {
              viewBox: "0 0 179 32",
              xmlns: "http://www.w3.org/2000/svg",
              focusable: "false",
              "aria-hidden": "true",
              className: "css-sq9aeg-Logo",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          g ||
            (g = a.createElement(
              "defs",
              null,
              a.createElement(
                "linearGradient",
                {
                  x1: "97.6553341%",
                  y1: "35.6591143%",
                  x2: "37.202032%",
                  y2: "75.4891864%",
                  id: "uid392-1",
                },
                a.createElement("stop", { stopColor: "#0052CC", offset: "7%" }),
                a.createElement("stop", {
                  stopColor: "#2684FF",
                  offset: "100%",
                })
              ),
              a.createElement(
                "linearGradient",
                {
                  x1: "8.43371138%",
                  y1: "60.1495759%",
                  x2: "64.1161517%",
                  y2: "23.5790285%",
                  id: "uid392-2",
                },
                a.createElement("stop", { stopColor: "#0052CC", offset: "0%" }),
                a.createElement("stop", {
                  stopColor: "#2684FF",
                  offset: "100%",
                })
              )
            )),
          k ||
            (k = a.createElement(
              "g",
              { stroke: "none", strokeWidth: 1, fillRule: "nonzero" },
              a.createElement("path", {
                d:
                  "M11.3881081,27.9242105 C12.4881804,26.8071817 13.1062496,25.2917664 13.1062496,23.7115789 C13.1062496,22.1313915 12.4881804,20.6159762 11.3881081,19.4989474 L11.3881081,19.4989474 L3.74837838,11.7621053 L0.273513514,15.2926316 C-0.0900771727,15.6625064 -0.0900771727,16.2617042 0.273513514,16.6315789 L11.3881081,27.9242105 L11.3881081,27.9242105 Z",
                fill: "currentColor",
                fillRule: "nonzero",
              }),
              a.createElement("path", {
                d:
                  "M22.5027027,15.2926316 L11.3881081,4 L11.3881081,4 L11.3539189,4.03473684 L11.3539189,4.03473684 C9.08852466,6.36456187 9.09963243,10.1156459 11.3787838,12.4315789 L19.0247297,20.1652632 L22.5027027,16.6315789 C22.8662934,16.2617042 22.8662934,15.6625064 22.5027027,15.2926316 Z",
                fill: "currentColor",
                fillRule: "nonzero",
              }),
              a.createElement("path", {
                d:
                  "M11.3881081,12.4252632 C9.10895676,10.1093301 9.09784899,6.35824608 11.3632432,4.02842105 L3.43445946,12.0810526 L7.58067568,16.2936842 L11.3881081,12.4252632 Z",
                fill: "url(#uid392-1)",
                fillRule: "nonzero",
              }),
              a.createElement("path", {
                d:
                  "M15.1893243,15.6368421 L11.3881081,19.4989474 C12.4881804,20.6159762 13.1062496,22.1313915 13.1062496,23.7115789 C13.1062496,25.2917664 12.4881804,26.8071817 11.3881081,27.9242105 L19.3355405,19.8494737 L15.1893243,15.6368421 Z",
                fill: "url(#uid392-2)",
                fillRule: "nonzero",
              }),
              a.createElement("path", {
                d:
                  "M36.07,18.956 C36.07,20.646 35.394,21.842 33.418,21.842 C32.56,21.842 31.702,21.686 31,21.4 L31,23.662 C31.65,23.896 32.586,24.104 33.808,24.104 C37.032,24.104 38.41,21.946 38.41,18.8 L38.41,6.918 L36.07,6.918 L36.07,18.956 Z M41.894,7.568 C41.894,8.556 42.544,9.128 43.454,9.128 C44.364,9.128 45.014,8.556 45.014,7.568 C45.014,6.58 44.364,6.008 43.454,6.008 C42.544,6.008 41.894,6.58 41.894,7.568 Z M42.31,24 L44.546,24 L44.546,11 L42.31,11 L42.31,24 Z M47.926,24 L50.11,24 L50.11,16.33 C50.11,13.574 51.852,12.716 54.712,13.002 L54.712,10.818 C52.164,10.662 50.864,11.754 50.11,13.288 L50.11,11 L47.926,11 L47.926,24 Z M65.45,24 L65.45,21.66 C64.618,23.376 63.058,24.26 61.056,24.26 C57.598,24.26 55.856,21.322 55.856,17.5 C55.856,13.834 57.676,10.74 61.316,10.74 C63.214,10.74 64.67,11.598 65.45,13.288 L65.45,11 L67.686,11 L67.686,24 L65.45,24 Z M58.092,17.5 C58.092,20.62 59.34,22.18 61.654,22.18 C63.656,22.18 65.45,20.906 65.45,18.02 L65.45,16.98 C65.45,14.094 63.812,12.82 61.914,12.82 C59.392,12.82 58.092,14.484 58.092,17.5 Z M86.926,19.294 C86.926,16.226 84.898,15.056 81.284,14.146 C78.268,13.392 77.176,12.69 77.176,11.286 C77.176,9.726 78.502,8.946 80.738,8.946 C82.506,8.946 84.352,9.258 86.068,10.246 L86.068,7.906 C84.898,7.256 83.312,6.658 80.842,6.658 C76.864,6.658 74.836,8.634 74.836,11.286 C74.836,14.094 76.552,15.42 80.4,16.356 C83.65,17.136 84.586,17.942 84.586,19.45 C84.586,20.958 83.624,21.972 81.05,21.972 C78.788,21.972 76.344,21.374 74.758,20.542 L74.758,22.934 C76.084,23.61 77.618,24.26 80.92,24.26 C85.158,24.26 86.926,22.258 86.926,19.294 Z M95.09,24.26 C91.19,24.26 88.902,21.374 88.902,17.474 C88.902,13.574 91.19,10.74 95.09,10.74 C98.964,10.74 101.226,13.574 101.226,17.474 C101.226,21.374 98.964,24.26 95.09,24.26 Z M95.09,12.82 C92.308,12.82 91.086,15.004 91.086,17.474 C91.086,19.944 92.308,22.18 95.09,22.18 C97.846,22.18 99.042,19.944 99.042,17.474 C99.042,15.004 97.846,12.82 95.09,12.82 Z M106.92,9.622 C106.92,8.452 107.596,7.646 108.974,7.646 C109.494,7.646 109.988,7.698 110.378,7.776 L110.378,5.722 C109.988,5.618 109.546,5.514 108.87,5.514 C106.088,5.514 104.736,7.152 104.736,9.57 L104.736,11 L102.63,11 L102.63,13.08 L104.736,13.08 L104.736,24 L106.92,24 L106.92,13.08 L110.274,13.08 L110.274,11 L106.92,11 L106.92,9.622 Z M115.786,19.892 L115.786,13.08 L119.244,13.08 L119.244,11 L115.786,11 L115.786,8.244 L113.602,8.244 L113.602,11 L111.496,11 L111.496,13.08 L113.602,13.08 L113.602,19.944 C113.602,22.362 114.954,24 117.736,24 C118.412,24 118.854,23.896 119.244,23.792 L119.244,21.634 C118.854,21.712 118.36,21.816 117.84,21.816 C116.462,21.816 115.786,21.036 115.786,19.892 Z M125.432,24 L128.292,24 L130.528,17.708 L131.724,13.704 L132.92,17.708 L135.156,24 L138.016,24 L142.8,11 L140.33,11 L136.586,22.024 L132.79,11 L130.658,11 L126.862,22.024 L123.118,11 L120.648,11 L125.432,24 Z M153.538,24 L153.538,21.66 C152.706,23.376 151.146,24.26 149.144,24.26 C145.686,24.26 143.944,21.322 143.944,17.5 C143.944,13.834 145.764,10.74 149.404,10.74 C151.302,10.74 152.758,11.598 153.538,13.288 L153.538,11 L155.774,11 L155.774,24 L153.538,24 Z M146.18,17.5 C146.18,20.62 147.428,22.18 149.742,22.18 C151.744,22.18 153.538,20.906 153.538,18.02 L153.538,16.98 C153.538,14.094 151.9,12.82 150.002,12.82 C147.48,12.82 146.18,14.484 146.18,17.5 Z M159.154,24 L161.338,24 L161.338,16.33 C161.338,13.574 163.08,12.716 165.94,13.002 L165.94,10.818 C163.392,10.662 162.092,11.754 161.338,13.288 L161.338,11 L159.154,11 L159.154,24 Z M178.108,23.48 C177.042,24.052 175.404,24.26 174.078,24.26 C169.216,24.26 167.084,21.452 167.084,17.474 C167.084,13.548 169.268,10.74 173.22,10.74 C177.224,10.74 178.836,13.522 178.836,17.474 L178.836,18.488 L169.346,18.488 C169.658,20.698 171.088,22.128 174.156,22.128 C175.664,22.128 176.938,21.842 178.108,21.426 L178.108,23.48 Z M173.116,12.768 C170.75,12.768 169.554,14.302 169.32,16.564 L176.574,16.564 C176.444,14.146 175.352,12.768 173.116,12.768 Z",
                fill: "inherit",
                fillRule: "evenodd",
              })
            ))
        );
      }
      var je,
        Oe,
        Ce,
        ge,
        ke,
        he,
        ye,
        Ie,
        Le,
        xe,
        we,
        Me,
        Te,
        Se,
        Ne,
        Pe = a.forwardRef(Ee),
        Ze = (n.p, n(113)),
        Fe = n(114),
        Re = Fe.a.div(
          je ||
            (je = Object(Ze.a)([
              "\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 6rem 1fr;\n",
            ]))
        ),
        De = Object(Fe.a)(te.e)(
          Oe ||
            (Oe = Object(Ze.a)([
              "\n  padding: 3.2rem;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);\n  z-index: 1;\n",
            ]))
        ),
        ze = Object(Fe.a)(te.e)(Ce || (Ce = Object(Ze.a)([""]))),
        Ae = Fe.a.div(ge || (ge = Object(Ze.a)([""]))),
        Ve = Fe.a.main(
          ke ||
            (ke = Object(Ze.a)(["\n  display: flex;\n  overflow: hidden;\n"]))
        ),
        Ye = n(268),
        Be = n(454),
        qe = function (e) {
          var t = Object(s.b)();
          return Object(d.a)(["tasks", e], function () {
            return t("tasks", { data: e });
          });
        },
        He = function () {
          var e = Object(s.b)();
          return Object(d.a)(["taskTypes"], function () {
            return e("taskTypes");
          });
        },
        Ke = function (e) {
          var t = Object(s.b)();
          return Object(P.a)(
            function (e) {
              return t("tasks/reorder", { data: e, method: "POST" });
            },
            (function (e) {
              return B(e, function (e, t) {
                return A(Object(l.a)({ list: t }, e)).map(function (t) {
                  return t.id === e.fromId
                    ? Object(l.a)(
                        Object(l.a)({}, t),
                        {},
                        { kanbanId: e.toKanbanId }
                      )
                    : t;
                });
              });
            })(e)
          );
        },
        Qe = function () {
          var e,
            t =
              null === (e = Object(Be.g)().pathname.match(/projects\/(\d+)/)) ||
              void 0 === e
                ? void 0
                : e[1];
          return Number(t);
        },
        We = function () {
          return J(Qe());
        },
        Ge = function () {
          return { projectId: Qe() };
        },
        Je = function () {
          return ["kanbans", Ge()];
        },
        Ue = function () {
          return ["tasks", Xe()];
        },
        Xe = function () {
          var e = re(["name", "typeId", "processorId", "tagId"]),
            t = Object(c.a)(e, 2),
            n = t[0],
            r = (t[1], Qe()),
            l = me(n.name, 200);
          return Object(a.useMemo)(
            function () {
              return {
                projectId: r,
                typeId: Number(n.typeId) || void 0,
                processorId: Number(n.processorId) || void 0,
                tagId: Number(n.tagId) || void 0,
                name: l,
              };
            },
            [r, n, l]
          );
        },
        $e = function () {
          var e = re(["editingTaskId"]),
            t = Object(c.a)(e, 2),
            n = t[0].editingTaskId,
            r = t[1],
            l = (function (e) {
              var t = Object(s.b)();
              return Object(d.a)(
                ["task", { id: e }],
                function () {
                  return t("tasks/".concat(e));
                },
                { enabled: Boolean(e) }
              );
            })(Number(n)),
            i = l.data,
            o = l.isLoading;
          return {
            editingTaskId: n,
            editingTask: i,
            startEdit: Object(a.useCallback)(
              function (e) {
                return r({ editingTaskId: e });
              },
              [r]
            ),
            close: Object(a.useCallback)(
              function () {
                r({ editingTaskId: "" });
              },
              [r]
            ),
            isLoading: o,
          };
        },
        _e = n.p + "static/media/task.69774797.svg",
        et = n.p + "static/media/bug.5d8e8fd5.svg",
        tt = Fe.a.div(
          he ||
            (he = Object(Ze.a)([
              "\n  min-width: 27rem;\n  border-radius: 6px;\n  background-color: rgb(244, 245, 247);\n  display: flex;\n  flex-direction: column;\n  padding: 0.7rem 0.7rem 1rem;\n  margin-right: 1.5rem;\n",
            ]))
        ),
        nt = Fe.a.div(
          ye ||
            (ye = Object(Ze.a)([
              "\n  overflow: scroll;\n  flex: 1;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
            ]))
        ),
        at = n(675),
        rt = function (e) {
          var t = e.name,
            n = e.keyword;
          if (!n) return r.a.createElement(r.a.Fragment, null, t);
          var a = t.split(n);
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.map(function (e, t) {
              return r.a.createElement(
                "span",
                { key: t },
                e,
                t === a.length - 1
                  ? null
                  : r.a.createElement(
                      "span",
                      { style: { color: "#257AFD" } },
                      n
                    )
              );
            })
          );
        },
        ct = function (e) {
          var t = Object(s.b)();
          return Object(d.a)(["kanbans", e], function () {
            return t("kanbans", { data: e });
          });
        },
        lt = function (e) {
          var t = Object(s.b)();
          return Object(P.a)(
            function (e) {
              return t("kanbans/reorder", { data: e, method: "POST" });
            },
            (function (e) {
              return B(e, function (e, t) {
                return A(Object(l.a)({ list: t }, e));
              });
            })(e)
          );
        },
        it = function (e) {
          var t = e.kanbanId,
            n = Object(a.useState)(""),
            l = Object(c.a)(n, 2),
            i = l[0],
            u = l[1],
            d = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                return t("tasks", { data: e, method: "POST" });
              }, K(e));
            })(Ue()).mutateAsync,
            m = Object(a.useState)(!1),
            f = Object(c.a)(m, 2),
            b = f[0],
            p = f[1],
            v = Qe(),
            E = Object(a.useCallback)(
              Object(D.a)(
                R.a.mark(function e() {
                  return R.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            p(!1),
                            (e.next = 3),
                            d({ projectId: v, name: i, kanbanId: t })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [v, i, t, d]
            ),
            j = Object(a.useCallback)(function () {
              return p(function (e) {
                return !e;
              });
            }, []),
            O = Object(a.useCallback)(function (e) {
              u(e.target.value);
            }, []);
          return (
            Object(a.useEffect)(
              function () {
                b || u("");
              },
              [b]
            ),
            b
              ? r.a.createElement(
                  at.a,
                  null,
                  r.a.createElement(o.a, {
                    onBlur: j,
                    placeholder: "\u9700\u8981\u505a\u4ec0\u4e48",
                    autoFocus: !0,
                    onPressEnter: E,
                    value: i,
                    onChange: O,
                  })
                )
              : r.a.createElement(
                  Ye.a,
                  { block: !0, onClick: j },
                  "+\u521b\u5efa\u4e8b\u52a1"
                )
          );
        },
        ot = n(517),
        ut = function (e) {
          var t = e.children,
            n = Object(u.a)(e, ["children"]);
          return r.a.createElement(ot.c, n, function (e) {
            return r.a.isValidElement(t)
              ? r.a.cloneElement(
                  t,
                  Object(l.a)(
                    Object(l.a)({}, e.droppableProps),
                    {},
                    { ref: e.innerRef, provided: e }
                  )
                )
              : r.a.createElement("div", null);
          });
        },
        dt = r.a.forwardRef(function (e, t) {
          var n,
            a = e.children,
            c = Object(u.a)(e, ["children"]);
          return r.a.createElement(
            "div",
            Object.assign({ ref: t }, c),
            a,
            null === (n = c.provided) || void 0 === n ? void 0 : n.placeholder
          );
        }),
        mt = function (e) {
          var t = e.children,
            n = Object(u.a)(e, ["children"]);
          return r.a.createElement(ot.b, n, function (e) {
            return r.a.isValidElement(t)
              ? r.a.cloneElement(
                  t,
                  Object(l.a)(
                    Object(l.a)(
                      Object(l.a)({}, e.draggableProps),
                      e.dragHandleProps
                    ),
                    {},
                    { ref: e.innerRef }
                  )
                )
              : r.a.createElement("div", null);
          });
        },
        st = Object(a.memo)(function (e) {
          var t,
            n = e.id,
            a = He().data,
            c =
              null === a ||
              void 0 === a ||
              null ===
                (t = a.find(function (e) {
                  return e.id === n;
                })) ||
              void 0 === t
                ? void 0
                : t.name;
          return c
            ? r.a.createElement("img", {
                src: "task" === c ? _e : et,
                alt: "task",
              })
            : null;
        }),
        ft = Object(a.memo)(function (e) {
          var t = e.task,
            n = $e().startEdit,
            a = Xe().name;
          return r.a.createElement(
            at.a,
            {
              onClick: function () {
                return n(t.id);
              },
              style: { marginBottom: "0.5rem", cursor: "pointer" },
              key: t.id,
            },
            r.a.createElement(
              "p",
              null,
              r.a.createElement(rt, { keyword: a, name: t.name })
            ),
            r.a.createElement(st, { id: t.typeId })
          );
        }),
        bt = Object(a.memo)(function (e) {
          var t = e.kanban,
            n = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                var n = e.id;
                return t("kanbans/".concat(n), { method: "DELETE" });
              }, q(e));
            })(Je()).mutateAsync,
            a = r.a.createElement(
              ee.a,
              null,
              r.a.createElement(
                ee.a.Item,
                null,
                r.a.createElement(
                  Ye.a,
                  {
                    type: "link",
                    onClick: function () {
                      $.a.confirm({
                        okText: "\u786e\u5b9a",
                        cancelText: "\u53d6\u6d88",
                        title: "\u786e\u5b9a\u5220\u9664\u770b\u677f\u5417",
                        onOk: function () {
                          return n({ id: t.id });
                        },
                      });
                    },
                  },
                  "\u5220\u9664"
                )
              )
            );
          return r.a.createElement(
            _.a,
            { overlay: a },
            r.a.createElement(Ye.a, { type: "link" }, "...")
          );
        }),
        pt = r.a.forwardRef(function (e, t) {
          var n = e.kanban,
            a = Object(u.a)(e, ["kanban"]),
            c = qe(Xe()).data,
            l =
              null === c || void 0 === c
                ? void 0
                : c.filter(function (e) {
                    return e.kanbanId === n.id;
                  });
          return r.a.createElement(
            tt,
            Object.assign({}, a, { ref: t }),
            r.a.createElement(
              te.e,
              { between: !0 },
              r.a.createElement("h3", null, n.name),
              r.a.createElement(bt, { kanban: n, key: n.id })
            ),
            r.a.createElement(
              nt,
              null,
              r.a.createElement(
                ut,
                {
                  type: "ROW",
                  direction: "vertical",
                  droppableId: String(n.id),
                },
                r.a.createElement(
                  dt,
                  { style: { minHeight: "1rem" } },
                  null === l || void 0 === l
                    ? void 0
                    : l.map(function (e, t) {
                        return r.a.createElement(
                          mt,
                          { key: e.id, index: t, draggableId: "task" + e.id },
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(ft, { key: e.id, task: e })
                          )
                        );
                      })
                )
              ),
              r.a.createElement(it, { kanbanId: n.id })
            )
          );
        }),
        vt = function (e) {
          var t = He().data;
          return r.a.createElement(I, Object.assign({ options: t || [] }, e));
        },
        Et = function () {
          var e = Xe(),
            t = ne(),
            n = Object(a.useCallback)(
              function () {
                t({
                  typeId: void 0,
                  processorId: void 0,
                  tagId: void 0,
                  name: void 0,
                });
              },
              [t]
            ),
            c = function (e) {
              return function (n) {
                var a = n.value;
                return t(Object(ae.a)({}, e, a));
              };
            };
          return r.a.createElement(
            te.e,
            { marginBottom: 4, gap: !0 },
            r.a.createElement(o.a, {
              style: { width: "20rem" },
              placeholder: "\u4efb\u52a1\u540d",
              value: e.name,
              onChange: function (e) {
                return t({ name: e.target.value });
              },
            }),
            r.a.createElement(L, {
              defaultOptionName: "\u7ecf\u529e\u4eba",
              personId: e.processorId,
              onChange: c("processorId"),
            }),
            r.a.createElement(vt, {
              defaultOptionName: "\u7c7b\u578b",
              value: e.typeId,
              onChange: c("typeId"),
            }),
            r.a.createElement(
              Ye.a,
              { type: "primary", onClick: n },
              "\u91cd\u7f6e"
            )
          );
        },
        jt = function () {
          var e = Object(a.useState)(""),
            t = Object(c.a)(e, 2),
            n = t[0],
            l = t[1],
            i = Qe(),
            u = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                return t("kanbans", { data: e, method: "POST" });
              }, K(e));
            })(Je()).mutateAsync,
            d = Object(a.useCallback)(
              Object(D.a)(
                R.a.mark(function e() {
                  return R.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u({ name: n, projectId: i });
                        case 2:
                          l("");
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n, i, u]
            ),
            m = Object(a.useCallback)(function (e) {
              l(e.target.value);
            }, []);
          return r.a.createElement(
            tt,
            null,
            r.a.createElement(o.a, {
              size: "large",
              placeholder: "\u65b0\u5efa\u770b\u677f\u540d\u79f0",
              onPressEnter: d,
              value: n,
              onChange: m,
            })
          );
        },
        Ot = n(598),
        Ct = { labelCol: { span: 8 }, wrapperCol: { span: 16 } },
        gt = function () {
          var e = Object(Ot.useForm)(),
            t = Object(c.a)(e, 1)[0],
            n = $e(),
            u = n.editingTaskId,
            d = n.editingTask,
            m = n.close,
            f = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                return t("tasks/".concat(e.id), { method: "PATCH", data: e });
              }, H(e));
            })(Ue()),
            b = f.mutateAsync,
            p = f.isLoading,
            v = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                var n = e.id;
                return t("tasks/".concat(n), { method: "DELETE" });
              }, q(e));
            })(Ue()).mutate,
            E = Object(a.useCallback)(
              function () {
                m(), t.resetFields();
              },
              [m, t]
            ),
            j = Object(a.useCallback)(
              Object(D.a)(
                R.a.mark(function e() {
                  var n, a;
                  return R.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ((n = t.getFieldsValue()).typeId = n.typeId.value),
                            (n.processorId = n.processorId.value),
                            (a = Object(l.a)(Object(l.a)({}, d), n)),
                            (e.next = 6),
                            b(a)
                          );
                        case 6:
                          m();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [b, m, d, t]
            ),
            O = Object(a.useCallback)(
              function () {
                m(),
                  $.a.confirm({
                    okText: "\u786e\u5b9a",
                    cancelText: "\u53d6\u6d88",
                    title: "\u786e\u5b9a\u5220\u9664\u4efb\u52a1\u5417",
                    onOk: function () {
                      return v({ id: Number(u) });
                    },
                  });
              },
              [u, v, m]
            );
          return (
            Object(a.useEffect)(
              function () {
                t.setFieldsValue(d);
              },
              [t, d]
            ),
            r.a.createElement(
              $.a,
              {
                forceRender: !0,
                onCancel: E,
                onOk: j,
                okText: "\u786e\u8ba4",
                cancelText: "\u53d6\u6d88",
                confirmLoading: p,
                title: "\u7f16\u8f91\u4efb\u52a1",
                visible: !!u,
              },
              r.a.createElement(
                i.a,
                Object.assign({}, Ct, { initialValues: d, form: t }),
                r.a.createElement(
                  i.a.Item,
                  {
                    label: "\u4efb\u52a1\u540d",
                    name: "name",
                    rules: [
                      {
                        required: !0,
                        message: "\u8bf7\u8f93\u5165\u4efb\u52a1\u540d",
                      },
                    ],
                  },
                  r.a.createElement(o.a, null)
                ),
                r.a.createElement(
                  i.a.Item,
                  { label: "\u7ecf\u529e\u4eba", name: "processorId" },
                  r.a.createElement(L, {
                    personId:
                      (null === d || void 0 === d ? void 0 : d.processorId) ||
                      "",
                    defaultOptionName: "\u7ecf\u529e\u4eba",
                  })
                ),
                r.a.createElement(
                  i.a.Item,
                  { label: "\u7c7b\u578b", name: "typeId" },
                  r.a.createElement(vt, {
                    value:
                      (null === d || void 0 === d ? void 0 : d.typeId) || "",
                  })
                )
              ),
              r.a.createElement(
                "div",
                { style: { textAlign: "right" } },
                r.a.createElement(
                  Ye.a,
                  {
                    onClick: O,
                    style: { fontSize: "14px" },
                    size: "small",
                    danger: !0,
                    type: "link",
                  },
                  "\u5220\u9664"
                )
              )
            )
          );
        },
        kt = function () {
          Object(se.a)("\u770b\u677f\u5217\u8868");
          var e = We().data,
            t = ct(Ge()),
            n = t.data,
            a = t.isLoading,
            c = qe(Xe()).isLoading || a,
            l = ht();
          return r.a.createElement(
            ot.a,
            { onDragEnd: l },
            r.a.createElement(
              te.f,
              null,
              r.a.createElement(
                "h1",
                null,
                null === e || void 0 === e ? void 0 : e.name,
                "\u770b\u677f"
              ),
              r.a.createElement(Et, null),
              c
                ? r.a.createElement(w.a, { size: "large" })
                : r.a.createElement(
                    yt,
                    null,
                    r.a.createElement(
                      ut,
                      {
                        type: "COLUMN",
                        direction: "horizontal",
                        droppableId: "kanban",
                      },
                      r.a.createElement(
                        dt,
                        { style: { display: "flex" } },
                        null === n || void 0 === n
                          ? void 0
                          : n.map(function (e, t) {
                              return r.a.createElement(
                                mt,
                                {
                                  key: e.id,
                                  draggableId: "kanban" + e.id,
                                  index: t,
                                },
                                r.a.createElement(pt, { kanban: e, key: e.id })
                              );
                            })
                      )
                    ),
                    r.a.createElement(jt, null)
                  ),
              r.a.createElement(gt, null)
            )
          );
        },
        ht = function () {
          var e = ct(Ge()).data,
            t = lt(Je()).mutate,
            n = Ke(Ue()).mutate,
            r = qe(Xe()).data,
            c = void 0 === r ? [] : r;
          return Object(a.useCallback)(
            function (a) {
              var r = a.source,
                l = a.destination,
                i = a.type;
              if (l) {
                if ("COLUMN" === i) {
                  var o = null === e || void 0 === e ? void 0 : e[r.index].id,
                    u = null === e || void 0 === e ? void 0 : e[l.index].id;
                  if (!o || !u || o === u) return;
                  var d = l.index > r.index ? "after" : "before";
                  t({ fromId: o, referenceId: u, type: d });
                }
                if ("ROW" === i) {
                  var m = +r.droppableId,
                    s = +l.droppableId;
                  if (m === s) return;
                  var f = c.filter(function (e) {
                      return e.kanbanId === m;
                    })[r.index],
                    b = c.filter(function (e) {
                      return e.kanbanId === s;
                    })[l.index];
                  if (
                    (null === f || void 0 === f ? void 0 : f.id) ===
                    (null === b || void 0 === b ? void 0 : b.id)
                  )
                    return;
                  n({
                    fromId: null === f || void 0 === f ? void 0 : f.id,
                    referenceId: null === b || void 0 === b ? void 0 : b.id,
                    fromKanbanId: m,
                    toKanbanId: s,
                    type: m === s && l.index > r.index ? "after" : "before",
                  });
                }
              }
            },
            [e, t, c, n]
          );
        },
        yt = Object(Fe.a)("div")(
          Ie ||
            (Ie = Object(Ze.a)([
              "\n  display: flex;\n  overflow-x: scroll;\n  flex: 1;\n",
            ]))
        ),
        It = n(674),
        Lt = function () {
          return { projectId: Qe() };
        },
        xt = function () {
          return ["epics", Lt()];
        },
        wt = n(682),
        Mt = n(486),
        Tt = function (e) {
          var t = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                return t("epics", { data: e, method: "POST" });
              }, K(e));
            })(xt()),
            n = t.mutate,
            u = t.isLoading,
            d = t.error,
            m = Object(Mt.a)(),
            f = Object(c.a)(m, 1)[0],
            b = Qe(),
            p = (function () {
              var t = Object(D.a)(
                R.a.mark(function t(a) {
                  return R.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            n(
                              Object(l.a)(
                                Object(l.a)({}, a),
                                {},
                                { projectId: b }
                              )
                            )
                          );
                        case 2:
                          e.onClose();
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              function () {
                f.resetFields();
              },
              [f, e.visible]
            ),
            r.a.createElement(
              wt.a,
              {
                visible: e.visible,
                onClose: e.onClose,
                forceRender: !0,
                destroyOnClose: !0,
                width: "100%",
              },
              r.a.createElement(
                St,
                null,
                u
                  ? r.a.createElement(w.a, { size: "large" })
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "h1",
                        null,
                        "\u521b\u5efa\u4efb\u52a1\u7ec4"
                      ),
                      r.a.createElement(te.b, { error: d }),
                      r.a.createElement(
                        i.a,
                        {
                          form: f,
                          layout: "vertical",
                          style: { width: "40rem" },
                          onFinish: p,
                        },
                        r.a.createElement(
                          i.a.Item,
                          {
                            label: "\u540d\u79f0",
                            name: "name",
                            rules: [
                              {
                                required: !0,
                                message:
                                  "\u8bf7\u8f93\u5165\u4efb\u52a1\u7ec4\u540d",
                              },
                            ],
                          },
                          r.a.createElement(o.a, {
                            placeholder:
                              "\u8bf7\u8f93\u5165\u4efb\u52a1\u7ec4\u540d\u79f0",
                          })
                        ),
                        r.a.createElement(
                          i.a.Item,
                          { style: { textAlign: "right" } },
                          r.a.createElement(
                            Ye.a,
                            { loading: u, type: "primary", htmlType: "submit" },
                            "\u63d0\u4ea4"
                          )
                        )
                      )
                    )
              )
            )
          );
        },
        St = Fe.a.div(
          Le ||
            (Le = Object(Ze.a)([
              "\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Nt = function () {
          var e = We().data,
            t = (function (e) {
              var t = Object(s.b)();
              return Object(d.a)(["epics", e], function () {
                return t("epics", { data: e });
              });
            })(Lt()).data,
            n = qe({ projectId: null === e || void 0 === e ? void 0 : e.id })
              .data,
            l = (function (e) {
              var t = Object(s.b)();
              return Object(P.a)(function (e) {
                var n = e.id;
                return t("epics/".concat(n), { method: "DELETE" });
              }, q(e));
            })(xt()).mutate,
            i = Object(a.useState)(!1),
            o = Object(c.a)(i, 2),
            u = o[0],
            m = o[1];
          return r.a.createElement(
            te.f,
            null,
            r.a.createElement(
              te.e,
              { between: !0 },
              r.a.createElement(
                "h1",
                null,
                null === e || void 0 === e ? void 0 : e.name,
                "\u4efb\u52a1\u7ec4"
              ),
              r.a.createElement(
                Ye.a,
                {
                  onClick: function () {
                    return m(!0);
                  },
                  type: "link",
                },
                "\u521b\u5efa\u4efb\u52a1\u7ec4"
              )
            ),
            r.a.createElement(It.b, {
              style: { overflow: "scroll" },
              dataSource: t,
              itemLayout: "vertical",
              renderItem: function (t) {
                return r.a.createElement(
                  It.b.Item,
                  null,
                  r.a.createElement(It.b.Item.Meta, {
                    title: r.a.createElement(
                      te.e,
                      { between: !0 },
                      r.a.createElement("span", null, t.name),
                      r.a.createElement(
                        Ye.a,
                        {
                          onClick: function () {
                            return (function (e) {
                              $.a.confirm({
                                title: "\u786e\u5b9a\u5220\u9664\u9879\u76ee\u7ec4\uff1a".concat(
                                  e.name
                                ),
                                content: "\u70b9\u51fb\u786e\u5b9a\u5220\u9664",
                                okText: "\u786e\u5b9a",
                                onOk: function () {
                                  l({ id: e.id });
                                },
                              });
                            })(t);
                          },
                          type: "link",
                        },
                        "\u5220\u9664"
                      )
                    ),
                    description: r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        null,
                        "\u5f00\u59cb\u65f6\u95f4\uff1a",
                        S()(t.start).format("YYYY-MM-DD")
                      ),
                      r.a.createElement(
                        "div",
                        null,
                        "\u7ed3\u675f\u65f6\u95f4\uff1a",
                        S()(t.end).format("YYYY-MM-DD")
                      )
                    ),
                  }),
                  r.a.createElement(
                    "div",
                    null,
                    null === n || void 0 === n
                      ? void 0
                      : n
                          .filter(function (e) {
                            return e.epicId === t.id;
                          })
                          .map(function (t) {
                            return r.a.createElement(
                              "div",
                              { key: t.id },
                              r.a.createElement(
                                N.b,
                                {
                                  to: "/projects/"
                                    .concat(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.id,
                                      "/kanban?editingTaskId="
                                    )
                                    .concat(t.id),
                                },
                                t.name
                              )
                            );
                          })
                  )
                );
              },
            }),
            r.a.createElement(Tt, {
              onClose: function () {
                return m(!1);
              },
              visible: u,
            })
          );
        },
        Pt = function () {
          var e = (function () {
            var e = Object(Be.g)().pathname.split("/");
            return e[e.length - 1];
          })();
          Object(Be.i)().projectId;
          return r.a.createElement(
            Rt,
            null,
            r.a.createElement(
              Zt,
              null,
              r.a.createElement(
                ee.a,
                { mode: "inline", selectedKeys: [e] },
                r.a.createElement(
                  ee.a.Item,
                  { key: "kanban" },
                  r.a.createElement(N.b, { to: "kanban" }, "\u770b\u677f")
                ),
                r.a.createElement(
                  ee.a.Item,
                  { key: "epic" },
                  r.a.createElement(N.b, { to: "epic" }, "\u4efb\u52a1\u7ec4")
                )
              )
            ),
            r.a.createElement(
              Ft,
              null,
              r.a.createElement(
                Be.d,
                null,
                r.a.createElement(Be.b, {
                  path: "/kanban",
                  element: r.a.createElement(kt, null),
                }),
                r.a.createElement(Be.b, {
                  path: "/epic",
                  element: r.a.createElement(Nt, null),
                }),
                r.a.createElement(Be.a, {
                  to: window.location.pathname + "/kanban",
                  replace: !0,
                })
              )
            )
          );
        },
        Zt = Fe.a.aside(
          xe ||
            (xe = Object(Ze.a)([
              "\n  background-color: rgb(244, 245, 247);\n  display: flex;\n",
            ]))
        ),
        Ft = Fe.a.div(
          we ||
            (we = Object(Ze.a)([
              "\n  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  overflow: hidden;\n",
            ]))
        ),
        Rt = Fe.a.div(
          Me ||
            (Me = Object(Ze.a)([
              "\n  width: 100%;\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n",
            ]))
        ),
        Dt = function () {
          var e = ie(),
            t = e.projectModalOpen,
            n = e.close,
            u = e.editingProject,
            d = e.isLoading,
            m = Object(a.useState)(function () {
              return u ? u.personId : "";
            }),
            s = Object(c.a)(m, 2),
            f = s[0],
            b = s[1],
            p = (u ? W : G)(le()),
            v = p.mutateAsync,
            E = p.error,
            j = p.isLoading,
            O = Object(Mt.a)(),
            C = Object(c.a)(O, 1)[0],
            g = Object(a.useCallback)(
              function () {
                C.resetFields(), n();
              },
              [C, n]
            ),
            k = Object(a.useCallback)(function (e) {
              var t = e.value;
              b(t);
            }, []);
          return (
            Object(a.useEffect)(
              function () {
                C.setFieldsValue(u), b(u ? u.personId : "");
              },
              [u, C]
            ),
            r.a.createElement(
              wt.a,
              { forceRender: !0, onClose: g, visible: t, width: "100%" },
              r.a.createElement(
                zt,
                null,
                d
                  ? r.a.createElement(w.a, { size: "large" })
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "h1",
                        null,
                        u
                          ? "\u7f16\u8f91\u9879\u76ee"
                          : "\u521b\u5efa\u9879\u76ee"
                      ),
                      r.a.createElement(te.b, { error: E }),
                      r.a.createElement(
                        i.a,
                        {
                          form: C,
                          layout: "vertical",
                          style: { width: "40rem" },
                          onFinish: function (e) {
                            v(
                              Object(l.a)(
                                Object(l.a)(Object(l.a)({}, u), e),
                                {},
                                { personId: f }
                              )
                            ).then(function () {
                              C.resetFields(), n();
                            });
                          },
                        },
                        r.a.createElement(
                          i.a.Item,
                          {
                            label: "\u540d\u79f0",
                            name: "name",
                            rules: [
                              {
                                required: !0,
                                message: "\u8bf7\u8f93\u5165\u9879\u76ee\u540d",
                              },
                            ],
                          },
                          r.a.createElement(o.a, {
                            placeholder:
                              "\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",
                          })
                        ),
                        r.a.createElement(
                          i.a.Item,
                          {
                            label: "\u90e8\u95e8",
                            name: "organization",
                            rules: [
                              {
                                required: !0,
                                message: "\u8bf7\u8f93\u5165\u90e8\u95e8\u540d",
                              },
                            ],
                          },
                          r.a.createElement(o.a, {
                            placeholder: "\u8bf7\u8f93\u5165\u90e8\u95e8\u540d",
                          })
                        ),
                        r.a.createElement(
                          i.a.Item,
                          { label: "\u8d1f\u8d23\u4eba", name: "personId" },
                          r.a.createElement(L, { personId: f, onChange: k })
                        ),
                        r.a.createElement(
                          i.a.Item,
                          { style: { textAlign: "right" } },
                          r.a.createElement(
                            Ye.a,
                            { loading: j, type: "primary", htmlType: "submit" },
                            "\u63d0\u4ea4"
                          )
                        )
                      )
                    )
              )
            )
          );
        },
        zt = Fe.a.div(
          Te ||
            (Te = Object(Ze.a)([
              "\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        At = n(263),
        Vt = n(672),
        Yt = n(686),
        Bt = Fe.a.div(Se || (Se = Object(Ze.a)(["\n  min-width: 30rem;\n"]))),
        qt = Object(a.memo)(function () {
          var e = ie().open,
            t = Q(),
            n = t.data,
            a = t.refetch,
            c =
              null === n || void 0 === n
                ? void 0
                : n.filter(function (e) {
                    return e.pin;
                  }),
            l = r.a.createElement(
              Bt,
              null,
              r.a.createElement(At.a.Text, { type: "secondary" }),
              r.a.createElement(
                It.b,
                null,
                null === c || void 0 === c
                  ? void 0
                  : c.map(function (e) {
                      return r.a.createElement(
                        It.b.Item,
                        { key: e.id },
                        r.a.createElement(It.b.Item.Meta, { title: e.name })
                      );
                    })
              ),
              r.a.createElement(Vt.a, null),
              r.a.createElement(
                te.a,
                { onClick: e, type: "link" },
                "\u521b\u5efa\u9879\u76ee"
              )
            );
          return r.a.createElement(
            Yt.a,
            {
              onVisibleChange: function () {
                return a();
              },
              placement: "bottom",
              content: l,
            },
            r.a.createElement("span", null, "\u9879\u76ee")
          );
        }),
        Ht = function () {
          var e = (function (e) {
              var t = Object(s.b)();
              return Object(d.a)(["users", e], function () {
                return t("users", { data: e });
              });
            })(),
            t = e.data,
            n = e.refetch,
            a = r.a.createElement(
              Kt,
              null,
              r.a.createElement(
                At.a.Text,
                { type: "secondary" },
                "\u7ec4\u5458\u5217\u8868"
              ),
              r.a.createElement(
                It.b,
                null,
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return r.a.createElement(
                        It.b.Item,
                        { key: e.id },
                        r.a.createElement(It.b.Item.Meta, { title: e.name })
                      );
                    })
              ),
              r.a.createElement(Vt.a, null)
            );
          return r.a.createElement(
            Yt.a,
            {
              onVisibleChange: function () {
                return n();
              },
              placement: "bottom",
              content: a,
            },
            r.a.createElement("span", null, "\u7ec4\u5458")
          );
        },
        Kt = Fe.a.div(Ne || (Ne = Object(Ze.a)(["\n  min-width: 30rem;\n"]))),
        Qt = function () {
          return r.a.createElement(
            Re,
            null,
            r.a.createElement(
              N.a,
              null,
              r.a.createElement(Wt, null),
              r.a.createElement(
                Ve,
                null,
                r.a.createElement(
                  Be.d,
                  null,
                  r.a.createElement(Be.b, {
                    path: "/projects",
                    element: r.a.createElement(fe, null),
                  }),
                  r.a.createElement(Be.b, {
                    path: "/projects/:projectId/*",
                    element: r.a.createElement(Pt, null),
                  }),
                  r.a.createElement(Be.a, { to: "/projects" })
                )
              ),
              r.a.createElement(Dt, null)
            )
          );
        },
        Wt =
          ((t.default = Qt),
          Object(a.memo)(function () {
            var e = Object(a.useCallback)(function () {
              window.location.href = window.location.origin;
            }, []);
            return r.a.createElement(
              De,
              { between: !0 },
              r.a.createElement(
                ze,
                { gap: !0 },
                r.a.createElement(
                  te.a,
                  { type: "link", onClick: e },
                  r.a.createElement(Pe, {
                    width: "18rem",
                    color: "rgb(38, 132, 255)",
                  })
                ),
                r.a.createElement(qt, null),
                r.a.createElement(Ht, null)
              ),
              r.a.createElement(Ae, null, r.a.createElement(Gt, null))
            );
          })),
        Gt = Object(a.memo)(function () {
          var e = Object(be.a)(),
            t = e.logout,
            n = e.user;
          return r.a.createElement(
            _.a,
            {
              overlay: r.a.createElement(
                ee.a,
                null,
                r.a.createElement(
                  ee.a.Item,
                  { key: "logout" },
                  r.a.createElement(
                    Ye.a,
                    { onClick: t, type: "link" },
                    "\u767b\u51fa"
                  )
                )
              ),
            },
            r.a.createElement(
              Ye.a,
              {
                type: "link",
                onClick: function (e) {
                  return e.preventDefault();
                },
              },
              "Hi, ",
              null === n || void 0 === n ? void 0 : n.name
            )
          );
        });
    },
  },
]);
//# sourceMappingURL=5.f51aff89.chunk.js.map
