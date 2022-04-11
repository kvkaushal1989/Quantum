export class CoarriModel {
    uploadDataset: {
        tblHead: [
            {
                CHAR_SET: string;
                SENDER_CODE: string;
                RECEIVER_CODE: string;
                CREATE_TIME: string;
            }
        ];
        tblDtl: [
            {
                UNIQUE_REFNR: string;
                FILE_TYPE: string;
                VESSEL_NAME: string;
                VOY_NO: string;
                PORT: string;
                ATA: string;
                ATD: string;
                CONTAINER_NR: string;
                MOVE_DATE: string;
                GROSS_WGT: number;
                TARE_WGT: number;
                SEAL_NR1: string;
                SEAL_NR2: string;
                SEAL_NR3: string;
                CSTPK?: number
            }
        ]
    };
    coarriuploaddetailSaveDto: CoarriDetailDto[];
    coarrierrordetailSaveDto: CoarriSaveDTO[];
}
export class CoarriSaveDTO {
    coarriuploaddetailpk: number;
    coarriuploadmasterfk: number;
    bookingmasterfk: number;
    containernr: string;
    containertypefk: number;
    containerstatus: string;
    movecodeid: string;
    movedate: string;
    stowageposition: string;
    vesselname: string;
    voyage: string;
    port: string;
    terminal: string;
    bookingcontainerfk: number;
    childbookingcontainerfk: number;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}
export class CoarriDetailDto {
    coarrierrordetailpk: number;
    coarriuploadmasterfk: number;
    containernr: string;
    containertypeid: string;
    containerstatus: string;
    movecodeid: string;
    movedate: string;
    vesselname: string;
    voyage: string;
    port: string;
    terminal: string;
    errordesc: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}

