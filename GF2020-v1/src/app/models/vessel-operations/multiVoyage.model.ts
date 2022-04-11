export interface MultiVoyageSaveObject {
          multivoyassetPk: number;
          servicemasterFk: number;
          servicename: string;
          serviceshotcode: string;
          serviceType: null;
          nrconvey: number;
          consecutivenr: number;
          firstvoynr: string;
          vfService: string;
          vfBarge: string;
          vfVoynr: string;
          nbportfk: number;
          nbportId: string;
          nbportName: string;
          sbportfk: number;
          sbportId: string;
          sbportName: string;
          generateoption: number;
          tilldate: string;
          nrofvoy: number;
          isActive: number;
          createdByFk: 1;
          createdOn: string;
          lastUpdatedByFk: null;
          lastUpdatedOn: null;
          versionNo: number;
          convoyDtls: [];
}

export interface ConvoyDtlsObject {
    convoydtlsPk: number;
    multivoyassetFk: number;
    convoynr: number;
    startday: number;
    starttime: string;
    bargeFk: number;
    bargeId: 502;
    bargeName: string;
    oceantugFk: number;
    oceantugId: string;
    oceantugName: string;
    rivertugFk: number;
    rivertugId: string;
    rivertugName: string;
    isActive: 1;
    createdByFk: null;
    createdOn: string;
    lastUpdatedByFk: null;
    lastUpdatedOn: null;
    versionNo: 1;
}