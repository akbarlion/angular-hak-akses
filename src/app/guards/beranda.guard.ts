import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BerandaGuard implements CanActivate {

  constructor(private router: Router, public messageService: MessageService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      if(localStorage.getItem('isLoggedIn')=== 'true'){
        return true;
      }

      //jika pengguna belum login, maka kembali ke halaman login
      this.router.navigate(['/login']);

      //tampilkan pesan error
      this.messageService.add({severity: "error", summary: "Error", detail: "Anda harus login untuk mengakses halaman ini"});
      return false;
  }
  
}
