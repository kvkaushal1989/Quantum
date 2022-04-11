import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload-preview',
  templateUrl: './image-upload-preview.component.html',
  styleUrls: ['./image-upload-preview.component.scss']
})
export class ImageUploadPreviewComponent implements OnInit {
  public _imageSrc: string = '';
  public isEdit : boolean = true;
  public isDelete : boolean = false;
  @Input() placeholder;
  // @Input()
  // public set sourceImg(data) {
  //   if (data) {
  //     this.imageSrc = data;
  //   }
  // }

  // public get sourceImg() {
  //   return this.imageSrc;
  // }
 // @Output() selectedImage = new EventEmitter<any>();
  @Input() set imageSrc(imageSrc: string) {
    if(imageSrc){
    this._imageSrc = imageSrc || null;
    }
  }
  get imageSrc(): string { return this._imageSrc; }

  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public handleInputChange(e) {
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
    this.imageSrc = reader.result;
    if(reader.result){
    this.isDelete = true;
    this.isEdit = false;
    }
    this.selectedImage.emit(this.imageSrc);
    console.log(this.imageSrc)
  }

  public removeImage(){
    this.isEdit = true;
    this.isDelete = false;
    //this.imageSrc = '../assets/images/img-flag.png';
    this.imageSrc = '';
    this.selectedImage.emit("");
  }
}
