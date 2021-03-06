import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BasicSelectConfig {
    label: string;
    showErrors: boolean;
    placeholder: string;
    required: boolean;
    notFoundText = 'No items found';
    typeToSearchText = 'Type to search';
    addTagText = 'Add item';
    loadingText = 'Loading...';
    clearAllText = 'Clear all';
    disableVirtualScroll = true;
    openOnEnter = true;
    appendTo: string;
    bindValue: string;
    appearance = 'underline';
}
