import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HakaksesComponent } from './components/hakakses/hakakses.component';
import { registerLocaleData } from '@angular/common';
import { TabelbiasaComponent } from './components/tabelbiasa/tabelbiasa.component';
import { TabelsortComponent } from './components/tabelsort/tabelsort.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BerandaGuard } from './guards/beranda.guard';
import { TabelaksesComponent } from './components/tabelakses/tabelakses.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'login', pathMatch:'full'},
            {path: 'login', component: LoginComponent},
            {path: 'register', component:RegisterComponent},
            // {path: '**', redirectTo: 'beranda'},
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: 'beranda', component: DashboardComponent, canActivate: [BerandaGuard]},
                    {path: 'hakakses', component: HakaksesComponent},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'tabelbiasa', component: TabelbiasaComponent},
                    {path: 'tabelsort', component: TabelsortComponent},
                    {path: 'tabelakses', component: TabelaksesComponent}
                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
