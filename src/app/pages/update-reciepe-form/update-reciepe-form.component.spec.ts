import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReciepeFormComponent } from './update-reciepe-form.component';

describe('UpdateReciepeFormComponent', () => {
  let component: UpdateReciepeFormComponent;
  let fixture: ComponentFixture<UpdateReciepeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateReciepeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateReciepeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
