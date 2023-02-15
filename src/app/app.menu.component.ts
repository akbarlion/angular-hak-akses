import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Beranda', icon: 'pi pi-fw pi-home', routerLink: ['/beranda']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    {label: 'Permohonan Hak Akses', icon: 'pi pi-fw pi-book', routerLink: ['/beranda/hakakses']},
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/beranda/uikit/formlayout']},
                    {label: 'Tabel', icon: 'pi pi-fw pi-table', routerLink: ['/beranda/tabelbiasa']},
                    {label: 'tabelsort', icon: 'pi pi-fw pi-discord', routerLink: ['/beranda/tabelsort']}
                ]
            },
           
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
