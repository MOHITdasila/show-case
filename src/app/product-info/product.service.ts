
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ProductService {

    constructor(private http: HttpClient) {}
    dummyProducts = [{
        title: 'soap',
        discription: 'Good for skin',
        price: '1$',
        likes: 500,
        stock: 6,
    },
    {
        title: 'shampoo',
        discription: 'Good for Hair',
        price: '2$',
        likes: 400,
        stock: 3,
    },
    {
        title: 'brush',
        discription: 'Good for Hair',
        price: '5$',
        likes: 200,
        stock: 2,
    }
];
productInfo$ = new BehaviorSubject<any>([]);
    getProductInfo(){
        this.productInfo$.next(this.dummyProducts);

        return of([]);
        // return this.http
        //   .get('http://localhost:3000/read/', {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //     }
        //   })
        //   .pipe(catchError(err => of(err)));

      }

      createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
          btoa('username:password'));
      }

}
