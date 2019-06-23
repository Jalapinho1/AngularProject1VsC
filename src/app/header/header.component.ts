import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //emit my own event -
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  onSelect(feature : string){
    this.featureSelected.emit(feature);
    /*use property which holds emiter as a value to emit an event when
    i click at one of the buttons
    */
  }
}
