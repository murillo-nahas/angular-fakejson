import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/interfaces/drivers';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor(private driverService: DriversService) { }

  public drivers: Drivers[] | any;

  ngOnInit() {
    this.driverService.getDrivers()
    .subscribe(
      drivers => {
        this.drivers = drivers;
        console.log(drivers)
      },
      error => console.log(error)
    );
  }

}
