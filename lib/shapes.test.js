const {Triangle, Circle, Square}= require('../lib/shapes.js');


    describe('Triangle test', ()=>{
        it('should return a Triangle svg string', ()=>{
            const shape=new Triangle;
            shape.setColor("purple");
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple"/>`)
        })
    })

    describe('Square test', ()=>{
        it('should return a Square svg string', ()=>{
            const shape=new Square;
            shape.setColor("red");
            expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="red"/>`)
        })
    })

    describe('Circle test', ()=>{
        it('should return a Circle svg string', ()=>{
            const shape=new Circle;
            shape.setColor("green");
            expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="green"/>`)
            console.log(shape);
        })
    })