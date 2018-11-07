import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';
import { JlgImageService } from '../jlg-image.service';

@Component({
  selector: 'lib-jlg-image',
  templateUrl: './jlg-image.component.html',
  styleUrls: ['./jlg-image.component.css']
})
export class JlgImageComponent implements OnInit {

  state = 0;
  @Input() image = '';
  @Input() thumbnail = '';

  constructor(private li: JlgImageService) { }

  ngOnInit() {
    (async () => {
      try {
        this.state = 0;
        // await timer(500).toPromise();
        await this.li.loadImage(this.thumbnail);
        this.state = 1;
        // await timer(2000).toPromise();
        await this.li.loadImage(this.image);
        this.state = 2;
      } catch (e) {
        console.error('Cannot load image', this.thumbnail, this.image);
      }
    })();
  }

}
