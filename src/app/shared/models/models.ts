
  export interface Reservation {
      id: number;
      room: Room;
      hour_start: Date;
      number_of_players: number;
      level: number;
      score: number;
      total_price: string;
      creation_time: Date;
      is_validated: boolean;
      is_updatable: boolean;
      is_cancelable: boolean;
      subscribers: Subscriber[];
      invoices: Invoice[];
      current_staff_hosts: boolean;
      staff: any[];  }

  export interface Room {
      id: number;
      name: string;
      description: string;
      available: boolean;
      game_duration: number;
      min_players: number;
      max_players: number;
      min_level: number;
      max_level: number;
      planning: any[];
      room_prices: any[];
  }

  export interface Subscriber {
      id: number;
      email: string;
      firstname: string;
      lastname: string;
      email_reception: boolean;
      is_main: boolean;
  }

  export interface Invoice {
      details: string;
      total: string;
      creation_date: Date;
  }

  export interface ReservationObject {
      message: Reservation[];
      returnCode: number;
  }



