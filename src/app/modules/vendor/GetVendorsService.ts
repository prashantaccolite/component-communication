import {Injectable} from "@angular/core"

export class GetVendorsService {
  vendors() {
    return [
      {
        "name": "vend1",
        "age": 40,
        "city": "city1",
      },
      {
      "name": "vend2",
      "age": 41,
      "city": "city2",
      },
      {
        "name": "vend3",
        "age": 43,
        "city": "city3",
      },
      {
        "name": "vend4",
        "age": 39,
        "city": "city4",
      },
      {
        "name": "vend5",
        "age": 37,
        "city": "city5",
      },
  ];
  }
}
