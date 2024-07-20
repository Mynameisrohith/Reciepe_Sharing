import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReciepeComponent } from './create-reciepe.component';

describe('CreateReciepeComponent', () => {
  let component: CreateReciepeComponent;
  let fixture: ComponentFixture<CreateReciepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReciepeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReciepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
