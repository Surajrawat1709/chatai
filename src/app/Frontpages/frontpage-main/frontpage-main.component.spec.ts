import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageMainComponent } from './frontpage-main.component';

describe('FrontpageMainComponent', () => {
  let component: FrontpageMainComponent;
  let fixture: ComponentFixture<FrontpageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontpageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontpageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
