export const formatHour = (hour) => hour.substring(0, 5);

export const toDayOfWeek = (number) => {
  let toReturn = "";
  switch (number) {
    case 1:
      toReturn = "Mon";
      break;
    case 2:
      toReturn = "Tue";
      break;
    case 3:
      toReturn = "Wed";
      break;
    case 4:
      toReturn = "Thur";
      break;
    case 5:
      toReturn = "Fri";
      break;
    case 6:
      toReturn = "Sat";
      break;
    default:
      toReturn = "Sun";
  }
  return toReturn;
};

export const toCivilianTime = (time) => {
  if (time) {
    let [hour, minute] = time.split(":");
    hour = parseInt(hour, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    return `${((hour + 11) % 12) + 1}:${minute} ${suffix}`;
  }
};

export const sortAndSplitHours = (obj) => {
  const splitBySequence = (items, differences) =>
    items.reduce(
      (memo, item) => {
        const lastArray = memo[memo.length - 1];
        const lastItem = lastArray[lastArray.length - 1];

        if (!lastItem || differences.includes(item - lastItem)) {
          lastArray.push(item);
        } else {
          memo.push([item]);
        }

        return memo;
      },
      [[]]
    );

  const getFlankDays = (k) => {
    if (k.length > 1) {
      return [toDayOfWeek(k[0]), toDayOfWeek(k[k.length - 1])].join("-");
    }
    return toDayOfWeek(k[0]);
  };

  const x = Object.entries(obj)
    .reduce((accu, i) => {
      const daysInSequence = splitBySequence(i[1], [1, -6]);
      return [
        ...accu,
        ...daysInSequence.map((x) => ({
          order: x[0] ? x[0] : 7,
          days: x,
          text: getFlankDays(x),
          hours: i[0],
        })),
      ];
    }, [])
    .sort((a, b) => a.order - b.order);
  return x;
};

export const formatTime = (min) => {
  let hours = 0;
  let minutes = 0;
  if (min) {
    hours = Math.floor(min / 60);
    minutes = min % 60;
  }

  const values = [];
  if (hours) {
    values.push(`${hours} ${hours > 1 ? "hours" : "hour"}`);
  }
  if (minutes) {
    values.push(`${minutes} ${minutes > 1 ? "minutes" : "minute"}`);
  }
  return values.join(" and ");
};
interface HoursProp {
  pickupOpen: string;
  pickupClose: string;
  deliveryOpen: string;
  deliveryClose: string;
  dineInOpen: string;
  dineInClose: string;
  day: number;
}

export const combineHours = (hours: [HoursProp]) => {
  if (!hours) return {delivery: [], kiosk: [], pickup: []};
  const hoursObject = hours.reduce(
    (accu, i) => {
      if (!i.deliveryOpen && !i.deliveryClose) {
        accu.delivery.Closed = [...(accu.delivery.Closed || []), i.day];
      } else {
        const deliveryOpen = toCivilianTime(formatHour(i.deliveryOpen));
        const deliveryClose = toCivilianTime(formatHour(i.deliveryClose));
        if (accu.delivery[`${deliveryOpen} - ${deliveryClose}`]) {
          accu.delivery[`${deliveryOpen} - ${deliveryClose}`].push(i.day);
        } else {
          accu.delivery[`${deliveryOpen} - ${deliveryClose}`] = [i.day];
        }
      }

      if (!i.pickupOpen && !i.pickupClose) {
        accu.pickup.Closed = [...(accu.pickup.Closed || []), i.day];
      } else {
        const pickupOpen = toCivilianTime(formatHour(i.pickupOpen));
        const pickupClose = toCivilianTime(formatHour(i.pickupClose));
        if (accu.pickup[`${pickupOpen} - ${pickupClose}`]) {
          accu.pickup[`${pickupOpen} - ${pickupClose}`].push(i.day);
        } else {
          accu.pickup[`${pickupOpen} - ${pickupClose}`] = [i.day];
        }
      }

      if (!i.dineInOpen && !i.dineInClose) {
        accu.kiosk.Closed = [...(accu.kiosk.Closed || []), i.day];
      } else {
        const dineInOpen = toCivilianTime(formatHour(i.dineInOpen));
        const dineInClose = toCivilianTime(formatHour(i.dineInClose));
        if (accu.kiosk[`${dineInOpen} - ${dineInClose}`]) {
          accu.kiosk[`${dineInOpen} - ${dineInClose}`].push(i.day);
        } else {
          accu.kiosk[`${dineInOpen} - ${dineInClose}`] = [i.day];
        }
      }

      return accu;
    },
    {
      delivery: {},
      pickup: {},
      kiosk: {},
    }
  );

  return {
    delivery: sortAndSplitHours(hoursObject.delivery),
    pickup: sortAndSplitHours(hoursObject.pickup),
    kiosk: sortAndSplitHours(hoursObject.kiosk),
  };
};
