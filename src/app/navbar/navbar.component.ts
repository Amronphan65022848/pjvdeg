import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  navigateToProfile(event: Event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าซ้ำ

    const token = localStorage.getItem('token'); // ตรวจสอบ token ใน localStorage
    if (token) {
      this.router.navigate(['/profile']); // ถ้ามี token นำทางไปยังหน้า profile
    } else {
      this.router.navigate(['/login-guest']); // ถ้าไม่มี token นำทางไปยังหน้า login-guest
    }
  }
}
