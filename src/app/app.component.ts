import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { CommonModule } from '@angular/common';
import { FaceSnap } from './models/face-snap';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        FaceSnapListComponent,
        HeaderComponent
    ]
})
export class AppComponent {

  }
