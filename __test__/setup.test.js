// despues de cada prueba
afterEach(() => console.log("despues de cada prueba"));
afterAll(() => console.log("despues de todas las pruebas"));

// antes de cada prueba
beforeEach(() => console.log("antes de cada prueba"));
beforeAll(() => console.log("antes de todas las pruebas"));

describe('preparar antes de ejecutar', ()=>{
    test('Es verdadero', ()=>{
        expect(true).toBeTruthy();
    });
    test('Es falso', ()=>{
        expect(false).not.toBeTruthy();
    })
})