import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
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
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  valCheck: string[] = ['remember'];
  
  config: AppConfig;
  
  subscription: Subscription;

  constructor(
    public configService: ConfigService,
    public dataService: DataserviceService,
    private router: Router,
    private messageService : MessageService
    ){ }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  };

  onSubmit(): void{
    if (this.username == '' || this.password == ''){
      this.messageService.add({severity:'error', summary:'Error', detail:'Username dan password harus diisi'})
      return;
    }
    this.dataService.login({this.username, this.password}).subscribe(data =>{
      if(data.success){
        this.router.navigate(['beranda']);
      } else {
        this.messageService.add({severity:'error', summary:'Error', detail:this.errorMessage})
      }
    })
  }
}
