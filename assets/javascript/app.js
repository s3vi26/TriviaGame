$( document ).ready(function () {
    let game = {
        time: "",
        correct: "",
        incorrect: "",
        unanswered: "",
        ans_array: "",    
        start:
            function start(){
                $(".start_screen").hide()
                $(".game_content").show()
                game.time = 5
                $("#time").text(game.time)
                game.display_time()
            },
        display_time:
            function display_time() {
                intervalId = setInterval(game.countdown, 1000)
                $("#time").text(game.time)   
        },
        countdown:
            function countdown() {
                game.time--
                $("#time").text(game.time)
                if (game.time === 0) {
                    clearInterval(intervalId)
                    game.results()
                    $(".game_content").hide()
                    $(".game_over").show()
                }
            },
        results:
            function results () {
                array = $("input:checked")
                    game.ans_array = array
                    game.score()
                },
        score:
        function score() {
            for (i=0; i<game.ans_array.length; i++) {
                let temp = this.ans_array[i]
                console.log($(temp).val())
                if ($(temp).val() === "true") {
                    game.correct++
                    $("#correct_count").text(game.correct)

                }
                if ($(temp).val() === "false") {
                    game.incorrect++
                    $("#incorrect_count").text(game.incorrect)
                }
                
            }
        },    
    }
    $("#start_button").on("click", game.start)
    start_screen()
    function start_screen () {
        $(".game_content").hide()
        $(".game_over").hide()
    }
    })