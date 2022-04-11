import { Directive, ElementRef, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';

// import { } from 'googlemaps';
import { LocationMasterService } from '../../services/settings/location-master/location-master.service';
// import { } from '@types/googlemaps';

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements AfterViewInit {

  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef, private locationService: LocationMasterService) {
    // elRef will get a reference to the element where
    // the directive is placed
    this.element = elRef.nativeElement;
  }

  ngAfterViewInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
    console.log(this.locationService.countryDetails['country_code2']); 
    autocomplete.setComponentRestrictions(
      {'country': [this.locationService.countryDetails['country_code2']]});

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // Emit the new address object for the updated place
      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
    });
  }


  getFormattedAddress(place) {

    console.log('lat....', place.geometry.location.lat());
    console.log('lang....', place.geometry.location.lng());


    // @params: place - Google Autocomplete place object
    // @returns: location_obj - An address object in human readable format
    let location_obj = {};
    for (let i in place.address_components) {
      let item = place.address_components[i];
      console.log('item....', item);
      location_obj['formatted_address'] = place.formatted_address;
      if (item['types'].indexOf("locality") > -1) {
        location_obj['locality'] = item['long_name']
      } else if (item['types'].indexOf("administrative_area_level_1") > -1) {
        location_obj['admin_area_l1'] = item['short_name']
      } else if (item['types'].indexOf("street_number") > -1) {
        location_obj['street_number'] = item['short_name']
      } else if (item['types'].indexOf("route") > -1) {
        location_obj['route'] = item['long_name']
      } else if (item['types'].indexOf("country") > -1) {
        location_obj['country'] = item['long_name']
      } else if (item['types'].indexOf("postal_code") > -1) {
        location_obj['postal_code'] = item['short_name']
      }

      location_obj['latitude'] = place.geometry.location.lat();
      location_obj['longitude'] =  place.geometry.location.lng();

    }
    return location_obj;
  }

}

