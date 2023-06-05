import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
        conferirForm() {
                alert("Sua compra foi realizada com sucesso!");
        }

}
