
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpGamelogComponent } from './mvp-gamelog.component';

describe('MvpGamelogComponent', () => {
  let component: MvpGamelogComponent;
  let fixture: ComponentFixture<MvpGamelogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpGamelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvpGamelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
