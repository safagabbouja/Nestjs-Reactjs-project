// import http from"./interceptor/AxiosInterceptor.js";
import http from "./interceptor/AxiosInterceptorJSON"
export default class UserService
{
    create(data){
        console.log("add user service",data);
       return http.post("/users",data)

    }
    getAll(){
        return http.get("/users");

    }
    remove(id){
        return http.delete("/users/" +id);


    }
    update(id,data){
        console.log("id in service",id);
        console.log("data in service",data);
        return http.put("/users/"+id,data);

    }
    findByid(id){
        return http.get("/users/" +id);
    }

    login(data){
        console.log("data in service",data);
        return http.post("/auth/signin/"+data);
    }
}
