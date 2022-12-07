import { Component } from '@angular/core';
import { EmpleadoCargoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado:EmpleadoComponent[]=[];
  constructor(
    private empleadoService:EmpleadoCargoControllerService
  ) { }
  ngOnInit() {
    
  }

}
