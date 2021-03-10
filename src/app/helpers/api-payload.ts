import { HttpHeaders, HttpParams } from '@angular/common/http';
export class ApiPayload {
    constructor(
        public queryParams?: {},
        public jsonRequest?: any,
        public headers?: {},
        public command?: string,
    ) {
        this.command = command;
        this.queryParams = this.getQueryParams(queryParams);
        this.headers = this.getHeaders(headers);
        this.jsonRequest = this.getJSONReq(jsonRequest);
    }

    private getHeaders(headers: any): any {
        const httpHeaders: any = {};
        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                let element = headers[key];
                if (element !== undefined && element !== null) {
                    element = element + '';
                    httpHeaders[key] = element;
                }
            }
        }
        httpHeaders['Content-Type'] = 'application/json; charset=utf-8';

        return new HttpHeaders(httpHeaders);
    }

    private getQueryParams(params: any): any {
        const queryParams: any = {};
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                queryParams[key] = element;
            }
        }
        return new HttpParams({
            fromObject: queryParams
        });
    }

    private getJSONReq(jsonRequest: {}): any {
        try {
            return jsonRequest ? JSON.stringify(jsonRequest) : null;
        } catch (error) {
            console.error('JSON stringify error', error);
            throw new Error('APIPayload: Error passing request object to JSON string');
        }
    }
}
