import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { NgxPaginationModule } from 'ngx-pagination';

import { SimpleTextboxComponent } from './components/custom-inputs/simple-textbox/simple-textbox.component';
import { WholeNumberInputComponent } from './components/custom-inputs/whole-number-input/whole-number-input.component';
import { CurrencyInputComponent } from './components/custom-inputs/currency-input/currency-input.component';
import { WeightInputComponent } from './components/custom-inputs/weight-input/weight-input.component';
import { VolumeInputComponent } from './components/custom-inputs/volume-input/volume-input.component';
import { DatePickerComponent } from './components/custom-inputs/date-picker/date-picker.component';
import { TwoDigitDecimaNumberDirective } from './directives/two-digit-decimal.directive';
import { ThreeDigitDecimalDirective } from './directives/three-digit-decimal.directive';
import { BasicSelectComponent } from './components/custom-inputs/basic-select/basic-select.component';
import { MultiSelectComponent } from './components/custom-inputs/multi-select/multi-select.component';
import { TimePickerHmComponent } from './components/custom-inputs/time-picker-hm/time-picker-hm.component';
import { TimePickerHmsComponent } from './components/custom-inputs/time-picker-hms/time-picker-hms.component';
import { TimePickerHrsComponent } from './components/custom-inputs/time-picker-hrs/time-picker-hrs.component';
import { RadioInputComponent } from './components/custom-inputs/radio-input/radio-input.component';
import { CheckboxInputComponent } from './components/custom-inputs/checkbox-input/checkbox-input.component';
import { TextAreaInputComponent } from './components/custom-inputs/text-area-input/text-area-input.component';
import { LabelComponent } from './components/labels/label/label.component';
// import { AutocompleteInputComponent } from './components/custom-inputs/autocomplete-input/autocomplete-input.component';
// tslint:disable-next-line: max-line-length
// import { AutocompleteMultipleInputComponent } from './components/custom-inputs/autocomplete-multiple-input/autocomplete-multiple-input.component';
import { TableComponent } from './components/table/table.component';
import { ExpansionTableComponent } from './components/expansion-table/expansion-table.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SharedService } from './services/shared.service';
import { TabComponent } from './components/tab/tab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StatusNotificationComponent } from './components/status-notification/status-notification.component';
import { SimpleNotificationsComponent } from './components/simple-notifications/simple-notifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ProfileImageUploadComponent } from './components/profile-image-upload/profile-image-upload.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { BasicSelectPrimeComponent } from './components/form-controls/select/basic-select/basic-select-prime/basic-select-prime.component';
import { EditableTableComponent } from './components/editable-table/editable-table.component';
import { BasicTableModule } from './components/basic-table/basic-table.module';
import { SimpleTextBoxCModule } from './components/form-controls/simple-text-box/simple-text-box.component';
import { BasicRadioButtonModule } from './components/form-controls/basic-radio-button/basic-radio-button.module';
import { BasicCheckBoxModule } from './components/form-controls/basic-check-box/basic-check-box.module';
import { BasicCurrencyInputModule } from './components/form-controls/basic-currency-input/basic-currency-input.module';
import { BasicWeightInputModule } from './components/form-controls/basic-weight-input/basic-weight-input.module';
import { BasicVolumeInputModule } from './components/form-controls/basic-volume-input/basic-volume-input.module';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { BasicSelectModule } from './components/form-controls/select/basic-select/basic-select.module';
import { BasicLabelsModule } from './components/form-controls/basic-labels/basic-labels.module';
import { BasicAutoCompletModule } from './components/form-controls/select/basic-auto-complete/basic-auto-complete.module';
import { BasicDailogModule } from './components/basic-dailog/basic-dailog.module';
import { OnlyAlphabetDirective } from './directives/only-alphabet.directive';
import { OnlyNumberInputDirective } from './directives/only-number-input.directive';
import { PhoneNumberInputDirective } from './directives/phone-number-input.directive';
import { FocusDirective } from './directives/focus.directive';
import { BasicTooltipDirective } from './directives/tooltip.directive';
import { InputBoxModule } from './components/form-controls/input-box/input-box.module';
import { AlphaNumericDirective } from './directives/alpha-numeric.directive';
import { GooglePlaceInputModule } from './components/form-controls/google-place-input/google-place-input.module';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { BasicSwitchModule } from './components/form-controls/switch/basic-switch.module';
import { ImageUploadPreviewComponent } from './components/image-upload-preview/image-upload-preview.component';
import { NumberFormatDirective } from './directives/number-format.directive';
import { DecimalDigitsDirective } from './directives/decimal-format.directive';
import { TabIndexDirective } from './directives/tab-index.directive';
import { BasicDateTimePickerModule } from './components/form-controls/basic-date-time-picker/basic-date-time-picker.module';
import { DivFocusDirective } from './directives/div-focus.directive';
import { NumberFormatePipe } from './pipes/number-formate.pipe';
import { BasicSwiperModule } from './components/basic-swiper/basic-swiper.module';
import { MatMenuModule } from '@angular/material/menu';
import { DateFormatPipe } from './pipes/DateFormat.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BasicChartsModule } from './components/basic-charts/basic-charts.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PositiveNumberPipe } from './pipes/positive-number.pipe';
// import { AuthGuardService } from '../authentication/services/auth-guard.service';
// import { CountdownTimerModule } from 'ngx-countdown-timer';
import { SecureFormatPipe } from './pipes/secure-format.pipe';
import { SecureEmailPipe } from './pipes/secure-email.pipe';
import { ConfirmLeaveComponent } from './components/confirm-leave/confirm-leave.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { PrintFeatureComponent } from './components/print-feature/print-feature.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ShareFeatureComponent } from './components/share-feature/share-feature.component';
import { RestrictedAccessPopupComponent } from './components/restricted-access-popup/restricted-access-popup.component';
import { TimeZoneInputDirective } from './directives/time-zone-input.directive';
import { AlphaWithSpaceDirective } from './directives/alpha-with-space.directive';
import { BasicMultiSelectModule } from './components/form-controls/select/basic-multi-select/basic-multi-select.module';

