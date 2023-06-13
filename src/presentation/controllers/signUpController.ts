import { HttpRequest, HttpResponse } from "../protocols/Http";
import { badRequest, create } from './../helpers/http-helper';
import { Controller } from './../protocols/controller';


class signUpController implements Controller {
    handle(request: HttpRequest): HttpResponse{
        const {name} = request.body
        
        if(!name){
            return badRequest(new Error("error"));
        }

        return create("Criado com sucesso")
    }
}