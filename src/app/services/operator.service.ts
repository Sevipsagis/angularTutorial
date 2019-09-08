import { MessageService } from './message.service';
import { OPERATORS } from './../mock-data';
import { Operator } from './../models/operator';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private opUrl = 'http://localhost:9999';
  // private opUrl = 'api/operators';

  getOperators(): Observable<Operator[]> {
    this.messageService.add('OperatorService: fetched operators');
    return this.http.get<Operator[]>(`${this.opUrl}/operators`)
      .pipe(
        tap(_ => this.log('fetched operators')),
        catchError(this.handleError<Operator[]>('getOperators', []))
      );
  }

  getOperator(id: number): Observable<Operator> {
    const url = `${this.opUrl}/operator/${id}`;
    return this.http.get<Operator>(url).pipe(
      tap(_ => this.log(`fetched operator id=${id}`)),
      catchError(this.handleError<Operator>(`getOperator id=${id}`))
    );
  }

  getTopAtk(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${this.opUrl}/top/ATK`)
      .pipe(
        tap(_ => this.log('fetched operators')),
        catchError(this.handleError<Operator[]>('getOperators', []))
      );
  }

  getTopDef(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${this.opUrl}/top/DEF`)
      .pipe(
        tap(_ => this.log('fetched operators')),
        catchError(this.handleError<Operator[]>('getOperators', []))
      );
  }

  getTopPick(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${this.opUrl}/top`)
      .pipe(
        tap(_ => this.log('fetched operators')),
        catchError(this.handleError<Operator[]>('getOperators', []))
      );
  }

  getTopBan(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${this.opUrl}/ban`)
      .pipe(
        tap(_ => this.log('fetched operators')),
        catchError(this.handleError<Operator[]>('getOperators', []))
      );
  }

  updateOperator(operator: Operator): Observable<any> {
    return this.http.put<Operator>(`${this.opUrl}/operator/${operator.id}`, operator, this.httpOptions).pipe(
      tap(_ => this.log(`updated operator id=${operator.id}`)),
      catchError(this.handleError<any>(`updateOperator id=${operator.id}`))
    );
  }

  addOperator(operator: Operator): Observable<Operator> {
    return this.http.post<Operator>(`${this.opUrl}/operator`, operator, this.httpOptions).pipe(
      tap((newHero: Operator) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Operator>('addHero'))
    );
  }

  deleteOperator(operator: Operator | number): Observable<any> {
    const id = typeof operator === 'number' ? operator : operator.id;
    const url = `${this.opUrl}/operator/${id}`;
    return this.http.delete<Operator>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted operator id=${id}`)),
      catchError(this.handleError<Operator>('deleteOperator'))
    );
  }

  searchHeroes(term: string): Observable<Operator[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Operator[]>(`${this.opUrl}/search/?name=${term}`).pipe(
      tap(_ => this.log(`found operators matching "${term}"`)),
      catchError(this.handleError<Operator[]>('searchOperators', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }
}
