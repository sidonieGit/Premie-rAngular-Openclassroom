import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapSingleComponent } from './face-snap-single/face-snap-single.component';

export const routes: Routes = [
    { path: 'facesnaps/:id', component: FaceSnapSingleComponent},
    { path: 'facesnaps', component: FaceSnapListComponent},
    { path: '', component: LandingPageComponent}
];
