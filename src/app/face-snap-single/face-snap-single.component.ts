import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, DatePipe, } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap-single',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './face-snap-single.component.html',
  styleUrl: './face-snap-single.component.scss'
})
export class FaceSnapSingleComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();

  }
  
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
}

snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

prepareInterface() {
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}
getFaceSnap() {
  const faceSnapId = this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
}
   
  }

