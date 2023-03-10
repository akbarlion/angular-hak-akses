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
                    {label: 'Beranda', icon: 'pi pi-fw pi-home', routerLink: ['beranda']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    {label: 'Permohonan Hak Akses', icon: 'pi pi-fw pi-book', routerLink: ['hakakses']},
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['uikit/formlayout']},
                    {label: 'Tabel', icon: 'pi pi-fw pi-table', routerLink: ['tabelbiasa']},
                    {label: 'tabelsort', icon: 'pi pi-fw pi-discord', routerLink: ['tabelsort']},
                    {label: 'user', icon: 'pi pi-fw pi-user', routerLink: ['tabelakses']},
                    {label: 'pemeriksaan', icon: 'pi pi-fw pi-tag', routerLink: ['pemeriksaan']},
                    {label: 'harga', icon: 'pi pi-fw pi-tags', routerLink: ['harga']},
                    {label: 'hug', icon: 'pi pi-fw pi-apple', routerLink: ['hug']},
                    {label: 'fluffy', icon: 'pi pi-fw pi-android', routerLink: ['fluffy']}
                ]
            },
            {
                label: 'Template',
                items: [
                    {label: 'CRUD', icon: 'pi pi-fw pi-users', routerLink: ['crud']}
                ]
            }
           
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
