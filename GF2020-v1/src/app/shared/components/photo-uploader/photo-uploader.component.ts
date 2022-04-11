import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {
  // public imageSrc: string = '../assets/images/img-flag.png';
  public imageSrc: string = '';
  public isEdit: boolean = true;
  public isDelete: boolean = false;
  @Input() placeholder;
  @Input() uploadObject;
  @Input()
  public set sourceImg(data) {
    if (data) {
      this.imageSrc = data;
      this.isDelete = true;
      this.isEdit = false;
    }
  }

  public get sourceImg() {
    return this.imageSrc;
  }
  // @Output() selectedImage = new EventEmitter<any>();
  // @Input() set imageSrc(imageSrc: string) {
  //   if(imageSrc){
  //   this._imageSrc = imageSrc || null;
  //   }
  // }

  // get imageSrc(): string { return this._imageSrc; }

  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();

  constructor(public sharedService: SharedService, public localstorageServive: LocalStorageService) { }

  ngOnInit() {
    console.log(this.imageSrc)
  }

  fileList: any = []
  public handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileList.push(file);
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    this.uploadFile()
  }

  public handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    if (reader.result) {
      this.isDelete = true;
      this.isEdit = false;
    }
    // this.selectedImage.emit(this.imageSrc);
    console.log(this.imageSrc)
  }

  public removeImage() {
    this.isEdit = true;
    this.isDelete = false;
    //this.imageSrc = '../assets/images/img-flag.png';
    this.imageSrc = '';
    this.selectedImage.emit("");
  }


  uploadFile() {
    const dataFilter = {
      process: this.uploadObject.formName,
      userpk: this.localstorageServive.getUserPk(),
      remarks: '',
      transactionrefid: '',
      attachmenttype: 'attachment',
      referencefk: 0,
      referenceno: 0
    };
    this.sharedService.uploadFilestoFolder(this.fileList, dataFilter).subscribe(
      (event) => {
        console.log(event)
        let parseValue =  JSON.parse(event);
        console.log(parseValue)
        let tmpEvent = parseValue.Attachments[0]
        this.selectedImage.emit(tmpEvent.filePath);
      },
      (err) => {

      }
    );
  }
}


