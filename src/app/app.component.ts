import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-recipe-project';
  loadedFeature = 'recipe';

  //$event in html always refers to the event data
  // it can be placed with more custom arguments

  //where to navigate
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
