
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MvpTitleBarComponent } from './mvp-title-bar.component';

describe('MvpTitleBarComponent', () => {
  let component: MvpTitleBarComponent;
  let fixture: ComponentFixture<MvpTitleBarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MvpTitleBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvpTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
