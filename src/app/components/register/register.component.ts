import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
  :host ::ng-deep .p-password input {
  width: 100%;
  padding:1rem;
  }

  :host ::ng-deep .pi-eye{
    transform:scale(1.6);
    margin-right: 1rem;
    color: var(--primary-color) !important;
  }

  :host ::ng-deep .pi-eye-slash{
    transform:scale(1.6);
    margin-right: 1rem;
    color: var(--primary-color) !important;
  }
`]
})
export class RegisterComponent implements OnInit {
  nama: any;
  username: any;
  password: any;


  valCheck: string[] = ['remember'];
  
  config: AppConfig;
  
  subscription: Subscription;

  constructor(
    public configService: ConfigService,
    public dataService: DataserviceService,
    private router: Router,
    public messageService : MessageService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
  register(){
    if (!this.username || !this.password || !this.nama){
      this.messageService.add({severity: "error", summary: "Error", detail: "Masukkan Username dan Password"});
      return;
    }

    const data = {
      password: this.password,
      username: this.username,
      Nama: this.nama,
    }
  
    this.dataService.register(data).subscribe(
      ()=>{
        this.messageService.add({severity: "success", summary: "Success", detail: "Berhasil registrasi"});
        this.router.navigate(['/login']);
      }, (error)=>{
        if (error.status == 500){
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Gagal memeriksa data"
          })
        } else if (error.status == 440){
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Username telah terdaftar"
          })
        }
      })
  }
  

}
