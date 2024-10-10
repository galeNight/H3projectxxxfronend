import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch
import { AppRoutingModule } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withFetch()), // Enable fetch API for HttpClient
    AppRoutingModule, provideAnimationsAsync(),
    ]
})
.catch((err) => console.error(err));
