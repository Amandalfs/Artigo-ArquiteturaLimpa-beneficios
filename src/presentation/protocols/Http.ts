
export interface HttpResponse {
    statusCode: number,
    body: any,
}

export interface HttpRequest {
    body?: any
}

export interface HttpServer {
    on (method: string, url:string, Callback: Function): void;
    listen (port: number): void;
}