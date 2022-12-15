import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription; 

  constructor(
    private router: Router
  ) {
    this.tituloSubs$ = this.getArgumetosRuta()
                        .subscribe( ({ titulo }) => {
                          this.titulo = titulo;
                          document.title = `AdminPro - ${ titulo }`;
                        });
  }
  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  } 
  
  getArgumetosRuta() {
    return this.router.events
      .pipe(
        filter( event => (event instanceof ActivationEnd) ),
        filter( event => ( event as ActivationEnd ).snapshot.children.length === 0  ),
        map( ( activationEnd ) => ( activationEnd as ActivationEnd).snapshot.data )
      )
  }   

}
