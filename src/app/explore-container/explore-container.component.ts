import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from '../service/driver-service.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private driverService: DriverService) {}


  clickTest() {
    this.driverService.test().subscribe((data: any) => {
      alert(data);
    });
  }

  ngOnInit() {}

}
