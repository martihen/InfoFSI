import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CorreoService {
constructor(private _http: HttpClient) { }
sendMessage(body: any) {
    try {
        return this._http.post("http://localhost:3000/formulario", body);
    } catch (error) {
        return error;
    }
 }
}