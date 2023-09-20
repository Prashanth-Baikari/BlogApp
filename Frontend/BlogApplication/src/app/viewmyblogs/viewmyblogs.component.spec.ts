import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyblogsComponent } from './viewmyblogs.component';

describe('ViewmyblogsComponent', () => {
  let component: ViewmyblogsComponent;
  let fixture: ComponentFixture<ViewmyblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmyblogsComponent]
    });
    fixture = TestBed.createComponent(ViewmyblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
