import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'lib-jlg-image',
  templateUrl: './jlg-image.component.html',
  styleUrls: ['./jlg-image.component.css']
})
export class JlgImageComponent implements OnInit {

  state = 0;
  @Input() image = '';
  @Input() thumbnail = '';

  constructor() { }

  ngOnInit() {
    timer(2000).subscribe(n => {
      this.state = 1;
    });
    timer(4000).subscribe(n => {
      this.state = 2;
    });
  }

}
