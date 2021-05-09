# Jira

## 本地 node 服务器

[json-server](https://github.com/typicode/json-server)

全局安装:

```sh
`npm install -g json-server`
```

新建`db.json`并输入下面内容：

```json
{
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
  "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
  "profile": { "name": "typicode" }
}
```

启动服务：

```sh
json-server --watch db.json
```

查询`http://localhost:3000/posts/1`:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

Restful API 操作：

```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

属性查询：

```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
```

分页查询：

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

排序：

```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```

截取：

```
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
```

全局查询：

```
GET /posts?q=internet
```
