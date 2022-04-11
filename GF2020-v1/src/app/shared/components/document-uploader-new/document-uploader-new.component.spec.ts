import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploaderNewComponent } from './document-uploader-new.component';

describe('DocumentUploaderNewComponent', () => {
  let component: DocumentUploaderNewComponent;
  let fixture: ComponentFixture<DocumentUploaderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUploaderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploaderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
