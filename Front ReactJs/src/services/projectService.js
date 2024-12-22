import http from"./interceptor/AxiosInterceptor.js";
export default class ProjectService
{
    create(data){
        console.log("add projrct service")
        return http.post("/project/create",data);

    }
    getAll(){
        return http.get("/project");

    }
    remove(id){
        return http.delete("/project/" +id);


    }
    update(id,data){
        return http.put("/project/updateUser/ " + id,data);

    }
    findByid(id){
        return http.get("/project/" +id);
    }


}
