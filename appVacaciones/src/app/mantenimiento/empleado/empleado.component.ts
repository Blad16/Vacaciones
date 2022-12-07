import { Component } from '@angular/core';
import { EmpleadoCargoControllerService } from 'src/app/api/services';
import { NzMessageModule, NzMessageService, NzMNService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado:EmpleadoComponent[]=[];
  constructor(
    private empleadoService:EmpleadoCargoControllerService,
    private messageService:NzMessageService
  ) { }
  ngOnInit() {
    
  }


  eliminar(id?:string): void{
    this.messageService.info('su reigistro ha sido eliminado')
  }
  cancelar(): void{
this.messageService.info('su reigistro sigue activo')
   }
}
