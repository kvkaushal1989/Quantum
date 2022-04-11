export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    endRecord: number;
}

export class ReturnResult<T> {
    result: T;
    pagination: Pagination;
}

// export class PaginatedResult {
//     result: any;
//     pagination: Pagination;
// }
