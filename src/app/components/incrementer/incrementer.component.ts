import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {
  
  @Input() progress: number = 50;
  @Input() classBtn: string = 'btn-primary';
  
  @Output() onProgress: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    this.classBtn = `btn ${ this.classBtn }`;
  }

  onChange( value: number ) {
  
    if ( value > 100 ) {
      this.progress = 100;
      console.log( value );
    } else if ( value < 0 || value === null) {
      this.progress = 0
      console.log( value );
    } else {
      this.progress = value;
      console.log( value );
    }

    this.onProgress.emit( this.progress )
  }

  onIncrement( value: number ) {
    const total = this.progress + value; 
    
    if ( total <= 0 ) {
      this.progress = 0;
    } else if ( total >= 100  ) {
      this.progress = 100;
    } else {
      this.progress = total;
    }

    this.onProgress.emit( this.progress );
  }
  
}
