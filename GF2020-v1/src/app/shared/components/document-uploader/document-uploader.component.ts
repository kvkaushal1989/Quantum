import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-document-uploader',
  templateUrl: './document-uploader.component.html',
  styleUrls: ['./document-uploader.component.scss']
})
export class DocumentUploaderComponent implements OnInit {
  // public imageSrc: string = '../assets/images/img-flag.png';
  public imageSrc: string = '';
  imgSrc:any;
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
  public uploadedDoc = '';

  public set fileTypeName(val: any) {
    if (val) {
      const docType = val;
      if (docType == 'pdf') {
        this.uploadedDoc = './assets/images/uploader/Pdf-thumb.png';
      }
      else if (docType == 'docx') {
        this.uploadedDoc = './assets/images/uploader/Word-thumb.png';
      }
      else if (docType == 'xlsx') {
        this.uploadedDoc = './assets/images/uploader/Excel-thumb.png';
      }
      else {
        this.uploadedDoc = './assets/images/uploader/image_placeholder.jpg';
      }
    } else {
      this.uploadedDoc = '';
    }
  }

  // public get fileTypeName() {
  //   return this.fileType;
  // }


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

  fileList: any = [];
  file_name: any;
  fileType: any;
  docConfig: any = {};
  public handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileList.push(file);
    var reader = new FileReader();

    this.file_name = file.name;
    this.fileType = (file.type);
    const docType = this.file_name.split('.')[1];
    this.docConfig.fileName = this.file_name.split('.')[0];
    this.docConfig.fileType = this.file_name.split('.')[1];
    if (docType === 'pdf') {
      this.uploadedDoc = './assets/images/uploader/Pdf-thumb.png';
    } else if (docType === 'docx') {
      this.uploadedDoc = './assets/images/uploader/Word-thumb.png';
    } else if (docType === 'xlsx') {
      this.uploadedDoc = './assets/images/uploader/Excel-thumb.png';
    }else{
      this.uploadedDoc = './assets/images/uploader/image_placeholder.jpg';
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
    console.log(this.imageSrc)
  }

  public removeImage() {
    this.isEdit = true;
    this.isDelete = false;
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
        let parseValue = JSON.parse(event);
        console.log(parseValue)
        let tmpEvent = parseValue.Attachments[0]
        this.selectedImage.emit(tmpEvent.filePath);
        if (this.fileType === 'image') {
          this.uploadedDoc = tmpEvent.filePath;
        }
      },
      (err) => {

      }
    );
  }
}


