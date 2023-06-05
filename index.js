// const figlet = require("figlet"); // 라이브러리 가져오기

// figlet("Kidongg!!", function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

const express = require("express"); // 라이브러리 가져오기
const app = express();
const port = 3000;

// GET 요청 처리
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// API 서버 실행
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
