import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  showMessage = false;
  message = '';

  enviarSolicitud() {
    // Código para enviar la solicitud
    this.showMessage = true;
    this.message = 'La solicitud se ha enviado correctamente.';

    setTimeout(() => {
      this.showMessage = false;
    }, 3000); // Ocultar la alerta después de 3 segundos
  }
}
