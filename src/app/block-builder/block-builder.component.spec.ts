import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBuilderComponent } from './block-builder.component';

describe('BlockBuilderComponent', () => {
  let component: BlockBuilderComponent;
  let fixture: ComponentFixture<BlockBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockBuilderComponent]
    });
    fixture = TestBed.createComponent(BlockBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
