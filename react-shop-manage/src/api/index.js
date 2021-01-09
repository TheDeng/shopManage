// 1 引入axios
import axios from "axios";



// 过滤器
// axios 请求过滤器
// axios 响应过滤器
// 1 判断状态码
// 2 不希望多了一层嵌套

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.status === 0){
    return response.data.message
  }else{
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * 获取店铺数据列表
 */
export const getShops = () => axios.get("/shops/");

/**
 * 获取店铺详细数据
 */
export const getShopsDetail = (id) => axios.get(`/shops/${id}/`);

/**
 * 修改店铺数据
 */
export const updateShopsDetail = (id,data) => axios.put(`/shops/${id}/`,data);
/**
 * 删除店铺数据
 */
export const deleteShopsDetail = (id) => axios.delete(`/shops/${id}/`);
/**
 * 添加店铺数据
 */
export const addShopsDetail = (data) => axios.post(`/shops/`,data);

/**
 * 获取会员数据列表
 */
export const getMembers = () => axios.get("/members/");

/**
 * 获取会员详细数据
 */
export const getMembersDetail = (id) => axios.get(`/members/${id}/`);

/**
 * 修改会员数据
 */
export const updateMembersDetail = (id,data) => axios.put(`/members/${id}/`,data);
/**
 * 删除会员数据
 */
export const deleteMembersDetail = (id) => axios.delete(`/members/${id}/`);
/**
 * 添加会员数据
 */
export const addMembersDetail = (data) => axios.post(`/members/`,data);

