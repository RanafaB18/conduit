import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment.development";

export abstract class ApiService {
  protected http = inject(HttpClient); 
  protected baseUrl = environment.baseUrl;
}
