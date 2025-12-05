function play(){
    // hide home screen
    const homeScreen = document.getElementById('home-screen')
    homeScreen.classList.add('hidden')
    // show play ground screen
    const playGraund = document.getElementById('play-ground')
    playGraund.classList.remove('hidden')
    // console.log(homeScreen.classList);
}