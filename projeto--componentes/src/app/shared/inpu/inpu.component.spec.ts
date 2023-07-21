import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpuComponent } from './inpu.component';

describe('InpuComponent', () => {
  let component: InpuComponent;
  let fixture: ComponentFixture<InpuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InpuComponent]
    });
    fixture = TestBed.createComponent(InpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
