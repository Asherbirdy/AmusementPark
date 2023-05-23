import axios from 'axios';

// export const checkLoginStatus = () => {
//   return axios
//     .post('/api/PDO/staffAccount/staffLoginCheck.php')
//     .then(res => {
//       if (res.data === '') {
//         alert('請先登入');
//         router.push('/staff/login');
//       } else {
//         // console.log("已經登入了");
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       alert('登入狀態檢查出錯');
//     });
// };


export function checkLoginStatus(API_URL = "/api/PDO/staffAccount/staffLoginCheck.php", router) {
    // 狀態：
    axios
      .post(API_URL)
      .then((res) => {
        if (res.data === "") {
          alert("請先登入esm");

          router.push("/staff/login");
        } else {
          // console.log("已經登入了");
        }
      })
      .catch((error) => {
        console.dir("登入測試失敗");
      });
  
  }
  