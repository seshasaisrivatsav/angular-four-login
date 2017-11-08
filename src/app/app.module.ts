import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { WebsiteService } from './services/website.service.client';
import { WebsiteListComponent } from './website/website-list/website-list.component';
import { HttpModule } from '@angular/http';

import {WidgetService} from './services/widget.service.client';
import { WidgetListComponent } from './widget/widget-list/widget-list.component';
import { WidgetHeadingComponent } from './widget/widget-heading/widget-heading.component';
import { WidgetParagraphComponent } from './widget/widget-paragraph/widget-paragraph.component';
import { WidgetIframeComponent } from './widget/widget-iframe/widget-iframe.component';
import {SafePipe} from './safe-pipe';
import {ToUpperCasePipe} from './pipes/to-upper.pipe.client';
import {UserService} from './services/user.service.client';
import {SharedService} from '../../server/services/shared.service.client';
import {AuthenticationService} from './services/authentication.service.client';
//
// import { FormExperimentComponent } from './experiments/form-experiment/form-experiment.component';
// import { UserComponent } from './experiments/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WidgetListComponent,
    WidgetHeadingComponent,
    WidgetParagraphComponent,
    WidgetIframeComponent,
    SafePipe,
    ToUpperCasePipe,
    // FormExperimentComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticationService, SharedService, WebsiteService, WidgetService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
