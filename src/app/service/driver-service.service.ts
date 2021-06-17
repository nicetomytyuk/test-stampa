/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const testCommand = `
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
<s:Body>
  <printerNonFiscal>
    <beginNonFiscal operator="1"/>
      <printNormal operator="1" font="4" data="               TEST DI STAMPA               " />
    <endNonFiscal operator="1"/>
  </printerNonFiscal>
</s:Body>
</s:Envelope>`;

@Injectable({
  providedIn: 'root'
})
export class DriverService {
constructor(private http: HttpClient) { }

  test(): Observable<boolean> {
    return this.http
    .post('http://192.168.130.184/cgi-bin/fpmate.cgi?devid=local_printer&timeout=12000', testCommand)
    .pipe(map((data: any) => {
      console.log(data);
      return true;
    }));
  }

}
