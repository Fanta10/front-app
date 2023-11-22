import { Rex } from './../../../logiciel/logiciel/models/rex';
export interface Page {

    "content":Rex[],
    "pageable": {
        "pageNumber": number,
        "pageSize": number,
        "sort": {
            "empty": boolean,
            "unsorted": boolean,
            "sorted": boolean
        },
        "offset": number,
        "unpaged": boolean,
        "paged": boolean
    },
    "last": boolean,
    "totalPages": number,
    "totalElements": number,
    "first": boolean,
    "size": number,
    "number": number,
    "sort": {
        "empty": boolean,
        "unsorted": boolean,
        "sorted": boolean
    },
    "numberOfElements": number,
    "empty": boolean
}

