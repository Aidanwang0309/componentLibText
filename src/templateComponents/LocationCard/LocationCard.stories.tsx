import React from "react";
import {LocationCard} from "./LocationCard";

const locationData = {
  id: "5dd384dc93f3f4427cd6f82a",
  serviceEstimates: {
    prep: null,
    delivery: 55,
    threshold: null,
    increment: null,
  },
  isPickupEnabled: true,
  isDeliveryEnabled: true,
  isOpen: true,
  timeZone: "America/New_York",
  slug: "Broadway",
  _id: "5dd384dc93f3f4427cd6f82a",
  address: {
    street2: "",
    geo: {
      lat: 40.75437,
      long: -73.98623,
    },
    street1: "1440 Broadway",
    city: "New York",
    state: "NY",
    zip: "10018",
  },
  hours: [
    {
      pickupOpen: "00:00",
      pickupClose: "23:59",
      deliveryOpen: "12:00",
      deliveryClose: "12:00",
      dineInOpen: "12:00",
      dineInClose: "12:00",
      day: 1,
    },
    {
      pickupOpen: "00:00",
      pickupClose: "23:59",
      deliveryOpen: "12:00",
      deliveryClose: "12:00",
      dineInOpen: "12:00",
      dineInClose: "12:00",
      day: 2,
    },
    {
      pickupOpen: "12:00",
      pickupClose: "23:59",
      deliveryOpen: "12:00",
      deliveryClose: "12:00",
      dineInOpen: "12:00",
      dineInClose: "12:00",
      day: 3,
    },
    {
      pickupOpen: "00:00",
      pickupClose: "23:59",
      deliveryOpen: "12:00",
      deliveryClose: "12:00",
      dineInOpen: "12:00",
      dineInClose: "12:00",
      day: 4,
    },
    {
      pickupOpen: "00:00",
      pickupClose: "12:00",
      deliveryOpen: "01:00",
      deliveryClose: "23:45",
      dineInOpen: "12:00",
      dineInClose: "12:00",
      day: 5,
    },
    {
      pickupOpen: "00:00",
      pickupClose: "23:59",
      deliveryOpen: "00:00",
      deliveryClose: "23:59",
      dineInOpen: "08:00",
      dineInClose: "00:00",
      day: 6,
    },
    {
      pickupOpen: "08:00",
      pickupClose: "00:00",
      deliveryOpen: "08:00",
      deliveryClose: "00:00",
      dineInOpen: "08:00",
      dineInClose: "00:00",
      day: 0,
    },
  ],
  name: "Broadway",
  phone: {
    isVerified: false,
    value: "2123020385",
  },
  distanceInMiles: 6.246264794202286,
};

export const LocationCardStory = () => {
  return <LocationCard />;
};

export default {
  title: "Themed Components/LocationCardStory",
};
