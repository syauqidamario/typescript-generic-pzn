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
});