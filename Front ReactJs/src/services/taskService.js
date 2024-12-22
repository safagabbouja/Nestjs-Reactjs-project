import http from"./interceptor/AxiosInterceptor.js";
export default class TaskService
{
    create(data){
        console.log("add user service")
        return http.post("/task/create",data);

    }
    
    getAll(){
        return http.get("/tasks");

    }
    remove(id){
        return http.delete("/tasks/" +id);


    }
    update(id,data){
        return http.put("/user/updateUser/ " + id,data);

    }
    findByid(id){
        return http.get("/tasks/" +id);
    }








}

