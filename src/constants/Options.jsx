export const SelectTravelesList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'Solo Traveler',
      icon: '👤',
      people: '1',
    },
    {
      id: 2,
      title: 'Me & My Partner',
      desc: 'Traveling with partner',
      icon: '👫',
      people: '2',
    },
    {
      id: 3,
      title: 'Family',
      desc: 'Traveling with family',
      icon: '👨‍👩‍👧‍👦',
      people: '3 to 5 people',
    },
    {
      id: 4,
      title: 'Group',
      desc: 'Traveling with friends',
      icon: '👨‍👩‍👧‍👦',
      people: '5 to 10 people',
    }
  ];
  
  export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Traveling on a budget',
      icon: '💰',
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Traveling with a moderate budget',
      icon: '💰💰',
    },
    {
      id: 3,
      title: 'Expensive',
      desc: 'Traveling with a high budget',
      icon: '💰💰💰',
    },
  ];
  export const AI_PROMPT ='Generate Travel Plan for Location: {location}, for {noOfDays} Days for {traveller} with a {budget} budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {noOfDays} days with each day plan with best time to visit in JSON format.\n';