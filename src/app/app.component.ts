import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 faceSnaps!: FaceSnap[];


 ngOnInit(): void {
  this.faceSnaps = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new FaceSnap(
      'Vacances à la plage',
      'Un souvenir inoubliable de nos vacances d\'été.',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      new Date(),
      30
      ),
      new FaceSnap(
      'Gâteau d\'anniversaire',
      'Le meilleur gâteau que j\'ai jamais mangé !',
      'https://images.pexels.com/photos/533424/pexels-photo-533424.jpeg',
      new Date(),
      25
        )
  ];
  this.faceSnaps[1].setLocation('à la plage');


}
}
