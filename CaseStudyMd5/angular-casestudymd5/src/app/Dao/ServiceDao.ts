import {Facility} from '../facility';

export class ServiceDao {
  static  faciity:Facility[]=[
    {facilityId : 1,
      facilityName: 'Villa',
      area: 700,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      poolArea: 300,
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1},

    {facilityId : 2,
      facilityName: 'House',
      area: 500,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      poolArea: 200,
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1},

    {facilityId : 3,
      facilityName: 'Room',
      area: 300,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1},
    {facilityId : 4,
      facilityName: 'Room',
      area: 300,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1},
    {facilityId : 5,
      facilityName: 'Room',
      area: 300,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1},
    {facilityId : 6,
      facilityName: 'Room',
      area: 300,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      numberOfFloors:0,
      rentType: 1,
      facilityType: 1}
  ]
  static getAllListService(){
    return this.faciity;
  }


}