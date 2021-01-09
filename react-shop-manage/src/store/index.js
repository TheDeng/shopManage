const status={
    username:'游客',
    isLogin:false
}
const getUsername=function () {
    return status.username
}
const getIsLogin=function () {
    return  status.isLogin
}
const setUsername=function (val) {
    status.username=val
}
const setIsLogin=function (islogin) {
    status.isLogin=islogin
}

export  {
    getIsLogin,
    getUsername,
    setUsername,
    setIsLogin,
}
