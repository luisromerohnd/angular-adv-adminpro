import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{
  public labels1: string[] =  ['Pan', 'Refresco', 'Tacos']
  public Data1 = [
    [1000, 450, 100],
  ];
  public labels2: string[] =  ['Sillas', 'Mesas', 'Tacos']
  public Data2 = [
    [10, 20, 30],
  ];
}

