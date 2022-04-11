import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  public message: string;
  public uploadedFiles: any;
  public uploadedDoc = '';
  @Input()
  public file_name: any;
  public fileType: string;
  public docConfig: any = {
    fileType: '',
    fileName: '',
    imgSrcData: ''
  };
  @Input() imgSource;
  @Input() fileName;
  @Input()
  public set fileTypeName(val: any) {
    if (val) {
      const docType = val;
      if (docType == 'pdf') {
        this.uploadedDoc = '../../../../assets/images/uploader/Pdf-thumb.png';
      }
      else if (docType == 'docx') {
        this.uploadedDoc = '../../../../assets/images/uploader/Word-thumb.png';
      }
      else if (docType == 'xlsx') {
        this.uploadedDoc = '../../../../assets/images/uploader/Excel-thumb.png';
      }
      else {
        this.uploadedDoc = this.imgSource;
      }
    } else {
      this.uploadedDoc = '';
    }
  }

  public get fileTypeName() {
    return this.fileType;
  }

  // @Input()
  // public fileTypes: string;

  @Input()
  doc;

  @Input()
  public maxFileSize: number;

  @Output()
  public uploadedFile = new EventEmitter<any>();
  @Output()
  public actFile = new EventEmitter<any>();

  constructor(public localstorageService: LocalStorageService) { }

  acceptedFileTypes: string = '';
  ngOnInit() {
    console.log(this.getPermittedFiles())
    let tmpFileTypes = this.getPermittedFiles();
    if (tmpFileTypes) {
      this.acceptedFileTypes = tmpFileTypes.toString();
    }
  }

  getPermittedFiles() {
    return this.localstorageService.getPermittedFiles();
  }

  preview(files) {
    if (files[0].size > this.maxFileSize) {
      return this.message = 'Uploaded file is to big...';
    }
    this.fileName = files[0].name;
    // this.uploadedFile.emit(files[0]);
  }

  public handleDocumentUpload(e) {
    this.actFile.emit(e);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file.size > this.maxFileSize) {
      return this.message = 'Uploaded file is to big...';
    }
    let tmpFileTypes = this.getPermittedFiles();
    if (tmpFileTypes) {
      for (let m in tmpFileTypes) {
        tmpFileTypes[m] = tmpFileTypes[m].toLowerCase()
      }
    }
    let fileType = file.name.split('.')[1];
    console.log(tmpFileTypes)
    console.log(fileType)
    let validType = tmpFileTypes.includes(fileType);
    if (!validType) {
      return this.message = 'You are not permitted to upload this file type';
    }
    this.message = '';
    this.file_name = file.name;
    this.fileType = (file.type);
    const docType = this.file_name.split('.')[1];
    this.docConfig.fileName = this.file_name.split('.')[0];
    this.docConfig.fileType = this.file_name.split('.')[1];
    if (docType === 'pdf') {
      this.uploadedDoc = '../../../../assets/images/uploader/Pdf-thumb.png';
    } else if (docType === 'docx') {
      this.uploadedDoc = '../../../../assets/images/uploader/Word-thumb.png';
    } else if (docType === 'xlsx') {
      this.uploadedDoc = '../../../../assets/images/uploader/Excel-thumb.png';
    } else {
      this.uploadedDoc = '';
    }
    this.fileType = this.fileType.split('/')[0];
    const reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  public handleReaderLoaded(e) {
    const reader = e.target;
    if (this.fileType === 'image') {
      this.uploadedDoc = reader.result;
    }
    this.docConfig.imgSrcData = reader.result;
    this.uploadedFile.emit(this.docConfig);
    console.log(this.docConfig);
  }
  ngOnDestroy() {
    this.uploadedDoc = '';
  }

}
