import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inpu',
  templateUrl: './inpu.component.html',
  styleUrls: ['./inpu.component.scss']
})
export class InpuComponent {

  @Input() public contador: number = 0;
  

}
