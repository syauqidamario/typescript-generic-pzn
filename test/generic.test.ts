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
});