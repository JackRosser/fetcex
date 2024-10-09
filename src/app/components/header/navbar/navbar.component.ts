import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

ulClass: string = "d-flex bg-dark justify-content-center gap-5"
aClass: string = "text-white text-decoration-none text-capitalize"

navElements: string[] = [
"home", "active-posts", "inactive-posts", "post-detail"
]

}
