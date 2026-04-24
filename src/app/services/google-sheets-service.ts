import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  SheetAppendValuesResponse,
  SheetBatchUpdateRange,
  SheetBatchUpdateResponse,
  SheetCell,
  SheetRow,
  SheetUpdateValuesResponse,
} from '../interfaces/IGoogleSheets';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  private firebaseBaseUrl = environment.firebaseBaseUrl;
  private firebaseSpreadsheetId = environment.spreadsheetId ?? '11xN1m371F8Tj0bX6TTRgnL_x_1_pXipox3giBuuUK1I';

  constructor(private http: HttpClient) {
    if (!this.firebaseBaseUrl || !this.firebaseSpreadsheetId) {
      throw new Error('Firebase configuration is incomplete. Check your environment variables.');
    }
  }

  get spreadsheetId(): string {
    return this.firebaseSpreadsheetId;
  }

  getSheetData(sheetName: string): Observable<SheetRow[]> {
    const url = `${this.firebaseBaseUrl}/getSheetData?spreadsheetId=${this.firebaseSpreadsheetId}&sheetName=${encodeURIComponent(sheetName)}`;
    return this.http.get<SheetRow[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  appendSheetRow(sheetName: string, row: SheetRow): Observable<SheetAppendValuesResponse> {
    const url = `${this.firebaseBaseUrl}/appendSheetRow`;
    return this.http.post<SheetAppendValuesResponse>(url, {
      spreadsheetId: this.firebaseSpreadsheetId,
      sheetName,
      row
    }).pipe(
      catchError(this.handleError)
    );
  }

  updateSheetRow(sheetName: string, rowIndex: number, row: SheetRow): Observable<SheetUpdateValuesResponse> {
    const url = `${this.firebaseBaseUrl}/updateSheetRow`;
    return this.http.post<SheetUpdateValuesResponse>(url, {
      spreadsheetId: this.firebaseSpreadsheetId,
      sheetName,
      rowIndex,
      row
    }).pipe(
      catchError(this.handleError)
    );
  }

  batchUpdateSheet(data: SheetBatchUpdateRange[]): Observable<SheetBatchUpdateResponse> {
    const url = `${this.firebaseBaseUrl}/batchUpdateSheet`;
    return this.http.post<SheetBatchUpdateResponse>(url, {
      spreadsheetId: this.firebaseSpreadsheetId,
      data
    }).pipe(
      catchError(this.handleError)
    );
  }

  querySheetData(sheetName: string, query: { colIndex: number; value: SheetCell }): Observable<SheetRow[]> {
    const url = `${this.firebaseBaseUrl}/querySheetData`;
    return this.http.post<SheetRow[]>(url, {
      spreadsheetId: this.firebaseSpreadsheetId,
      sheetName,
      query
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred while fetching data from Firebase Functions';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
