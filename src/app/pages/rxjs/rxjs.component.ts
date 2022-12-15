import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    let i = -1;

    const obs$ = new Observable<number>( observer => {
      
      const intervalo = setInterval(() => {
        i++
        observer.next( i );

        if (i === 4) {
          clearInterval( intervalo );
          observer.complete();
        }
        
        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);

    });

    obs$.pipe(

      retry(1)

    ).subscribe( 
      value => console.log(value), 
      err => console.log( 'ERROR', err ),
      () => console.info('Obs terminado')
    );
  }

  ngOnInit(): void {
  }

}
