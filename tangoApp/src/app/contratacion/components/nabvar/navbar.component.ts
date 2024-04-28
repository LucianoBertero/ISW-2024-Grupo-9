import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  mostrarMenu = false;
  menuStyles: any = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '80%', // Ajusta el porcentaje según tu preferencia
    backgroundColor: '#364156', // Color de fondo del menú
    borderTop: '1px solid black', // Borde superior
    overflowY: 'auto', // Habilita desplazamiento vertical si el contenido excede la altura
  };

  toggleMenu(event: MouseEvent): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    this.mostrarMenu = !this.mostrarMenu;
  }
}
