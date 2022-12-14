import { Component, OnInit } from '@angular/core';
import { EmpleadoCargoControllerService } from 'src/app/api/services';
import { NzMessageModule, NzMessageService, NzMNService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:EmpleadoComponent[]=[];
  constructor(
    private empleadoService:EmpleadoCargoControllerService,
    private messageService:NzMessageService
  ) { }
  ngOnInit() {
    
  }


  eliminar(id:string): void{
    this.empleadoService.deleteById({id}).subscribe(()=>){
      this.empleado= this.empleado.filter(x => x.id !==id);
    this.messageService.info('su reigistro ha sido eliminado')

    }
    
    
  }cancelar(): void{
this.messageService.info('su reigistro sigue activo')
   }
}
