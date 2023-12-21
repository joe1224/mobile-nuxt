import { VToast } from '~/utils/tipTools'

export default function(ctx) {
  const { app } = ctx
  const { $axios } = app
  // $axios.defaults.baseURL = process.env.baseUrl
  $axios.defaults.timeout = 30000
  $axios.interceptors.request.use(config => {
    // const token = $cookies.get('token')
    // if (token) {
    //   // Authorization: Bearer token
    //   config.headers.Authorization = 'Bearer ' + token
    // }
    return config
  })
  $axios.interceptors.response.use(({ data, status }) => {
    if (status !== 200) {
      VToast('网络有误', 'error')
      return Promise.reject(data)
    }
    return data
  })
}
