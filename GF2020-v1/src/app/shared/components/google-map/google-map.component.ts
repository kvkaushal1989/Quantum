import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { TerminalMasterComponent } from 'src/app/pages/settings/country/terminal-master/terminal-master.component';
import { TerminalMasterService } from 'src/app/services/settings/country-master/terminal-master.service';
import { LocationMasterService } from 'src/app/services/settings/location-master/location-master.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @ViewChild('gmap', { static: true }) gmapElement: any;
  @Input() keyToSearch;
  @Input() formName;

  public map: google.maps.Map;
  public _markers: any;

  @Input()
  public set markers(data: any) {
    if (data) {
      this._markers = data;
      this.generateMap();
    }
  };

  public get markers() {
    return this._markers;
  }

  public lat: number;
  public lng: number;

  public width = '100%';
  public height = '258px';

  constructor(public terminalService: TerminalMasterService, public locationService: LocationMasterService) { }

  ngOnInit() {
    // alert(this.formName)
    if (this.formName === 'location') {
      this.getAllLocations();
    } else {
      this.getAllTerminals();
    }

  }

  public generateMap() {
    console.log('this.lat', this.lat)
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 4,
      center: { lat: this.lat, lng: this.lng },
      zoomControl: false
    });

    this.setMarkers(this.map);
  }

  public setMarkers(map) {

    // here can add the image which needs
    let image = {
      url: '../assets/images/map-pointer.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };

    for (let i = 0; i < this._markers.length; i++) {
      // var beach = this._markers[i];
      let marker = new google.maps.Marker({
        position: { lat: +this._markers[i].lat, lng: +this._markers[i].lng },
        map: map,
        icon: image,
        // label: this.markers[i].name,
        shape: {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        },
      });
    }
  }


  public getAllTerminals() {
    let Obj = {
      PortmasterFk: 0,
      TerminalmasterPk: 0,
      TerminalId: '',
      pageNumber: 1,
      pageSize: 10,
      IsActive: 1
    }
    this.terminalService
      .getAllTerminalListByLocation(Obj, 1)
      .subscribe(
        (res: any) => {
          let geocoder = new google.maps.Geocoder();
          // var address = "Bangalore";
          let value = this.keyToSearch
          if (!value) {
            value = res.result.Data[0].portName
          }
          geocoder.geocode({ 'address': value }, (results, status) => {
            // if (status == google.maps.GeocoderStatus.OK) {
            //   this.lat = results[0].geometry.location.lat();
            //   this.lng = results[0].geometry.location.lng();
            //   console.log(' this.lat', this.lat)
            //   console.log(' this.lng', this.lng)
            //   this.generateMap()
            // }
          });
        },
        (error) => {

        },
        () => {

        }
      );
  }


  public getAllLocations() {
    let Obj = {
      CountryMasterFk: 0,
      Status: 1,
      SearchValue: '',
      pageNumber: 1,
      pageSize: 10
    }

    this.locationService
      .getLocationsListByCountry(Obj, 1)
      .subscribe((res: any) => {
        let geocoder = new google.maps.Geocoder();
        // var address = "Bangalore";
        let value = this.keyToSearch
        if (!value) {
          value = res.result.Data[0].portName
        }
        geocoder.geocode({ 'address': value }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
            console.log(' this.lat', this.lat)
            console.log(' this.lng', this.lng)
            this.generateMap()
          }
        });
      });
  }

}
