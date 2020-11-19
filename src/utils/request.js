import axios from 'axios'

//创建一个axios实例
const instance = axios.create({
    baseURL:'https://autumnfish.cn',
    timeout:5000
})

//请求拦截器
instance.interceptors.request.use(
    function (config) {
        console.group("请求开始")
        console.log(config)
        console.groupEnd()
        return config;
    },
    function (err) {
        // 返回一个promise实例，状态为reject，参数会原封不动的作为后续参数
        return Promise.reject(err);
    }
)

//响应拦截器
instance.interceptors.response.use(
    function (respone) {
        console.group("响应开始")
        console.log(respone.data)
        console.groupEnd()
        return respone;
    },
    function (err) {
        return Promise.reject(err);
    }
)

//抛出实例
export default instance