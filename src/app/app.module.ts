import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ArchComponentModule} from './modules/arch-component/arch-component.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {RouterModule} from '@angular/router';
import {LiteralService} from './services/literal.service';
import {UtilityService} from './services/utility.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {HttpService, RequestCache} from './services/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AgeInYearDirective } from './directive/age-in-year.directive';
import {ReactiveFormsModule} from '@angular/forms';
import { UserAlertComponent } from './components/user-alert/user-alert.component';
import {UserAlertService} from './components/user-alert/user-alert.service';
import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { BodyComponent } from './components/base/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    UserDetailComponent,
    AgeInYearDirective,
    UserAlertComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ArchComponentModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UserListComponent},
      {path: 'user/:id', component: UserFormComponent}
    ], {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [  HttpService,
                RequestCache, { provide: HTTP_INTERCEPTORS,
                  useClass: HttpService,
                  multi: true
                },
                LiteralService,
                UtilityService,
                UserAlertService
  ],
  entryComponents: [
    UserDetailComponent,
    UserAlertComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
