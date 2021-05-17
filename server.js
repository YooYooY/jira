const http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) => {
  const router = createRouter(req, res);
  router.get("/users", () => {
    const users = createUsers();
    res.json(users);
  });
  router.get("/me", () => {
    const data = { user: { id: 5860741, name: "dd", token: "NTg2MDc0MQ==" } };
    res.json(data);
  });
  router.get("/projects", () => {
    const projects = createProject();
    res.json(projects);
  });
  router.post("/login", () => {
    const data = { user: { id: 5860741, name: "dd", token: "NTg2MDc0MQ==" } };
    res.json(data);
  });

  router.init();
});

const createUsers = () => {
  return [
    { organization: "外卖组", ownerId: 5860741, name: "高修文", id: 5 },
    { organization: "外卖组", ownerId: 5860741, name: "熊天成", id: 6 },
    { organization: "总部组", ownerId: 5860741, name: "郑华", id: 7 },
    { organization: "中台组", ownerId: 5860741, name: "王文静", id: 8 },
  ];
};
const createProject = () => {
  return [
    {
      personId: 7,
      organization: "外卖组",
      created: 1604989757139,
      ownerId: 5860741,
      name: "骑手管理",
      id: 6,
    },
    {
      personId: 8,
      organization: "团购组",
      created: 1604989757139,
      pin: true,
      ownerId: 5860741,
      name: "团购 APP",
      id: 7,
    },
    {
      personId: 7,
      organization: "物料组",
      created: 1546300800000,
      ownerId: 5860741,
      name: "物料管理系统",
      id: 8,
    },
    {
      personId: 6,
      organization: "总部",
      created: 1604980000011,
      ownerId: 5860741,
      name: "总部管理系统",
      id: 9,
    },
    {
      personId: 7,
      organization: "外卖组",
      created: 1546900800000,
      ownerId: 5860741,
      name: "送餐路线规划系统",
      id: 10,
    },
  ];
};

const createRouter = (req, res) => {
  const fns = [];
  const router = {};
  const methods = ["get", "post", "delete", "put", "patch"];
  methods.forEach((initMeth) => {
    router[initMeth] = (url, fn) => {
      fns.push({
        method: initMeth,
        url,
        fn,
      });
    };
  });

  res.json = (data) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  };

  router.init = () => {
    if (req.url === "/favicon.ico") return res.end("");
    const method = req.method.toLowerCase();
    const exectItem = fns.find(
      (item) => item.method === method && req.url.startsWith(item.url)
    );
    if (!exectItem) {
      console.log("===404===");
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      res.statusCode = 200;
      console.log(method + "== ", req.url);
      exectItem.fn && exectItem.fn();
    }
    console.log("last");
  };

  return router;
};

server.listen(PORT, () => {
  console.log("Serving on http://localhost:" + PORT);
});
