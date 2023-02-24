import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabelakses',
  templateUrl: './tabelakses.component.html',
  styleUrls: ['./tabelakses.component.scss']
})
export class TabelaksesComponent implements OnInit {
  akses:any;
  selectid:any;

  constructor(private dataService: DataserviceService,private confirmDialog: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAksesData();
    console.log(this.akses);
    
    
  }

  getAksesData(){
    this.dataService.Logindata().subscribe(data=>{this.akses=data.data},
      error=>{
        console.log(error);
      });
  }
  confirm(event: Event, id: any) {
    this.confirmDialog.confirm({
        target: event.target,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',

        accept: () => {
            //confirm action
            this.dataService.delete(id).subscribe(data=>{this.messageService.add({severity: "success", summary: "Success", detail: "Sukses menghapus Hak Akses!"});},
            (error)=>{
              this.messageService.add({severity:"error", summary: "Gagal", detail: "Gagal menghapus hak akses"})
            }) 
        },
        reject: () => {
            //reject action
            this.messageService.add({severity: "error", summary: "Gajadi", detail: "Anda gajadi ngilangin Hak Akses"});
        }
    });
}
}
