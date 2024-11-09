Question: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Answer: 

    Type Guards helps the compiler understand the kinds of values we’re working with. However, there are times when we need to perform dynamic checks during runtime. 

    Without type guards, managing such checks could get messy and unreliable. Type guards provide a systematic approach, helping us handle different types safely and avoid runtime errors.

Types of Type Guards and Their Use Cases:

   Let’s explore the different kinds of type guards available in TypeScript and how they address these challenges.

   1. typeof Type Guard:

       The typeof type guard is the simplest and most widely used. It’s useful for primitive types like string, number, and boolean.

        Use Case: When we have  to ensure that a variable has a specific primitive type before using it.

        function formatPrice(price: string | number): string {
       if (typeof price === "number") {
               return `${price.toFixed(2)}`;
                  } else {
                    return `$${parseFloat(price).toFixed(2)}`;
                  }
          }


    2. instanceof Type Guard:

         The instanceof type guard checks if an object is an instance of a particular class or constructor function. This is particularly useful when working with class instances or complex objects.

         Use Case: When we need to tell the difference between instances of different classes or constructors.    

             class Dog {
                   bark() {
                            console.log("Barking!");
                          }
                       }

           class Cat {
                    meow() {
                              console.log("Meow!");
                           }
                     }

          function makeSound(animal: Dog | Cat) {
                  if (animal instanceof Dog) {
                     animal.bark();
                   } else if (animal instanceof Cat) {
                          animal.meow();
                         }
                      }

            const myDog = new Dog();
              makeSound(myDog);  // Output: "Barking!"


  3. in Type Guard:

      The in type guard checks if a specific property exists on an object. This is particularly helpful when dealing with types that share similar structures but have unique properties.

       Use Case: When you have objects with different shapes, and you want to check for a specific property to tell the difference between them.    

        type Square = {
                        kind: "square";
                        sideLength: number;
                      };

      type Rectangle = {
                        kind: "rectangle";
                        width: number;
                        height: number;
                        };

        function calculateArea(shape: Square | Rectangle) {
              if ("sideLength" in shape) {
                  return shape.sideLength * shape.sideLength;
              } else {
               return shape.width * shape.height;
             }
          }

      console.log(calculateArea({ kind: "square", sideLength: 4 })); 
       

  4. Custom Type Guards (is Keyword):

     Custom type guards give us full control to define complex type-checking logic. With custom type guards, you can create functions that return a boolean value while specifying a type predicate (using the is keyword) to narrow down the type.

     Use Case: When we need custom logic to determine an object’s type, especially with complex or nested structures.  

        type Fish = { kind: "fish"; swim: string };
        type Bird = { kind: "bird"; fly: string };

       function isFish(pet: Fish | Bird): pet is Fish {
               return pet.kind === "fish";
            }

       function move(pet: Fish | Bird) {
               if (isFish(pet)) {
                    console.log(pet.swim);
                  } else {
                    console.log(pet.fly);
                  }
               }

         const myPet: Fish = { kind: "fish", swim: "The fish is swimming!" };
        move(myPet);  // Output: "The fish is swimming!"
  
     
  Conclusion:
     Type guards are a powerful feature in TypeScript that type-checking, reduce errors, and improve code readability and maintainability. By typeof, instanceof, custom type guards, and the in operator, we can handle complex types safely and effectively in TypeScript projects.