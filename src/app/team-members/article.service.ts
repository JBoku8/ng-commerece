import {  Observable } from "rxjs";
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { IArticleComment, IArticle, } from './team-members.component';
import { IArticle, IArticleComment } from "./article";


@Injectable({
    providedIn: 'root',
})
export class cardservice{
    private baseUrl: string = 'http://jsonplaceholder.typicode.com';
    constructor (private http: HttpClient) {}
    getArticles(): Observable<IArticle[]> {
        return this.http.get<IArticle[]>(
            '${this.baseUrl}/posts'
        );
    }
    getArticle(articleid: number):Observable<IArticle> {
        return this.http.get<IArticle>('${this.baseUrl}/posts/${articleid}');

    }
    getArticleComments(articleid: number): Observable<IArticleComment[]>{
        return this.http.get<IArticleComment[]>(
            '${this.baseUrl}/posts/${id}/comments');
    }
}