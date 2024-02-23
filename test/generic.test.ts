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
});