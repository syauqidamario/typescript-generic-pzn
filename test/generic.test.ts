describe('generic', () => {

      class GenericData<T>{
            value: T;

            constructor(value: T){
                  this.value = value;
            }
      }

      it('should support multiple data type', async() => {
            const dataNumber = new GenericData<number>(123);
            expect(dataNumber.value).toBe(123);
            const dataString = new GenericData<string>("Syauqi");
            const upper = dataString.value.toUpperCase();
            expect(upper).toBe("SYAUQI");
      })

      function create< T >(value:T):T{
            return value;
      }

      it('should support', () => {
            const result = create<string>('Hello');
            expect(result).toBe('Hello');
            const result2 = create< number >(43);
            expect(result2).toBe(43);
      })

      class Entry< K, V >
      {
            constructor(public key: K, public value: V)
            {

            }
      }

      class Triple< K, V, T >
            {
                  constructor(public first: K, public second: V, public third: T)
                  {
                        
                  }
            }

      it('should support', () => 
      {
            const entry = new Entry<number, string>(1, "Hey");
            expect(entry.key).toBe(1);
            expect(entry.value).toBe('Hey');

            const triple = new Triple<number, string, boolean>(1, 'Hey', true);
            expect(triple.first).toBe(1);
            expect(triple.second).toBe('Hey');
            expect(triple.third).toBe(true);
      })

      it('should optional type', () => {
            const entry = new Entry(1, 'Hi');
            expect(entry.key).toBe(1);
            expect(entry.value.toUpperCase()).toBe('HI');
      });

      class SimpleGeneric < T = number >
      {
            private value?: T;

            setValue(value: T)
            {
                  this.value = value;
            }

            getValue() : T | undefined{
                  return this.value;
            }
      }

      it('should create simple generic', async () => {
            const simple = new SimpleGeneric< string >;
            simple.setValue("Eko");
            expect(simple.getValue()!.toUpperCase()).toBe("EKO");
        });

      interface Ticket
      {
            ticket_id: string;
            passenger_name: string;
      }

      interface Fee extends Ticket
      {
            totalFee: number;
      }

      interface SeatNumber extends Ticket{
            seatNumber: number;
      }

      class TicketData<T extends Ticket>
      {
            constructor(public ticket: T){

            }
      }

      it('should support constraint', async() => 
      {
            const ticket1 = new TicketData< Ticket > ({
                  ticket_id: "001",
                  passenger_name: "Katsu Anri"
            });
            const ticket2 = new TicketData< Fee > ({
                  ticket_id: "001",
                  passenger_name: "Katsu Anri",
                  totalFee: 900000,
            });

            // const data3 = new TicketData< string >("Yuu Shimamura");
            // const data4 = new TicketData< number >("3556");
      })

      it('should support array', () => 
      {
            const array = new Array<string>();
            array.push("Kanon");
            array.push("Miyahara");
            expect(array[0].toUpperCase()).toEqual("KANON");
            expect(array[1].toUpperCase()).toEqual("MIYAHARA");
      })

      it('should support set', () => 
      {
            const set = new Set<string>();
            set.add('Itono');
            set.add('Okita');
            set.add('Mark');
            // expect(set.size).toBe(2);
            expect(set.has('Itono')).toBe(true);
            expect(set.has('Okita')).toBe(true);
      })

      it('should support map', () => 
      {
            const map = new Map<string, number>();
            map.set('Alisa', 100);
            map.set('Sakamaki', 99);
            expect(map.get('Alisa')).toBe(100);
            expect(map.get('Sakamaki')).toBe(99);
      })
});