import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { DynamicNumberFormatePipe } from './pipes/dynamic-number-formate.pipe';

// import { EmailManagementComponent } from '../pages/email-management/email-management.component';
// import { InboxComponent } from '../pages/email-management/inbox/inbox.component';
// import { SentMailComponent } from '../pages/email-management/sent-mail/sent-mail.component';
// import { ComposeComponent } from '../pages/email-management/compose/compose.component';
// import { TrashComponent } from '../pages/email-management/trash/trash.component';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { BasicOptionHighlightDirective } from './components/form-controls/select/basic-auto-complete/basic-option-highlight.directive';
import { CarouselItemElement } from './components/basic-swiper/carousel/carousel.component';
import { DateInputDirective } from './directives/date-input.directive';
import { GlobalNumberFormatDirective } from './directives/globalNumberFormat.directive';
import { InputMaskDirective } from './directives/input-mask.directive';

import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { DraftComponent } from '../pages/email-management/draft/draft.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RoeFormatPipe } from './pipes/roe-format.pipe';
import { MinusToParensPipePipe } from './pipes/MinusToParensPipe.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NewImageUploadComponent } from './components/new-image-upload/new-image-upload.component';
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';
import { DocumentUploaderComponent } from './components/document-uploader/document-uploader.component';
import { PrintLoaderComponent } from './components/print-loader/print-loader.component';
import { DatepickerTouchuiComponent } from './components/custom-inputs/datepicker-touchui/datepicker-touchui.component';
import { DocumentUploaderNewComponent } from './components/document-uploader-new/document-uploader-new.component';
import { FuzzyfilterPipe } from './pipes/fuzzyfilter.pipe';

