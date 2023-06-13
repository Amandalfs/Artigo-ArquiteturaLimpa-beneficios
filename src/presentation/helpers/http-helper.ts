import { HttpResponse } from "../protocols/Http"

export const badRequest = (error: Error): HttpResponse => {
    return {
        statusCode: 400,
        body: error
    }
}

export const sucess = (data): HttpResponse => {
    return {
        statusCode: 200,
        body: data
    }
}

export const create = (data): HttpResponse => {
    return {
        statusCode: 201,
        body: data
    }
}