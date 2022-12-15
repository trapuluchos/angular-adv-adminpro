import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise( ( resolve, reject ) => {
      
    //   false ? resolve('Hola mundo!') : reject('Algo salio mal')
    //   // console.log('promesa');
    // });

    // promesa.then( console.log )
    //   .catch( console.log )

    // console.log('Fin del init');

    this.getUsuarios().then( console.log );
  }
  
  getUsuarios() {
    
    return new Promise(( resolve, reject ) => {

      fetch('https://jsonplaceholder.typicode.com/todos')
        .then( resp => resp.json() )
        .then( data => resolve(data) )
        .catch( err => reject([]) );
      

    })


  }
}
