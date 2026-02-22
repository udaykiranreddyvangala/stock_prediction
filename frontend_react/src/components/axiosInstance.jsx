import axios from "axios";

const baseURL=import.meta.env.VITE_BACKEND_BASE_API

axiosInstance=axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json',
    }
})

// request interceptor
axiosInstance.interceptors.request.use(
    function(config){
        const accessToken=localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization']=`Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)
// response interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    async function(error){
        const originalRequest=error.config;
        if(error.response.status===401 && !originalRequest.retry){
            originalRequest.retry=true;
            const refreshToken=localStorage.getItem('refreshToken')
            try{
                const respose=await axiosInstance.post('token/refresh/',{
                    refresh:refreshToken,
                })

                localStorage.setItem('accessToken',respose.data.access)
                originalRequest.headers['Authorization']=`Bearer ${respose.data.access}`
                return axiosInstance(originalRequest)
            }catch(error){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                // window.location.href='/login'
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;