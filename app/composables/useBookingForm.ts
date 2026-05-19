export const useBookingForm = () => {
  const name = useState<string>('name', () => '');
  const phoneNumber = useState<string>('phoneNumber', () => '');
  const email = useState<string>('email', () => '');
  const numberOfPassengers = useState<number>('numberOfPassengers', () => null);
  const pickUpLocation = useState<string>('pickUpLocation', () => '');
  const dropOffLocation = useState<string>('dropOffLocation', () => '');
  const pickupPlace = useState<any>('pickupPlace', () => null);
  const dropoffPlace = useState<any>('dropoffPlace', () => null);
  const stops = useState<{ value: string; place?: any }[]>('stops', () => []);
  const selectedDate = useState<Date | null>('selectedDate', () => null);
  const selectedTime = useState<string | null>('selectedTime', () => null);
  const serviceType = useState<string>('serviceType', () => '');
  const additionalInfo = useState<string>('additionalInfo', () => '');
  const transferType = useState<string>('transferType', () => 'one-way');

  return {
    name,
    phoneNumber,
    email,
    numberOfPassengers,
    pickUpLocation,
    dropOffLocation,
    pickupPlace,
    dropoffPlace,
    stops,
    selectedDate,
    selectedTime,
    serviceType,
    additionalInfo,
    transferType,
  };
};
