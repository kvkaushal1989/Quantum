
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-image-upload',
  templateUrl: './new-image-upload.component.html',
  styleUrls: ['./new-image-upload.component.scss']
})
export class NewImageUploadComponent implements OnInit {
 
  public imageSrc: any = {
    base64:'',
  };
  public isEdit: boolean = true;
  public isDelete: boolean = false;
  eventValue: any;

  @Input() placeholder;
  @Input()
  public set sourceImg(data) {
    if (data) {
      this.imageSrc.base64 = data;
      this.isDelete = true;
      this.isEdit = false;
    }
  }
  public get sourceImg() {
    return this.imageSrc;
  }
  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public handleInputChange(e) {
    this.eventValue = e.target.files[0];
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  public handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = {
      base64: reader.result,
      file: this.eventValue
    };

    if (reader.result) {
      this.isDelete = true;
      this.isEdit = false;
    }
    this.selectedImage.emit(this.imageSrc);
    console.log(this.imageSrc)
  }

  public removeImage() {
    this.isEdit = true;
    this.isDelete = false;
    this.imageSrc.base64 = '';
    this.selectedImage.emit('file_deleted');
  }
}
