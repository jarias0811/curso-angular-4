import {Component} from '@angular/core';

/*selector -> etiqueta donde se cargara el componente
**template -> html del componente
*/
@Component({
    selector:'employee',
    templateUrl:'./employee.component.html'
})

export class EmployeeComponent{
    public employee_title = 'Titulo de Empleados';
}
