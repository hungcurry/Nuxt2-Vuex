export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) { // 是用api回傳的狀態碼 去換成對應頁面
      redirect('/Error/500')
    }
    if (error.response.status === 404) { // 是用api回傳的狀態碼 去換成對應頁面
      redirect('/Error/404')
    }
  })
}
