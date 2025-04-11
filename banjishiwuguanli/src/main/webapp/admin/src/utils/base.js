const base = {
    get() {
        return {
            url : "http://localhost:8080/banjishiwuguanli/",
            name: "banjishiwuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/banjishiwuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "班级事务管理系统"
        } 
    }
}
export default base
