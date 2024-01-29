import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProviderComponent } from './social-provider.component';

describe('SocialProviderComponent', () => {
  let component: SocialProviderComponent;
  let fixture: ComponentFixture<SocialProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
