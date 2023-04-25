<?php

       session_start();

       //MySQL相關資訊
       $db_host = "127.0.0.1";
       $db_user = "root";
       $db_pass = "yo0960797";
       $db_select = "pdo";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------


       if(isset($_POST["submit"])){
              echo "近來ㄌ";
              $account = $_POST["Account"];
              $pwd = $_POST["PWD"];

              //建立SQL語法
              $sql = "SELECT * FROM member WHERE Account = :account AND PWD = :pwd";
              $stmt = $pdo->prepare($sql);
              $stmt->bindParam(":account" , $account); 
              $stmt->bindParam(":pwd" , $pwd); 
              $stmt->execute();
       
              //檢查結果
              $num = $stmt->rowCount(); // 函式返回結果集中行的數量
              echo $num;
              if($num > 0){
                //登入成功，設定SESSION變數
                     $_SESSION["login"] = true;
                     $_SESSION["account"] = $account;

                     $result = $stmt->fetch(PDO::FETCH_ASSOC);

                     $json_results = json_encode($result);
                     echo $json_results;

                     exit();
              } else {
                //登入失敗，顯示錯誤訊息
                     $errorMsg = "帳號或密碼錯誤，請重新輸入";
                    //  header("Location: err.html"); //重新導向到首頁
                     exit();
              }
       }


?>