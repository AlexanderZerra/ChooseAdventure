const adventureGame = () => {
  let adventureName = prompt('Hello traveler...what is thy called ?')
  alert(
    `Pleasure to make your aquaintance ${adventureName}. I hope this journey bids you well.`
  )

  let tipOne = alert('A friendly tip...Choose Wisely.')

  let statementOne = alert(
    'The journey if you so choose may lead to great fortune or peril. '
  )

  let questionOne = prompt(
    `Now ${adventureName} you must make your first decision on this quest. You have stumbled upon a fork in the road...will you select to go Right or Left...both paths seem the same...for now (Please select R or L)`
  )

  switch (questionOne) {
    case 'R':
      alert('You have chosen the to go Right')
      let userFirstChoice = alert(
        `${adventureName} you have elected to take the road that leads to the right...you walk through what seems like a never ending plains field...The sun is low.`
      )
      let userFirstChoicePrompt = prompt(
        `${adventureName} you have been traveling for what seems like an eternity...the question has dawned on you that you either need to make a big push through the night or hunker down...Do you make camp or travel ? (Please select S for Sleep or T for Travel)`
      )
      if (userFirstChoice === 'S') {
        alert(
          'You have chosen to hunker down for the night. You have made a fire...it brings you warmth on the chilly night...the light brings some comfort in the dark.'
        )
        let userFirstChoiceAlert = alert(
          'Traveler...rejoice in the gut instinct of hunkering down for the night. Through the night you stoked the fire and kept yourself warm in what seemed like an out of nowhere frost'
        )
        let userFirstChoiceAlertAlert = alert(
          'Your journey continues. After a hearty breakfast you continue pressing on. The open plains has now turned into a dense overgrowth with lots of trees. You spot a shack and smoke coming out of the fireplace'
        )
        let userFirstChoicePrompt = prompt(
          'You have arrived at the shack...you are unsure what direction to proceed. You have an idea but are unsure (Please enter Shack to investigate or Travel to keep on traveling) '
        )
        if (userThirdChoice === 'Shack') {
          alert(
            'You have chosen to investigate the shack. You smell an aroma of food as you inch closer and closer.'
          )
          let userThirdChoiceAlert = alert(
            'You knock on the shack door...you wait...unsure if friendly or hostile. '
          )
          let userThirdChoiceAlertTwo = alert(
            'The door opens...a large green object is in the doorway...He asks you a simple question...What are you doing in my SWAMP...'
          )
          let userThirdChoiceAlertThree = alert(
            'The creature yells again... WHAT ARE YOU DOING IN MY SWAMP...you look with scared eyes. You explain you are lost and need directions. The green entity sizes you up...and says OK'
          )
          let userThirdChoiceAlertFour = alert(
            `${adventureName} you blurt out as you try and introduce yourself...the green man says his name is Beck`
          )
        }

        if (userFirstChoice === 'T') {
          alert(
            ' You have chosen to continue to travel. As you continue to travel you notice that the temperature is starting to drop rapidly'
          )
          let userSecondChoiceAlert = alert(
            `${adventureName} night is upon you...its very cold out. You are shivering very much...you want nothing more then to feel some relief from this relenting cold...`
          )
          let userSecondChoiceAlertTwo = alert(
            'You think you see something behind you...You hear a noise...by the time you hear it...'
          )
          let userSecondChoiceAlertDeath = alert(
            'Outlook...grim unfortunately ${adventureName} a pack of Wolves was tracking you. Your fate was decided when you kept traveling.'
          )
        }
      }
      break
  }
}
adventureGame()
