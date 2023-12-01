const readData = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../css/reset.css" />
    <style>
      body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      .register-container {
        width: 400px;
        box-shadow: 0 0 5px black;
        border-radius: 5px;
        padding: 20px;
      }

      h1 {
        background-color: antiquewhite;
        padding: 10px;
      }

      .register-box {
        padding: 10px 0;
      }

      .register-box > div {
        margin: 10px 0;
      }

      .register-box p {
        display: none;
        font-size: 12px;
        color: red;
      }

      /* 나중에 재디자인 */
      .register-box label {
        display: block;
      }

      .register-box input {
        display: block;
        width: 100%;
        height: 40px;
      }

      #registerBtn {
        width: 100%;
        height: 40px;
        background-color: rgb(83, 16, 83);
        color: #fff;
        border: 1px solid rgb(83, 16, 83);
      }
    </style>
  </head>

  <body>
    <div class="register-container">
      <h1>다음을 입력해 주세요.</h1>
      <div class="register-box">
        <div>
          <label for="userName">이름</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="3이상 문자로 입력하세요."
          />
          <p id="userNameErr">이름은 3글자 이상 입력해야 합니다.</p>
        </div>
        <div>
          <label for="userEmail">이메일</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="userEmail@naver.com"
          />
          <p id="userEmailErr">이메일을 다시 입력하세요.</p>
        </div>
        <div>
          <label for="userPwd">비밀번호</label
          ><input
            type="password"
            name="userPwd"
            id="userPwd"
            placeholder="한글자이상 특수문자와 숫자를 포함하세요."
          />
          <p id="userPwdErr1">한글자이상 특수문자와 숫자를 포함해야 합니다.</p>
        </div>

        <div>
          <label for="userRepwd">비밀번호재입력</label
          ><input
            type="password"
            name="userRepwd"
            id="userRepwd"
            placeholder="비밀번호를 다시 입력하세요."
          />
          <p id="userPwdErr2">이전에 입력한 비밀번호와 일치하지 않습니다.</p>
        </div>

        <div><button id="registerBtn">회원가입</button></div>
      </div>
    </div>

    <script></script>
  </body>
</html>



`;

module.exports = readData;
