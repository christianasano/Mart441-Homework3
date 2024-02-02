function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Bueno") {
        document.getElementById("story").innerHTML = "The world will make you work hard to succeed. And that is a lesson of power and responsibility all in one.";
        document.getElementById("choice1").innerHTML = "Power";
        document.getElementById("choice2").innerHTML = "Responsibility";
    } else if (choice == 2 && answer2 == "No Bueno") {
        document.getElementById("story").innerHTML = "Live to fight another day and eat as many california burritos as I can :)'";
        document.getElementById("choice1").innerHTML = "Live a little";
        document.getElementById("choice2").innerHTML = "Have a corona";
    } else if (choice == 1 && answer1 == "Power") {
        document.getElementById("story").innerHTML = "Unimaginable abilities to make a name for yourself all over the world...";
        document.getElementById("choice1").innerHTML = "life is good";
        document.getElementById("choice2").innerHTML = "Flame Power";
    } else if (choice == 2 && answer2 == "Responsibility") {
        document.getElementById("story").innerHTML = "Be the greatest version of yourself that the future you can be thanful for you.'";
        document.getElementById("choice1").innerHTML = "The End";
        document.getElementById("choice2").innerHTML = "Restart the Past";
    } else if (choice == 1 && answer1 == "Live a little") {
        document.getElementById("story").innerHTML = "A wise dudwe told another guy that if you can't say anything nice don't say it at all.'";
        document.getElementById("choice1").innerHTML = "be brave and fight";
        document.getElementById("choice2").innerHTML = "John wick his butt";
    } else if (choice == 2 && answer2 == "Have a corona") {
        document.getElementById("story").innerHTML = "The world changed because you became the version of you that is proud of all things he does. Even living like larryyyy.";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "Negative";
    }
    else if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "One day you will thank yourself for being not only a great person but a smart thinker." + "<br> A DAY WILL COME WERE YOU WILL HAVE TO MAKE A CHOICE!!!";
        document.getElementById("choice1").innerHTML = "Save the universe";
        document.getElementById("choice2").innerHTML = "Join Thanos";
    } else if (choice == 2 && answer2 == "Negative") {
        document.getElementById("story").innerHTML = "A day like no other, then chance to be the most strongest person in all of the galaxy because of the 6 infinity stones in the palm of your hand. " + "<br> DONT BE AFRAID TO CHOSE THE FAIT OF THE GALAXY";
        document.getElementById("choice1").innerHTML = "Join the Avengers";
        document.getElementById("choice2").innerHTML = "Take over the universe";
    } 
    }