// import { ConfirmLeaveComponent } from './components/confirm-leave/confirm-leave.component';
// import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    SimpleTextboxComponent,
    WholeNumberInputComponent,
    CurrencyInputComponent,
    WeightInputComponent,
    VolumeInputComponent,
    DatePickerComponent,
    TwoDigitDecimaNumberDirective,
    ThreeDigitDecimalDirective,
    BasicSelectComponent,
    MultiSelectComponent,
    //  GF2020MultiSelect,
    TimePickerHmComponent,
    TimePickerHmsComponent,
    TimePickerHrsComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    TextAreaInputComponent,
    LabelComponent,
    // AutocompleteInputComponent,
    // AutocompleteMultipleInputComponent,
    TableComponent,
    ExpansionTableComponent,
    NotificationsComponent,
    TabComponent,
    AccordionComponent,
    NavBarComponent,
    SliderComponent,
    ProgressBarComponent,
    SideMenuComponent,
    StatusNotificationComponent,
    SimpleNotificationsComponent,
    FooterComponent,
    BreadCrumbComponent,
    ImageUploadComponent,
    DocumentUploadComponent,
    FileUploaderComponent,
    ProfileImageUploadComponent,
    GoogleMapComponent,
    BasicSelectPrimeComponent,
    EditableTableComponent,
    OnlyAlphabetDirective,
    OnlyNumberInputDirective,
    PhoneNumberInputDirective,
    TimeZoneInputDirective,
    AlphaWithSpaceDirective,
    BasicOptionHighlightDirective,
    GooglePlacesDirective,
    FocusDirective,
    BasicTooltipDirective,
    AlphaNumericDirective,
    ImageUploadPreviewComponent,
    NumberFormatDirective,
    DecimalDigitsDirective,
    TabIndexDirective,
    DivFocusDirective,
    NumberFormatePipe,
    DynamicNumberFormatePipe,
    DateFormatPipe,
    PositiveNumberPipe,
    SecureFormatPipe,
    SecureEmailPipe,
    ConfirmLeaveComponent,
    UnderConstructionComponent,
    // EmailManagementComponent,
    // InboxComponent,
    // DraftComponent,
    // SentMailComponent,
    // ComposeComponent,
    // TrashComponent,
    DashboardComponent,
    PrintFeatureComponent,
    // ShareFeatureComponent,
    RestrictedAccessPopupComponent,
    CarouselItemElement,
    DateInputDirective,
    GlobalNumberFormatDirective,
    InputMaskDirective,
    RoeFormatPipe,
    MinusToParensPipePipe,
    NewImageUploadComponent,
    PhotoUploaderComponent,
    DocumentUploaderComponent,
    PrintLoaderComponent,
    DatepickerTouchuiComponent,
    DocumentUploaderNewComponent,
    FuzzyfilterPipe,
    // ConfirmLeaveComponent
    // HeaderComponent,
  ],
  imports: [
    ChartsModule,
    // CountdownTimerModule,
    PdfViewerModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    // SelectAutocompleteModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    TableModule,
    InputMaskModule,
    ChipsModule,
    AutoCompleteModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    DropdownModule,
    MatTooltipModule,
    NavBarModule,
    SideBarModule,

    SimpleTextBoxCModule,
    InputBoxModule,
    BasicSelectModule,
    BasicAutoCompletModule,
    BasicMultiSelectModule,
    BasicTableModule,
    BasicCheckBoxModule,
    BasicRadioButtonModule,
    BasicCurrencyInputModule,
    BasicWeightInputModule,
    BasicVolumeInputModule,
    BasicLabelsModule,
    BasicDailogModule,
    GooglePlaceInputModule,
    BasicSwitchModule,
    BasicDateTimePickerModule,
    BasicSwiperModule,
    DragDropModule,
    BasicChartsModule,
    InputTextareaModule,
    EditorModule,
    InputSwitchModule,
    NgxPaginationModule,
    MatProgressBarModule,
    CKEditorModule,
  ],
  exports: [
    TranslateModule,
    // CountdownTimerModule,
    PdfViewerModule,
    WholeNumberInputComponent,
    SimpleTextboxComponent,
    CurrencyInputComponent,
    WeightInputComponent,
    VolumeInputComponent,
    DatePickerComponent,
    DatepickerTouchuiComponent,
    BasicSelectComponent,
    TimePickerHmComponent,
    TimePickerHmsComponent,
    TimePickerHrsComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    TextAreaInputComponent,
    LabelComponent,
    MultiSelectComponent,
    // GF2020MultiSelect,
    // AutocompleteInputComponent,
    // AutocompleteMultipleInputComponent,
    TableComponent,
    ExpansionTableComponent,
    NotificationsComponent,
    TabComponent,
    AccordionComponent,
    MatExpansionModule,
    MatTabsModule,
    SliderComponent,
    ProgressBarComponent,
    StatusNotificationComponent,
    SimpleNotificationsComponent,
    FooterComponent,
    ImageUploadComponent,
    TableModule,
    InputMaskModule,
    ChipsModule,
    DocumentUploadComponent,
    FileUploaderComponent,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    ProfileImageUploadComponent,
    GoogleMapComponent,
    BasicSelectPrimeComponent,
    EditableTableComponent,
    ImageUploadPreviewComponent,
    SideMenuComponent,
    NavBarModule,
    SideBarModule,
    MatTooltipModule,
    SimpleTextBoxCModule,
    InputBoxModule,
    BasicSelectModule,
    BasicAutoCompletModule,
    BasicMultiSelectModule,
    BasicTableModule,
    BasicCheckBoxModule,
    BasicRadioButtonModule,
    BasicCurrencyInputModule,
    BasicWeightInputModule,
    BasicVolumeInputModule,
    BasicLabelsModule,
    BasicDailogModule,
    PrintFeatureComponent,
    // ShareFeatureComponent,
    RestrictedAccessPopupComponent,
    OnlyAlphabetDirective,
    OnlyNumberInputDirective,
    PhoneNumberInputDirective,
    TimeZoneInputDirective,
    AlphaWithSpaceDirective,
    BasicOptionHighlightDirective,
    GooglePlacesDirective,
    FocusDirective,
    TabIndexDirective,
    DivFocusDirective,
    DecimalDigitsDirective,
    BasicTooltipDirective,
    NumberFormatDirective,
    GooglePlaceInputModule,
    BasicSwitchModule,
    ReactiveFormsModule,
    BasicDateTimePickerModule,
    BasicSwiperModule,
    NumberFormatePipe,
    DynamicNumberFormatePipe,
    DateFormatPipe,
    PositiveNumberPipe,
    SecureFormatPipe,
    SecureEmailPipe,
    DragDropModule,
    // ChartsModule,
    BasicChartsModule,
    ConfirmLeaveComponent,
    InputTextareaModule,
    EditorModule,
    InputSwitchModule,
    NgxPaginationModule,
    CKEditorModule,
    RoeFormatPipe,
    MinusToParensPipePipe,
    NavBarComponent,
    NewImageUploadComponent,
    PhotoUploaderComponent,
    DocumentUploaderComponent,
    DocumentUploaderNewComponent,
    PrintLoaderComponent,

    MatDatepickerModule,
    MatNativeDateModule,
    FuzzyfilterPipe,
  ],

  providers: [DatePipe, ThemeService, DecimalPipe, MatNativeDateModule],
})

export class SharedModule { }
