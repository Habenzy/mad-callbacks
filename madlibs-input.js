let nounOne;
let verbOne;
let adjective;
let nounTwo;
let verbTwo;
let adverb;


console.log("Hello! Let's play Madlibs. Give me a noun...")

process.stdin.once('data',function(noun) {
  // taking in the user input and storing it in a var for later use
  nounOne = noun.toString().trim();
  // prompting the user for next input
  console.log("Now give me a verb")
  // handel the next input
  process.stdin.once('data',function(verb) {
    verbOne = verb.toString().trim()

    console.log("Now give me an adjective")

    process.stdin.once('data',function(adj) {
      adjective = adj.toString().trim()

      console.log('Give me another noun')

      process.stdin.once('data',function(noun) {
        nounTwo = noun.toString().trim()

        console.log("Give me another verb")

        process.stdin.once('data',function(verb) {
          verbTwo = verb.toString().trim()

          console.log("Okay last one. Give me an adverb")

          process.stdin.once('data',function(adv) {
            adverb = adv.toString().trim()

            console.log(`Once upon a ${nounOne}, there ${verbOne} a far away land caught in a ${adj} civil war. In the ${nounTwo}. This happened long, long ago when the emperor abolished the republic, and democracy ${verbTwo} to thunderous applause. Everything went ${adverb}.`)

            process.exit()
          })
        })
      })
    })
  })
})
