module.exports = (req, res, next) => {
  const router = createRouter(req, res);

  router.post("/login", () => {
    const user = {
      token: "123",
    };
    return res.status(200).json({ user });
  });
  router.get("/name", () => {
    res.send("chenwl");
  });

  router.all(() => {
    return res.status(400).json({ message: "用户名或密码错误" });
  });
};

const methods = ["post", "get", "delete", "patch", "put"];
function createRouter(req, res) {
  let { method, path } = req;
  method = method.toLowerCase();
  path = path.toLowerCase();

  const router = {};
  let match = false;
  methods.forEach((meth) => {
    router[meth] = (url, cb) => {
      if (url === path && method === meth && !match) {
        match = true;
        return cb && cb();
      }
    };
  });

  router.all = (cb) => {
    return !match && cb && cb();
  };

  return router;
}
