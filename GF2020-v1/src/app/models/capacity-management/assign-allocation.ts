export interface AssignAllocation {
}

export interface AssignAllocationSetObj {
    allocationsettingpk: number;
    allocationtype: string;
    informcustomer: number;
    lwreduction: number;
    internalannounce: number;
    overbooking_ifk: string;
    obeta: string;
    shortfall_ifk: string;
    sfeta: string;

    is_active: number;
    created_by_fk: number;
    // created_on: string;
    // last_updated_by_fk: number;
    // last_updated_on: string;
    version_no: number;
}

export class SaveAssignAllocation {
    allocationmasterpk: number;
    servicemasterfk: number;
    lastdepport: number;
    interchangealloc: number;
    lwallocwgt: number;
    lwrules: number;
    prodatareduction: number;
    reeferacceptcreteria: number;
    hazacceptcreteria: number;
    hazgfapproval: number;
    hazclassrestrict: number;
    bound: string;
    is_active: number;
    created_by_fk: number;
    isUpdated: boolean = false;
    // created_on: string;
    // last_updated_by_fk: number;
    // last_updated_on: string;
    version_no: number;
    allocDtlList: AllocationDetail[];
}

export class AllocationDetail {
      allocationdetailpk: number;
      allocationmasterfk: number;
      servicemasterfk: number;
      customermstfk: number;
      portfk: number;
      teu: number;
      weight: number;
      reefer: number;
      hazmat: number;
      is_active: number;
      created_by_fk: number;
    //   created_on: string;
    //   last_updated_by_fk: number;
    //   last_updated_on: string;
      version_no: number;
}
