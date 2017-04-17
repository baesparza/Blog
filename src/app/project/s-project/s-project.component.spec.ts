import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SProjectComponent } from './s-project.component';

describe('SProjectComponent', () => {
  let component: SProjectComponent;
  let fixture: ComponentFixture<SProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
