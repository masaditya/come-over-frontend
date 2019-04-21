import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPagesComponent } from "./pages/landing-pages/landing-pages.component";
import { BrowseAllPagesComponent } from "./pages/browse-all-pages/browse-all-pages.component";
import { DetailEventPagesComponent } from "./pages/detail-event-pages/detail-event-pages.component";
import { LoginPagesComponent } from "./pages/login-pages/login-pages.component";
import { CreateEventPagesComponent } from "./pages/create-event-pages/create-event-pages.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardEventComponent } from "./components/card-event/card-event.component";
import { ManageEventPagesComponent } from "./pages/manage-event-pages/manage-event-pages.component";
import { OrganizerProfilePagesComponent } from "./pages/organizer-profile-pages/organizer-profile-pages.component";
import { UserProfilePagesComponent } from "./pages/user-profile-pages/user-profile-pages.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { AuthService } from "./services/auth.service";
import { EventsService } from "./services/events.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingPagesComponent,
    BrowseAllPagesComponent,
    DetailEventPagesComponent,
    LoginPagesComponent,
    CreateEventPagesComponent,
    HeaderComponent,
    FooterComponent,
    CardEventComponent,
    ManageEventPagesComponent,
    OrganizerProfilePagesComponent,
    UserProfilePagesComponent,
    RegisterPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
