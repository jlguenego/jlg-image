import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlgImageComponent } from './jlg-image.component';

describe('JlgImageComponent', () => {
  let component: JlgImageComponent;
  let fixture: ComponentFixture<JlgImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlgImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
